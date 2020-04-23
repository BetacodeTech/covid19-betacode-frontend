import React, {useEffect} from 'react';

import Chart from "./components/Chart";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import {actions} from "./store/infection";
import {useDispatch, useSelector} from "react-redux";
import CountryPicker from "./components/CountryPicker";

import {useTranslation} from "react-i18next";

import "./i18n";
import Info from "./components/Info";

import "./styles/light.css"
import Portlet from "./components/Portlet";

function App() {
    const dispatch = useDispatch();

    const {t, i18n} = useTranslation();

    const casesPerMillion = useSelector(state => state.infection.casesPerMillion);
    const deathsPerMillion = useSelector(state => state.infection.deathsPerMillion);
    const selectedCountries = useSelector(state => state.infection.selectedCountries);

    useEffect(() => {
        dispatch(actions.getListOfCountries())
    }, []);

    useEffect(() => {
        dispatch(actions.getInfectionData(selectedCountries));
        dispatch(actions.getCasesPerMillion(selectedCountries));
        dispatch(actions.getDeathsPerMillion(selectedCountries));
    }, [selectedCountries]);


    return (
        <div className="App" style={{margin:20}}>
            <Row>
                <Col>
                    <CountryPicker/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Portlet title={t('title.casespermillion')} subtitle={t('subtitle.casespermillion')}>
                        <Chart infectionData={casesPerMillion} selectedCountries={selectedCountries}/>
                    </Portlet>
                    <Info title={t('info.casespermillion.title')} text={t('info.casespermillion.text')} />
                </Col>
                <Col>
                    <Portlet title={t('title.deathspermillion')} subtitle={t('subtitle.deathspermillion')}>
                        <Chart infectionData={deathsPerMillion} selectedCountries={selectedCountries}/>
                    </Portlet>
                    <Info title={t('info.deathspermillion.title')} text={t('info.deathspermillion.text')} />
                </Col>
            </Row>
        </div>
    );
}

export default App;
