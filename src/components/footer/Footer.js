import React from "react";
import {Col, Row} from "react-bootstrap";

import Link from "./Link";
import SocialIcon from "./SocialIcon";
import {socialLinks} from "../../socialLinks";

const Footer = () => {

  return (
      <div style={styles.footer}>
          <Row>
              <Col xs={12} md={4} style={{textAlign: "center"}}>
                <h3>Covid Curves</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis blandit dui. Cras ut congue arcu. Nulla semper accumsan semper. Nunc mollis est lorem, in facilisis tortor rhoncus ut. Curabitur. </p>
              </Col>
              <Col xs={12} md={4}>
                  <Link label="Betacode" url="https://betacode.tech"/>
                  <Link label="Betacode" url="https://betacode.tech"/>
              </Col>
              <Col xs={12} md={4}>
                  <Link label="API X" url="https://betacode.tech"/>
                  <Link label="API X" url="https://betacode.tech"/>
              </Col>
          </Row>
          <hr/>
          <Row>
              <Col style={styles.socialCol}>
                  <div style={styles.socialList}>
                    {socialLinks.map((item,index) =>
                      <SocialIcon key={index} image={item.image} url={item.url}/>
                    )}
                  </div>
              </Col>
          </Row>
          <hr/>
          <Row style={styles.betacode}>
            <p>&copy; Betacode || by Betacode</p>
          </Row>
      </div>
  );
}

const styles = {
  footer: {
    position: "relative",
    bottom: 0,
    padding: "30px 15px 0px 15px",
  },
  socialCol: {
    marginTop: "20px",
  },
  socialList: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  betacode: {
    justifyContent: "center",
  }
}

export default Footer;
