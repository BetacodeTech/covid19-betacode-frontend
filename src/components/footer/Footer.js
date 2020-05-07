import React from "react";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

import "../../i18n";
import Link from "./Link";
import SocialIcon from "./SocialIcon";
import {socialLinks} from "../../socialLinks";
import NODE_PACKAGE from "../../../package.json";
import {useSelector} from "react-redux";

const VERSION = NODE_PACKAGE.version;

const Footer = () => {

  const mode = useSelector(state => state.mode.mode);

  const {t} = useTranslation();


  return (
    <>
      <div className={`footer-part1 footer-background-color1 ${mode}`}>
        <Row>
          <Col xs={12} md={4}>
            <div className="color-secondary3">
              <img className="covid-curves-logo" src="/images/CovidCurves_Export_HPreto.png" alt=""/>
              <div>
                {t('footer.description')}
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="footer-links-column">
            <Link image="/images/betacode.png" url="https://betacode.tech" description={t('footer.betacode.description')}/>
            <Link image="/images/i18ncloud.png" url="http://i18ncloud.com"
                  description={t('footer.i18ncloud.description')}/>
          </Col>
          <Col xs={12} md={4} className="footer-links-column">
            <Link image="/images/github.png" url="https://github.com/BetacodeTech/covid19-betacode-frontend"
                  description={t('footer.frontend.description')}/>
            <Link image="/images/github.png" url="https://github.com/BetacodeTech/covid19-betacode-api"
                  description={t('footer.api.description')}/>
          </Col>
        </Row>
      </div>
      <div className={`footer-part2 footer-background-color2 ${mode}`}>
        <div className="footer-social-icons-list">
          {socialLinks.map((item, index) =>
            <SocialIcon key={index} icon={item.icon} url={item.url}/>
          )}
        </div>
      </div>
      <div className={`footer-part3 footer-background-color2 color-secondary3 ${mode}`}>
        <span>{t('footer.copyright')} <a href="www.betacode.tech">Betacode</a> {t('footer.copyright.brand')}{VERSION} </span>
      </div>
    </>
  );
};

export default Footer;
