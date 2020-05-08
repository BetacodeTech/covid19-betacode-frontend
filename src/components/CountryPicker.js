import React from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../store/infection";
import Card from "./Card";
import chroma from 'chroma-js';

const animatedComponents = makeAnimated();

const colourStyles = {
    control: styles => ({...styles, backgroundColor: 'transparent'}),
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
            },
        };
    },
    multiValue: (styles, {data}) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, {data}) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, {data}) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};

const CountryPicker = () => {
    const listOfCountries = useSelector(state => state.infection.listOfCountries);
    const selectedCountries = useSelector(state => state.infection.selectedCountries);
    const mode = useSelector(state => state.mode.mode);

    const dispatch = useDispatch();
    return (
        <Card size="auto">
            <Select
                options={listOfCountries}
                closeMenuOnSelect={false}
                defaultValue={selectedCountries}
                onChange={(selectedCountries) => {
                    dispatch(actions.setSelectCountries(selectedCountries))
                }}
                styles={colourStyles}
                components={animatedComponents}
                isMulti/>
        </Card>
    )
};

export default CountryPicker;
