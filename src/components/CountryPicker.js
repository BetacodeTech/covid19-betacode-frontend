import React from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../store/infection";

const animatedComponents = makeAnimated();

const CountryPicker = () => {
    const listOfCountries = useSelector(state => state.infection.listOfCountries);
    const dispatch = useDispatch();
    return <div style={{margin:20}}>
        <Select
            options={listOfCountries}
            closeMenuOnSelect={false}
            onChange={(selectedCountries) => {dispatch(actions.setSelectCountries(selectedCountries))}}
            components={animatedComponents}
            isMulti/>
    </div>
};

export default CountryPicker;
