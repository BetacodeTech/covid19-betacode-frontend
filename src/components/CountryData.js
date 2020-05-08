import React from "react";
import {Col, Row} from "react-bootstrap";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

import Kpi from "./Kpi";
import Portlet from "./Portlet";

const Chart = ({country_chart_data}) => {

    const mode = useSelector(state => state.mode.mode);

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
                        <Tooltip
                          contentStyle={{
                              backgroundColor: mode === "dark" ? "#262326" : "#fff",
                              color: mode === "dark" ? "#fff" : "rgba(0, 0, 0, 0.85)"
                          }}
                        />
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

    const {t} = useTranslation();

    return (
        <Portlet title={country} subtitle={"- " + day}>
            <Row>
                <Col xs={12} lg={6}>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <Kpi title={t('kpi.confirmed')} subtitle={t('kpi.absolutenumber')} value={confirmed} color="#DF7242"/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Kpi title={t('kpi.deaths')} subtitle={t('kpi.absolutenumber')} value={deaths} color="#D0568C"/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Kpi title={t('kpi.recovered')} subtitle={t('kpi.absolutenumber')} value={recovered} color="#23c42b"/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Kpi title={t('kpi.confirmed')} subtitle={t('kpi.permillioninhabitant')} value={confirmed_per_million}
                                 color="#DF7242"/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Kpi title={t('kpi.deaths')} subtitle={t('kpi.permillioninhabitant')} value={deaths_per_million}
                                 color="#D0568C"/>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Kpi title={t('kpi.recovered')} subtitle={t('kpi.permillioninhabitant')} value={recovered_per_million}
                                 color="#23c42b"/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={6}>
                    {country_chart_data && <Chart country_chart_data={country_chart_data}/>}
                </Col>
            </Row>
        </Portlet>
    )
};

export default CountryData;
