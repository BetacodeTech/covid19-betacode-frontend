const initialState = {
    "infectionData": {
        "data": [],
        "countries": []
    },
    "selectedCountries": [],
    "listOfCountries": []
};

const api = "http://api.covidcurves.betacode.tech/v1";
// const api = "http://localhost:5000/v1";

export const types = {
    LOAD_INFECTION_DATA: "LOAD_INFECTION_DATA",
    LOAD_COUNTRIES: "LOAD_COUNTRIES",
    SET_SELECTED_COUNTRIES: "SET_SELECTED_COUNTRIES"
};

export const actions = {
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
    "getInfectionData": (selectedCountries) => {
        return (dispatch) => {
            let countries = "";
            for(let i in selectedCountries){
                countries += selectedCountries[i].value+","
            }

            const url = `${api}/infection?countries=${countries}`;

            fetch(url).then((response) => {
                if (response.ok) {
                    response.json().then(data => {
                        dispatch(actions.loadInfectionData(data));
                    });
                }
            })
        }
    },

    "loadInfectionData": (infectionData) => {
        return {
            type: types.LOAD_INFECTION_DATA,
            infectionData
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
        case types.LOAD_INFECTION_DATA:
            const infectionData = action.infectionData;
            return {...state, infectionData};
        case types.SET_SELECTED_COUNTRIES:
            debugger;
            const selectedCountries = action.selectedCountries;
            return {...state, selectedCountries};
        default:
            return state
    }
};

export default infectionReducer;
