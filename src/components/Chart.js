import React from "react"
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import Portlet from "./Portlet";
import {titles} from "../chart-titles";

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const CustomTooltip = ({active, payload, label, title}) => {
    const infectionData = useSelector(state => state.infection.infectionData);

    const {t} = useTranslation();

    if (active && payload) {
        return (
            <Portlet title={t('portlet.title')} subtitle={label}>
                <div className="chart-tooltip">
                    <table>
                        <tr>
                            <th className="color-primary3">{t('portlet.table.country')}</th>
                            <th className="color-primary3">{t('portlet.table.date')}</th>
                            {title === titles.confirmed &&
                                <th className="color-primary3">{t('portlet.table.confirmed')}</th>
                            }
                            {title === titles.confirmed_cases_per_million &&
                                <th className="color-primary3">{t('portlet.table.confirmedpermillion')}</th>
                            }
                            {title === titles.deaths &&
                                <th className="color-primary3">{t('portlet.table.deaths')}</th>
                            }
                            {title === titles.deaths_cases_per_million &&
                                <th className="color-primary3">{t('portlet.table.deathspermillion')}</th>
                            }
                            {title === titles.recovered &&
                                <th className="color-primary3">{t('portlet.table.recovered')}</th>
                            }
                            {title === titles.recovered_cases_per_million &&
                                <th className="color-primary3">{t('portlet.table.deathspermillion')}</th>
                            }
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
                                                {infectionEntry.date}
                                            </td>
                                            {title === titles.confirmed &&
                                                <td>
                                                    {infectionEntry.confirmed}
                                                </td>
                                            }
                                            {title === titles.confirmed_cases_per_million &&
                                            <td>
                                                {infectionEntry.confirmed_cases_per_million}
                                            </td>
                                            }
                                            {title === titles.deaths &&
                                            <td>
                                                {infectionEntry.deaths}
                                            </td>
                                            }
                                            {title === titles.deaths_cases_per_million &&
                                            <td>
                                                {infectionEntry.deaths_cases_per_million}
                                            </td>
                                            }
                                            {title === titles.recovered &&
                                            <td>
                                                {infectionEntry.recovered}
                                            </td>
                                            }
                                            {title === titles.recovered_cases_per_million &&
                                            <td>
                                                {infectionEntry.recovered_cases_per_million}
                                            </td>
                                            }
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

const Chart = ({infectionData, selectedCountries, content}) => {

    const mode = useSelector(state => state.mode.mode);

    return (
        <div style={styles.chartContainer}>
            <ResponsiveContainer>
                <LineChart
                    data={infectionData.data}
                    margin={{top: 5, right: 20, left: 10, bottom: 5}}
                >
                    <YAxis type="number" stroke={mode === "dark" ? "rgba(255, 255, 255, 0.70)" : "rgba(0, 0, 0, 0.8)"}/>
                    <XAxis dataKey="day" stroke={mode === "dark" ? "rgba(255, 255, 255, 0.70)" : "rgba(0, 0, 0, 0.8)"}/>
                    <Tooltip content={<CustomTooltip title={content}/>}/>
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
