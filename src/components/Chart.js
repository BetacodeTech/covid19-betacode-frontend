import React from "react"
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import Portlet from "./Portlet";


const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const CustomTooltip = ({active, payload, label}) => {
    const infectionData = useSelector(state => state.infection.infectionData);

    const {t} = useTranslation();

    if (active && payload) {
        return (
            <Portlet title={t('portlet.title')} subtitle={label}>
                <div className="chart-tooltip">
                    <table>
                        <tr>
                            <th className="color-primary3">{t('portlet.table.country')}</th>
                            <th className="color-primary3">{t('portlet.table.day')}</th>
                            <th className="color-primary3">{t('portlet.table.date')}</th>
                            <th className="color-primary3">{t('portlet.table.confirmed')}</th>
                            <th className="color-primary3">{t('portlet.table.deaths')}</th>
                            <th className="color-primary3">{t('portlet.table.recovered')}</th>
                        </tr>

                        {payload.map(data => {
                            if(infectionData) {
                                const infectionEntry = infectionData[data.dataKey][parseInt(label)];
                                if (infectionEntry && data && data.stroke) {
                                    const color = data.stroke;
                                    const bgColor = data.stroke + "0D";
                                    return (
                                        <tr style={{backgroundColor: bgColor, color: color}}>
                                            <td>
                                                {infectionEntry.name}
                                            </td>
                                            <td>
                                                {infectionEntry.day}
                                            </td>
                                            <td>
                                                {infectionEntry.date}
                                            </td>
                                            <td>
                                                {infectionEntry.confirmed}
                                                <br/> {infectionEntry.confirmed_cases_per_million}/Mh
                                            </td>
                                            <td>
                                                {infectionEntry.deaths}
                                                <br/> {infectionEntry.deaths_cases_per_million}/Mh
                                            </td>
                                            <td>
                                                {infectionEntry.recovered}
                                                <br/> {infectionEntry.recovered_cases_per_million}/Mh
                                            </td>
                                        </tr>
                                    )
                                }
                            }
                        })}
                    </table>
                    <br/>
                    <span className="color-primary4">{t("portlet.footer")}</span>
                </div>
            </Portlet>
        );

    }

    return null;
    }
;

const Chart = ({infectionData, selectedCountries, title}) => {

    const mode = useSelector(state => state.mode.mode);

    return (
        <div style={styles.chartContainer}>
            <ResponsiveContainer>
                <LineChart
                    data={infectionData.data}
                    margin={{top: 5, right: 20, left: 10, bottom: 5}}
                >
                    <YAxis type="number"/>
                    <XAxis dataKey="day"/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <CartesianGrid stroke={mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "#f5f5f5"}/>
                    {selectedCountries && selectedCountries.map(
                        (country) => <Line type="monotone" dataKey={country.value} stroke={country.color} dot={{fill: country.color, stroke: 'none'}}/>)
                    }
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

const styles = {
    chartContainer: {
        width: '100%',
        height: 500,
    }
}

export default Chart;
