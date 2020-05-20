const initialState = {
    "infectionData": null,
    "casesPerMillion": {
        "data": [],
        "countries": [],
        isLoading: true,
    },
    "deathsPerMillion": {
        "data": [],
        "countries": [],
        isLoading: true,
    },
    "recoveredPerMillion": {
        "data": [],
        "countries": [],
        isLoading: true,
    },
    "recovered": {
        "data": [],
        "countries": [],
        isLoading: true,
    },
    "deaths": {
        "data": [],
        "countries": [],
        isLoading: true,
    },
    "confirmed": {
        "data": [],
        "countries": [],
        isLoading: true,
    },
    "dailyConfirmed": {
        "data": [],
        "countries": [],
        isLoading: true,
    },
    "dailyDeaths": {
        "data": [],
        "countries": [],
        isLoading: true,
    },
    "dailyRecovered": {
        "data": [],
        "countries": [],
        isLoading: true,
    },
    "countriesChartData": {},
    isLoadingCountryChartData: true,
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

const api = "https://api.covidcurves.betacode.tech/v1";
// const api = "http://localhost:5010/v1";

export const types = {
    LOAD_CASES_PER_MILLION: "LOAD_CASES_PER_MILLION",
    LOAD_DEATHS_PER_MILLION: "LOAD_DEATHS_PER_MILLION",
    LOAD_RECOVERED_PER_MILLION: "LOAD_RECOVERED_PER_MILLION",

    TOGGLE_CASES_PER_MILLION_LOADING: "TOGGLE_CASES_PER_MILLION_LOADING",
    TOGGLE_DEATHS_PER_MILLION_LOADING: "TOGGLE_DEATHS_PER_MILLION_LOADING",
    TOGGLE_RECOVERED_PER_MILLION_LOADING: "TOGGLE_RECOVERED_PER_MILLION_LOADING",

    LOAD_CONFIRMED: "LOAD_CONFIRMED",
    LOAD_DEATHS: "LOAD_DEATHS",
    LOAD_RECOVERED: "LOAD_RECOVERED",

    TOGGLE_CASES_LOADING: "TOGGLE_CASES_LOADING",
    TOGGLE_DEATHS_LOADING: "TOGGLE_DEATHS_LOADING",
    TOGGLE_RECOVERED_LOADING: "TOGGLE_RECOVERED_LOADING",


    LOAD_DAILY_CONFIRMED: "LOAD_DAILY_CONFIRMED",
    LOAD_DAILY_DEATHS: "LOAD_DAILY_DEATHS",
    LOAD_DAILY_RECOVERED: "LOAD_DAILY_RECOVERED",

    TOGGLE_DAILY_CONFIRMED_LOADING: "TOGGLE_DAILY_CONFIRMED_LOADING",
    TOGGLE_DAILY_DEATHS_LOADING: "TOGGLE_DAILY_DEATHS_LOADING",
    TOGGLE_DAILY_RECOVERED_LOADING: "TOGGLE_DAILY_RECOVERED_LOADING",

    LOAD_COUNTRIES_CHART_DATA: "LOAD_COUNTRIES_CHART_DATA",

    LOAD_COUNTRIES: "LOAD_COUNTRIES",
    LOAD_INFECTION_DATA: "LOAD_INFECTION_DATA",
    SET_SELECTED_COUNTRIES: "SET_SELECTED_COUNTRIES",

    TOGGLE_LOADING_COUNTRY_CHART_DATA: "TOGGLE_LOADING_COUNTRY_CHART_DATA",
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
    "getCountryChartData": (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/chartdata?countries=${countries}`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadCountriesChartData(data));
                        dispatch(actions.toggleCountryChartDataLoading(false));
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
                        dispatch(actions.toggleCasesPerMillionLoading(false));
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
                        dispatch(actions.toggleDeathsPerMillionLoading(false));
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
                        dispatch(actions.toggleRecoveredPerMillionLoading(false));
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
                        dispatch(actions.toggleCasesLoading(false));
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
                        dispatch(actions.toggleDeathsLoading(false));
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
                        dispatch(actions.toggleRecoveredLoading(false));
                    });
                }
            })
        }
    },
    "getDailyConfirmed": (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/confirmed/daily?countries=${countries}`;

            fetch(url).then(response => {
                if(response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadDailyConfirmed(data));
                        dispatch(actions.toggleDailyConfirmedLoading(false));
                    });
                }
            })
        }
    },
    "getDailyDeaths": (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/deaths/daily?countries=${countries}`;

            fetch(url).then(response => {
                if(response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadDailyDeaths(data));
                        dispatch(actions.toggleDailyDeathsLoading(false));
                    });
                }
            })
        }
    },
    "getDailyRecovered": (selectedCountries) => {
        return (dispatch) => {
            const countries = actions.getCountriesCommaSepareted(selectedCountries);

            const url = `${api}/infection/recovered/daily?countries=${countries}`;

            fetch(url).then(response => {
                if(response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadDailyRecovered(data));
                        dispatch(actions.toggleDailyRecoveredLoading(false));
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
    },
    "toggleCasesPerMillionLoading": (isLoading) => {
        return {
            type: types.TOGGLE_CASES_PER_MILLION_LOADING,
            isLoading
        }
    },
    "toggleDeathsPerMillionLoading": (isLoading) => {
        return {
            type: types.TOGGLE_DEATHS_PER_MILLION_LOADING,
            isLoading
        }
    },
    "toggleRecoveredPerMillionLoading": (isLoading) => {
        return {
            type: types.TOGGLE_RECOVERED_PER_MILLION_LOADING,
            isLoading
        }
    },
    "toggleCasesLoading": (isLoading) => {
        return {
            type: types.TOGGLE_CASES_LOADING,
            isLoading
        }
    },
    "toggleDeathsLoading": (isLoading) => {
        return {
            type: types.TOGGLE_DEATHS_LOADING,
            isLoading
        }
    },
    "toggleRecoveredLoading": (isLoading) => {
        return {
            type: types.TOGGLE_RECOVERED_LOADING,
            isLoading
        }
    },
    "toggleCountryChartDataLoading": (isLoading) => {
        return {
            type: types.TOGGLE_LOADING_COUNTRY_CHART_DATA,
            isLoadingCountryChartData: isLoading,
        }
    },
    "loadDailyConfirmed": (dailyConfirmed) => {
        return {
            type: types.LOAD_DAILY_CONFIRMED,
            dailyConfirmed,
        }
    },
    "loadDailyDeaths": (dailyDeaths) => {
        return {
            type: types.LOAD_DAILY_DEATHS,
            dailyDeaths,
        }
    },
    "loadDailyRecovered": (dailyRecovered) => {
        return {
            type: types.LOAD_DAILY_RECOVERED,
            dailyRecovered,
        }
    },
    "toggleDailyConfirmedLoading": (isLoading) => {
        return {
            type: types.TOGGLE_DAILY_DEATHS_LOADING,
            isLoading,
        }
    },
    "toggleDailyDeathsLoading": (isLoading) => {
        return {
            type: types.TOGGLE_DAILY_DEATHS_LOADING,
            isLoading,
        }
    },
    "toggleDailyRecoveredLoading": (isLoading) => {
        return {
            type: types.TOGGLE_DAILY_RECOVERED_LOADING,
            isLoading,
        }
    }
};

const infectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_COUNTRIES_CHART_DATA:
            const countriesChartData = action.countriesChartData;
            return {...state, countriesChartData};
        case types.TOGGLE_LOADING_COUNTRY_CHART_DATA:
            const isLoadingCountryChartData =  action.isLoadingCountryChartData;
            return {...state, isLoadingCountryChartData};
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
        case types.LOAD_DAILY_CONFIRMED:
            const dailyConfirmed = action.dailyConfirmed;
            return {...state, dailyConfirmed};
        case types.LOAD_DAILY_DEATHS:
            const dailyDeaths = action.dailyDeaths;
            return {...state, dailyDeaths};
        case types.LOAD_DAILY_RECOVERED:
            const dailyRecovered = action.dailyRecovered;
            return {...state, dailyRecovered};
        default:
            return state
    }
};

export default infectionReducer;
