const initialState = {
    "infectionData": null,
    "casesPerMillion": {
        "data": [],
        "countries": []
    },
    "deathsPerMillion": {
        "data": [],
        "countries": []
    },
    "recoveredPerMillion": {
        "data": [],
        "countries": []
    },
    "recovered": {
        "data": [],
        "countries": []
    },
    "deaths": {
        "data": [],
        "countries": []
    },
    "confirmed": {
        "data": [],
        "countries": []
    },
    "countriesChartData": {},
    "selectedCountries": [
        {value: "PRT", label: "Portugal", color: "#4240A1"},
        {value: "ITA", label: "Italy", color: "#DF7242"},
        {value: "ESP", label: "Spain", color: "#2C546B"},
        {value: "USA", label: "United States", color: "#D0568C"},
        {value: "GBR", label: "United Kingdom", color: "#007ED5"}
    ],
    "color": [
        "#4240A1",
        "#DF7242",
        "#2C546B",
        "#D0568C",
        "#007ED5",
        "#9BE4D0",
        "#FF60A8",
        "#F4AFC5",
        "#BD87ED",
        "#BFA5A8"
    ],
    "listOfCountries": []
};

// const api = "http://api.covidcurves.betacode.tech/v1";
const api = "http://localhost:5010/v1";

export const types = {
    LOAD_CASES_PER_MILLION: "LOAD_CASES_PER_MILLION",
    LOAD_DEATHS_PER_MILLION: "LOAD_DEATHS_PER_MILLION",
    LOAD_RECOVERED_PER_MILLION: "LOAD_RECOVERED_PER_MILLION",

    LOAD_CONFIRMED: "LOAD_CONFIRMED",
    LOAD_DEATHS: "LOAD_DEATHS",
    LOAD_RECOVERED: "LOAD_RECOVERED",

    LOAD_COUNTRIES_CHART_DATA: "LOAD_COUNTRIES_CHART_DATA",

    LOAD_COUNTRIES: "LOAD_COUNTRIES",
    LOAD_INFECTION_DATA: "LOAD_INFECTION_DATA",
    SET_SELECTED_COUNTRIES: "SET_SELECTED_COUNTRIES",
};


export const actions = {
    "getCountriesCommaSepareted": (selectedCountries) => {
        let countries = "";
        for (let i in selectedCountries) {
            countries += selectedCountries[i].value + ","
        }
        return countries;
    },
    "getListOfCountries": () => {
        return (dispatch) => {
            const url = `${api}/countries`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadCountries(data));
                    });
                }
            })
        }
    },
    getCountryChartData: (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/chartdata?countries=${countries}`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadCountriesChartData(data));
                    });
                }
            })
        }
    },
    "getInfectionData": (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/all?countries=${countries}`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadInfectionData(data));
                    });
                }
            })
        }
    },
    "getCasesPerMillion": (selectedCountries) => {
        return (dispatch) => {

            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/confirmed/per_million?countries=${countries}`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadCasesPerMillion(data));
                    });
                }
            })
        }
    },
    "getDeathsPerMillion": (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/deaths/per_million?countries=${countries}`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadDeathsPerMillion(data));
                    });
                }
            })
        };
    },
    "getRecoveredPerMillion": (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/recovered/per_million?countries=${countries}`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadRecoveredPerMillion(data));
                    });
                }
            })
        }
    },
    "getConfirmed": (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/confirmed?countries=${countries}`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadConfirmed(data));
                    });
                }
            })
        }
    },
    "getDeaths": (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/deaths?countries=${countries}`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadDeaths(data));
                    });
                }
            })
        }
    },
    "getRecovered": (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/recovered?countries=${countries}`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadRecovered(data));
                    });
                }
            })
        }
    },
    "loadCasesPerMillion": (casesPerMillion) => {
        return {
            type: types.LOAD_CASES_PER_MILLION,
            casesPerMillion
        }
    },
    "loadDeathsPerMillion": (deathsPerMillion) => {
        return {
            type: types.LOAD_DEATHS_PER_MILLION,
            deathsPerMillion
        }
    },
    "loadRecoveredPerMillion": (recoveredPerMillion) => {
        return {
            type: types.LOAD_RECOVERED_PER_MILLION,
            recoveredPerMillion
        }
    },
    "loadRecovered": (recovered) => {
        return {
            type: types.LOAD_RECOVERED,
            recovered
        }
    },
    "loadDeaths": (deaths) => {
        return {
            type: types.LOAD_DEATHS,
            deaths
        }
    },
    "loadConfirmed": (confirmed) => {
        return {
            type: types.LOAD_CONFIRMED,
            confirmed
        }
    },
    "loadCountries": (listOfCountries) => {
        return {
            type: types.LOAD_COUNTRIES,
            listOfCountries
        }
    },
    "loadInfectionData": (infectionData) => {
        return {
            type: types.LOAD_INFECTION_DATA,
            infectionData
        }
    },
    "loadCountriesChartData": (countriesChartData) => {
        return {
            type: types.LOAD_COUNTRIES_CHART_DATA,
            countriesChartData
        }
    },
    "setSelectCountries": (selectedCountries) => {
        return {
            type: types.SET_SELECTED_COUNTRIES,
            selectedCountries
        }
    }
};

const infectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_COUNTRIES_CHART_DATA:
            const countriesChartData = action.countriesChartData;
            return {...state, countriesChartData};
        case types.LOAD_CONFIRMED:
            const confirmed = action.confirmed;
            return {...state, confirmed};
        case types.LOAD_DEATHS:
            const deaths = action.deaths;
            return {...state, deaths};
        case types.LOAD_RECOVERED:
            const recovered = action.recovered;
            return {...state, recovered};
        case types.LOAD_RECOVERED_PER_MILLION:
            const recoveredPerMillion = action.recoveredPerMillion;
            return {...state, recoveredPerMillion};
        case types.LOAD_INFECTION_DATA:
            const infectionData = action.infectionData;
            return {...state, infectionData};
        case types.LOAD_COUNTRIES:
            const listOfCountries = action.listOfCountries;
            return {...state, listOfCountries};
        case types.LOAD_CASES_PER_MILLION:
            const casesPerMillion = action.casesPerMillion;
            return {...state, casesPerMillion};
        case types.LOAD_DEATHS_PER_MILLION:
            const deathsPerMillion = action.deathsPerMillion;
            return {...state, deathsPerMillion};
        case types.SET_SELECTED_COUNTRIES:
            const selectedCountries = action.selectedCountries;
            for (let i in selectedCountries) {
                const country = selectedCountries[i];
                country.color = state.color[i];
            }

            return {...state, selectedCountries};
        default:
            return state
    }
};

export default infectionReducer;
