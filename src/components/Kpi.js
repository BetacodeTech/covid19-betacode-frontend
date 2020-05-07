import React from "react";
import {Col, Row} from "react-bootstrap";

const Kpi = ({title, subtitle, value, color}) => {

    return (
        <div className="kpi" style={{backgroundColor:color+"0D"}} >
            <Row style={{alignItems: "center"}}>
                <Col xs={6} lg={12} xl={6} style={{textAlign: "center"}}>
                   <h4 style={{color:color+"CC"}} className="title color-primary2">{title}</h4>
                   <h5 style={{color:color+"A6"}}  className="subtitle color-primary3">{subtitle}</h5>
                </Col>
                <Col xs={6} lg={12} xl={6} style={{textAlign: "center"}}>
                    <span style={{color:color}} className="value color-primary4">{value}</span>
                </Col>
            </Row>
        </div>
    )
};

export default Kpi;
