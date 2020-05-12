import React from "react";
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import {Spinner} from "react-bootstrap";
import {useSelector} from "react-redux";

import "./styles.css";

const Loader = ({isLoading, children}) => {

  const mode = useSelector(state => state.mode.mode);

  return (
    <BlockUi
      blocking={isLoading}
      loader={<Spinner animation="border" variant={mode === "light" ? "dark" : "light"}/>}
    >
      {children}
    </BlockUi>
  );
}

export default Loader;
