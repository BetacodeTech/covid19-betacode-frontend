import React from "react"
import {Brush, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Card from "./Card";


const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const Chart = ({infectionData, selectedCountries, title}) => {

    return (
        <Card>
            <h1 style={styles.title}> {title} </h1>
            <div style={styles.chartContainer}>
                <ResponsiveContainer>
                    <LineChart
                        data={infectionData.data}
                        margin={{top: 5, right: 20, left: 10, bottom: 5}}
                    >
                        <YAxis type="number"/>
                        <XAxis dataKey="day"/>
                        <Tooltip/>
                        <CartesianGrid stroke="#f5f5f5"/>
                        {selectedCountries && selectedCountries.map(
                            (country) => <Line type="monotone" dataKey={country.value} stroke={country.color}/>)
                        }
                        <Brush/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

const styles = {
    container: {
        backgroundColor: "#fff",
        margin: 20,
        padding: 30,
        borderRadius: 5
    },
    title: {
      margin: "10px 20px 20px 20px"
    },
    chartContainer: {
        width: '100%',
        height: 500,
    }
}

export default Chart;
