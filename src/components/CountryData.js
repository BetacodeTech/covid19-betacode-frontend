import React from "react";
import Kpi from "./Kpi";
import Portlet from "./Portlet";
import {Col, Row} from "react-bootstrap";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const Chart = ({country_chart_data}) => {

    return (
        <div style={styles.chartContainer}>
            <ResponsiveContainer>
                {
                    country_chart_data && <LineChart
                        data={country_chart_data.data}
                        margin={{top: 5, right: 20, left: 10, bottom: 5}}
                    >
                        <YAxis type="number"/>
                        <XAxis dataKey="date"/>
                        <Tooltip/>
                        <CartesianGrid stroke="#f5f5f5"/>
                        <Line type="monotone" dataKey="confirmed" stroke="#DF7242"/>)
                        <Line type="monotone" dataKey="deaths" stroke="#D0568C"/>)
                        <Line type="monotone" dataKey="recovered" stroke="#23c42b"/>)
                    </LineChart>
                }
            </ResponsiveContainer>
        </div>
    );
};

const styles = {
    chartContainer: {
        width: '100%',
        height: 250,
    }
};

const CountryData = ({country, day, confirmed, deaths, recovered, confirmed_per_million, deaths_per_million, recovered_per_million, country_chart_data}) => {
    return (
        <Portlet title={country} subtitle={"- " + day}>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <Kpi title="Nº Confirmados" subtitle="Dados absolutos" value={confirmed} color="#DF7242"/>
                        </Col>
                        <Col>
                            <Kpi title="Nº Mortes" subtitle="Dados absolutos" value={deaths} color="#D0568C"/>
                        </Col>
                        <Col>
                            <Kpi title="Nº Recuperados" subtitle="Dados absolutos" value={recovered} color="#23c42b"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Kpi title="Nº Confirmados" subtitle="Milhões de habitantes" value={confirmed_per_million}
                                 color="#DF7242"/>
                        </Col>
                        <Col>
                            <Kpi title="Nº Mortes" subtitle="Milhões de habitantes" value={deaths_per_million}
                                 color="#D0568C"/>
                        </Col>
                        <Col>
                            <Kpi title="Nº Recuperados" subtitle="Milhões de habitantes" value={recovered_per_million}
                                 color="#23c42b"/>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    {country_chart_data && <Chart country_chart_data={country_chart_data}/>}
                </Col>
            </Row>
        </Portlet>
    )
};

export default CountryData;
