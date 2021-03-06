import React, {useEffect} from 'react';

import Chart from "./components/Chart";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import {actions} from "./store/infection";
import {actions as modeActions} from "./store/mode";
import {useDispatch, useSelector} from "react-redux";
import CountryPicker from "./components/CountryPicker";

import {useTranslation} from "react-i18next";

import "./i18n";

import "./styles/light.css"
import "./styles/globalStyles.css"
import "./styles/dark.css"

import Portlet from "./components/Portlet";
import CountryData from "./components/CountryData";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {titles} from "./chart-titles";
import Loader from "./components/loader/loader";

function App() {
    const dispatch = useDispatch();

    const {t, i18n} = useTranslation();

    const casesPerMillion = useSelector(state => state.infection.casesPerMillion);
    const deathsPerMillion = useSelector(state => state.infection.deathsPerMillion);
    const recoveredPerMillion = useSelector(state => state.infection.recoveredPerMillion);

    const infectionData = useSelector(state => state.infection.infectionData);

    const isLoadingCountryChartData = useSelector(state => state.infection.isLoadingCountryChartData);

    const countriesChartData = useSelector(state => state.infection.countriesChartData);

    const confirmed = useSelector(state => state.infection.confirmed);
    const deaths = useSelector(state => state.infection.deaths);
    const recovered = useSelector(state => state.infection.recovered);

    const dailyConfirmed = useSelector(state => state.infection.dailyConfirmed);
    const dailyDeaths = useSelector(state => state.infection.dailyDeaths);
    const dailyRecovered = useSelector(state => state.infection.dailyRecovered);

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

        dispatch(actions.getDailyConfirmed(selectedCountries));
        dispatch(actions.getDailyDeaths(selectedCountries));
        dispatch(actions.getDailyRecovered(selectedCountries));

        dispatch(actions.getCountryChartData(selectedCountries));
    }, [selectedCountries]);

    const handleClick = () => {
        dispatch(modeActions.setMode(mode === "light" ? "dark" : "light"));
    }

    const changeLanguage = (countryCode) => {
        i18n.changeLanguage(countryCode);
    }

    return (
      <div className={`${mode} container-background`}>
          <Header changeLanguage={changeLanguage}/>
          <div style={{margin: 20}}>
              <Row>
                  <Col xs={12}>
                      <CountryPicker/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <Portlet title={t('title.confirmed')} info={t("modal.confirmed.info")}>
                          <Loader isLoading={confirmed.isLoading}>
                              <Chart infectionData={confirmed} selectedCountries={selectedCountries} content={titles.confirmed}/>
                          </Loader>
                      </Portlet>
                  </Col>
                  <Col xs={12} md={6}>
                      <Portlet title={t('title.confirmed')} subtitle={t('subtitle.permillioninhabitant')} info={t("modal.confirmedpermillion.info")}>
                          <Loader isLoading={casesPerMillion.isLoading}>
                              <Chart infectionData={casesPerMillion} selectedCountries={selectedCountries} content={titles.confirmed_cases_per_million}/>
                          </Loader>
                      </Portlet>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <Portlet title={t('title.deaths')} info={t("modal.deaths.info")}>
                          <Loader isLoading={deaths.isLoading}>
                              <Chart infectionData={deaths} selectedCountries={selectedCountries} content={titles.deaths}/>
                          </Loader>
                      </Portlet>
                  </Col>
                  <Col xs={12} md={6}>
                      <Portlet title={t('title.deaths')} subtitle={t('subtitle.permillioninhabitant')} info={t("modal.deathspermillion.info")}>
                          <Loader isLoading={deathsPerMillion.isLoading}>
                              <Chart infectionData={deathsPerMillion} selectedCountries={selectedCountries} content={titles.deaths_cases_per_million}/>
                          </Loader>
                      </Portlet>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                      <Portlet title={t('title.recovered')} info={t("modal.recovered.info")}>
                          <Loader isLoading={recovered.isLoading}>
                              <Chart infectionData={recovered} selectedCountries={selectedCountries} content={titles.recovered}/>
                          </Loader>
                      </Portlet>
                  </Col>
                  <Col xs={12} md={6}>
                      <Portlet title={t('title.recovered')} subtitle={t('subtitle.permillioninhabitant')} info={t("modal.recoveredpermillion.info")}>
                          <Loader isLoading={recoveredPerMillion.isLoading}>
                              <Chart infectionData={recoveredPerMillion} selectedCountries={selectedCountries} content={titles.recovered_cases_per_million}/>
                          </Loader>
                      </Portlet>
                  </Col>
                  <Col xs={12} md={6}>
                      <Portlet title={t('title.dailyconfirmed')} info={t("modal.dailyconfirmed.info")}>
                          <Loader isLoading={dailyConfirmed.isLoading}>
                              <Chart infectionData={dailyConfirmed} selectedCountries={selectedCountries} content={titles.daily_confirmed}/>
                          </Loader>
                      </Portlet>
                  </Col>
                  <Col xs={12} md={6}>
                      <Portlet title={t('title.dailydeaths')} info={t("modal.dailydeaths.info")}>
                          <Loader isLoading={dailyDeaths.isLoading}>
                              <Chart infectionData={dailyDeaths} selectedCountries={selectedCountries} content={titles.daily_deaths}/>
                          </Loader>
                      </Portlet>
                  </Col>
                  <Col xs={12} md={6}>
                      <Portlet title={t('title.dailyrecovered')} info={t("modal.dailyrecovered.info")}>
                          <Loader isLoading={dailyRecovered.isLoading}>
                              <Chart infectionData={dailyRecovered} selectedCountries={selectedCountries} content={titles.daily_recovered}/>
                          </Loader>
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
                              loading={isLoadingCountryChartData}
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
