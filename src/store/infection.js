const initialState = {
    "casesPerMillion": {
        "data": [],
        "countries": []
    },
    "deathsPerMillion": {
        "data": [],
        "countries": []
    },
    "selectedCountries": [
        {value:"PRT", label:"Portugal", color:"#4240A1"},
        {value: "ITA", label: "Italy" , color:"#DF7242"},
        {value: "ESP", label: "Spain" , color:"#2C546B"},
        {value: "USA", label: "United States" , color:"#D0568C"},
        {value: "GBR", label: "United Kingdom" , color:"#007ED5"}
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
    LOAD_COUNTRIES: "LOAD_COUNTRIES",
    SET_SELECTED_COUNTRIES: "SET_SELECTED_COUNTRIES"
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
    "loadCountries": (listOfCountries) => {
        return {
            type: types.LOAD_COUNTRIES,
            listOfCountries
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
            for(let i in selectedCountries){
                const country = selectedCountries[i];
                country.color = state.color[i];
            }

            return {...state, selectedCountries};
        default:
            return state
    }
};

export default infectionReducer;
