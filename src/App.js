import React, {useEffect} from 'react';

import Chart from "./components/Chart";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import {actions} from "./store/infection";
import {actions as modeActions} from "./store/mode";
import {useDispatch, useSelector} from "react-redux";
import CountryPicker from "./components/CountryPicker";

import {useTranslation} from "react-i18next";

import "./i18n";
import Info from "./components/Info";

import "./styles/light.css"
import "./styles/globalStyles.css"
import "./styles/dark.css"

import Portlet from "./components/Portlet";
import CountryData from "./components/CountryData";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    const dispatch = useDispatch();

    const {t, i18n} = useTranslation();

    const casesPerMillion = useSelector(state => state.infection.casesPerMillion);
    const deathsPerMillion = useSelector(state => state.infection.deathsPerMillion);
    const recoveredPerMillion = useSelector(state => state.infection.recoveredPerMillion);

    const infectionData = useSelector(state => state.infection.infectionData);

    const countriesChartData = useSelector(state => state.infection.countriesChartData);

    const confirmed = useSelector(state => state.infection.confirmed);
    const deaths = useSelector(state => state.infection.deaths);
    const recovered = useSelector(state => state.infection.recovered);

    const selectedCountries = useSelector(state => state.infection.selectedCountries);

    const mode = useSelector(state => state.mode.mode);

    useEffect(() => {
        dispatch(actions.getListOfCountries())
    }, []);

    useEffect(() => {
        dispatch(actions.getInfectionData(selectedCountries));

        dispatch(actions.getCasesPerMillion(selectedCountries));
        dispatch(actions.getDeathsPerMillion(selectedCountries));
        dispatch(actions.getRecoveredPerMillion(selectedCountries));

        dispatch(actions.getConfirmed(selectedCountries));
        dispatch(actions.getDeaths(selectedCountries));
        dispatch(actions.getRecovered(selectedCountries));

        dispatch(actions.getCountryChartData(selectedCountries));
    }, [selectedCountries]);

    const handleClick = () => {
        dispatch(modeActions.setMode(mode === "light" ? "dark" : "light"));
    }

    const changeLanguage = (countryCode) => {
        i18n.changeLanguage(countryCode);
        console.log(countryCode);
    }

    return (
        <div className={`${mode} container-background`}>
            <Header changeLanguage={changeLanguage}/>
            <div style={{margin: 20}}>
                <Row>
                    <button onClick={handleClick}>Change</button>
                </Row>
                <Row>
                    <Col>
                        <CountryPicker/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Portlet title={t('title.confirmed')} info={t("modal.confirmed.info")}>
                            <Chart infectionData={confirmed} selectedCountries={selectedCountries}/>
                        </Portlet>
                    </Col>
                    <Col>
                        <Portlet title={t('title.confirmed')} subtitle={t('subtitle.permillioninhabitant')} info={t("modal.confirmedpermillion.info")}>
                            <Chart infectionData={casesPerMillion} selectedCountries={selectedCountries}/>
                        </Portlet>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Portlet title={t('title.deaths')} info={t("modal.deaths.info")}>
                            <Chart infectionData={deaths} selectedCountries={selectedCountries}/>
                        </Portlet>
                    </Col>
                    <Col>
                        <Portlet title={t('title.deaths')} subtitle={t('subtitle.permillioninhabitant')} info={t("modal.deathspermillion.info")}>
                            <Chart infectionData={deathsPerMillion} selectedCountries={selectedCountries}/>
                        </Portlet>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Portlet title={t('title.recovered')} info={t("modal.recovered.info")}>
                            <Chart infectionData={recovered} selectedCountries={selectedCountries}/>
                        </Portlet>
                    </Col>
                    <Col>
                        <Portlet title={t('title.recovered')} subtitle={t('subtitle.permillioninhabitant')} info={t("modal.recoveredpermillion.info")}>
                            <Chart infectionData={recoveredPerMillion} selectedCountries={selectedCountries}/>
                        </Portlet>
                    </Col>
                </Row>
                {infectionData && Object.keys(infectionData).map((key, index) => {
                    const country_data = infectionData[key];
                    const country_data_entry = country_data[country_data.length - 1];
                    const confirmed = country_data_entry.confirmed;
                    const deaths = country_data_entry.deaths;
                    const recovered = country_data_entry.recovered;
                    const confirmed_cases_per_million = country_data_entry.confirmed_cases_per_million;
                    const deaths_cases_per_million = country_data_entry.deaths_cases_per_million;
                    const recovered_cases_per_million = country_data_entry.recovered_cases_per_million;
                    const day = country_data_entry.date;
                    const country = country_data_entry.name;
                    const chart_data = countriesChartData[key];

                    return (
                        <Row>
                            <Col>
                                <CountryData
                                    country={country}
                                    day={day}
                                    confirmed={confirmed}
                                    deaths={deaths}
                                    recovered={recovered}
                                    confirmed_per_million={confirmed_cases_per_million}
                                    deaths_per_million={deaths_cases_per_million}
                                    recovered_per_million={recovered_cases_per_million}
                                    country_chart_data={chart_data}
                                />
                            </Col>
                        </Row>
                    )
                })}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
