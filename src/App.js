import React, {useEffect} from 'react';

import Chart from "./components/Chart";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import {Col, Container, Row} from "react-bootstrap";
import {actions} from "./store/infection";
import {useDispatch} from "react-redux";
import CountryPicker from "./components/CountryPicker";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getListOfCountries())
    }, []);

    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Chart/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
