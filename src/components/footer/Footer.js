import React from "react";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

import "../../i18n";
import Link from "./Link";
import SocialIcon from "./SocialIcon";
import {socialLinks} from "../../socialLinks";
import NODE_PACKAGE from "../../../package.json";

const VERSION = NODE_PACKAGE.version;

const Footer = () => {

  const {t, i18n} = useTranslation();


  return (
    <>
      <div className="footer-part1 footer-background-color1">
        <Row>
          <Col xs={12} md={4}>
            <div className="color-secondary3">
              <img className="covid-curves-logo" src="/imageicons/CovidCurves_Export_HPreto.png"/>
              <div>
                {t('footer.description')}
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="footer-links-column">
            <Link image="./imageIcons/betacode.png" url="https://betacode.tech" description="Created by"/>
            <Link image="./imageIcons/i18ncloud.png" url="http://i18ncloud.com"
                  description="Using this translation tool"/>
          </Col>
          <Col xs={12} md={4} className="footer-links-column">
            <Link image="./imageIcons/github.png" url="https://github.com/BetacodeTech/covid19-betacode-frontend"
                  description="Fork this frontend on github"/>
            <Link image="./imageIcons/github.png" url="https://github.com/BetacodeTech/covid19-betacode-api"
                  description="Fork this api on github"/>
          </Col>
        </Row>
      </div>
      <div className="footer-part2 footer-background-color2">
        <div className="footer-social-icons-list">
          {socialLinks.map((item, index) =>
            <SocialIcon key={index} icon={item.icon} url={item.url}/>
          )}
        </div>
      </div>
      <div className="footer-part3 footer-background-color2 color-secondary3">
        <span>© 2020 - Created by <a href="www.betacode.tech">Betacode</a> is a brand owned by Visionary Galaxy - LDA. All rights reserved. v{VERSION} </span>
      </div>
    </>
  );
};

export default Footer;
