import React from "react";
import {Navbar} from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import 'react-flags-select/css/react-flags-select.css';

import {countries, countryLabels} from "../../i18n/languages";

const Header = () => {

  const [language, setLanguage] = React.useState("PT");

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.text);
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
          countries={countries}
          customLabels={countryLabels}
          placeholder="Select Language"
        />
      </div>
    </Navbar>
  );
}

export default Header;
