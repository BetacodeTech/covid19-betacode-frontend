import React from "react"
import {Brush, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Card from "./Card";
import {useSelector} from "react-redux";
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

        if (active && payload) {
            return (
                <Portlet title="Dia" subtitle={label}>
                    <div className="chart-tooltip">
                        <table>
                            <tr>
                                <th className="color-primary3">Country</th>
                                <th className="color-primary3">Day</th>
                                <th className="color-primary3">Date</th>
                                <th className="color-primary3">Confirmed</th>
                                <th className="color-primary3">Deaths</th>
                                <th className="color-primary3">Confirmed</th>
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
                        <span className="color-primary4">*Mh - Por milhão de habitantes</span>
                    </div>
                </Portlet>
            );

        }

        return null;
    }
;

const Chart = ({infectionData, selectedCountries, title}) => {

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
                    <CartesianGrid stroke="#f5f5f5"/>
                    {selectedCountries && selectedCountries.map(
                        (country) => <Line type="monotone" dataKey={country.value} stroke={country.color}/>)
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
