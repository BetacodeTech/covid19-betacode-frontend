import React from "react";
import {Navbar} from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import 'react-flags-select/css/react-flags-select.css';

import {countries, countryLabels} from "../../i18n/languages";

const Header = ({changeLanguage}) => {

  const handleChangeLanguage = (countryCode) => {
    countryCode = countryCode === "GB" ? "EN" : countryCode;
    changeLanguage(countryCode);
  };

  return (
    <Navbar className="header-background-color justify-content-between" sticky="top">
      <Navbar.Brand href="#">
        <img
          alt=""
          src="/images/covid-curves-header.png"
          width="185"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
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
    </Navbar>
  );
}

export default Header;
