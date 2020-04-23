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
              <Col xs={12} md={4} style={styles.linksCol}>
                  <Link image="./imageIcons/betacode.png" url="https://betacode.tech" description="Company"/>
                  <Link image="./imageIcons/i18ncloud.png" url="http://i18ncloud.com" description="Translation tool"/>
              </Col>
              <Col xs={12} md={4} style={styles.linksCol}>
                  <Link image="./imageIcons/github.png" url="https://github.com/BetacodeTech/covid19-betacode-frontend" description="Frontend"/>
                  <Link image="./imageIcons/github.png" url="https://github.com/BetacodeTech/covid19-betacode-api" description="Backend"/>
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
  linksCol: {
    display: "grid",
    gridRowGap: "20px",
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
