import React from "react";
import {Navbar} from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import 'react-flags-select/css/react-flags-select.css';
import Switch from "react-switch";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {countries, countryLabels} from "../../i18n/languages";
import {actions} from "../../store/mode";

const Header = ({changeLanguage}) => {
  const dispatch = useDispatch();

  const mode = useSelector(state => state.mode.mode);

  const handleChangeLanguage = (countryCode) => {
    countryCode = countryCode === "GB" ? "EN" : countryCode;
    changeLanguage(countryCode);
  };

  const handleChangeMode = () => {
    dispatch(actions.setMode(mode === "light" ? "dark" : "light"));
  };

  return (
    <Navbar className={`${mode} header-background-color justify-content-between`} sticky="top">
      <Navbar.Brand href="#">
        <img
          alt=""
          src="/images/covid-curves-header.png"
          width="185"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <div style={{display: "flex", alignItems: "center"}}>
        <div className="flags">
          <ReactFlagsSelect
            defaultCountry={countries[0]}
            countries={countries}
            customLabels={countryLabels}
            placeholder="Select Language"
            showSelectedLabel={false}
            showOptionLabel={false}
            onSelect={handleChangeLanguage}
          />
        </div>
        <div>
          <Switch
            onChange={handleChangeMode}
            checked={mode === "dark"}
            height={25}
            width={50}
            onColor="#888888"
            uncheckedIcon={
              <div
                style={{
                  paddingLeft: "5px",
                  color: "#fff"
                }}
              >
                <FontAwesomeIcon icon={faMoon}/>
              </div>
            }
            checkedIcon={
              <div
                style={{
                  paddingLeft: "5px",
                  color: "#181818",
                }}
              >
                <FontAwesomeIcon icon={faMoon}/>
              </div>
            }
          />
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
