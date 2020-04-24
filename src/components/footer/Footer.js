import React from "react";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";

import "../../i18n";
import Link from "./Link";
import SocialIcon from "./SocialIcon";
import {socialLinks} from "../../socialLinks";

const Footer = () => {

  const {t, i18n} = useTranslation();

  return (
      <div className="footer betacode-blue">
          <Row>
              <Col xs={12} md={4} style={{textAlign: "center"}}>
                <div className="footer-text-secondary">
                  <h2>Covid Curves</h2>
                </div>
                <div style={{textAlign: "left", marginTop: "20px"}} className="footer-text-primary">
                  <p>{t('footer.description')}</p>
                </div>
              </Col>
              <Col xs={12} md={4} className="footer-links-column">
                  <Link image="./imageIcons/betacode.png" url="https://betacode.tech" description="Software Company"/>
                  <Link image="./imageIcons/i18ncloud.png" url="http://i18ncloud.com" description="Translation tool"/>
              </Col>
              <Col xs={12} md={4} className="footer-links-column">
                  <Link image="./imageIcons/github.png" url="https://github.com/BetacodeTech/covid19-betacode-frontend" description="Frontend"/>
                  <Link image="./imageIcons/github.png" url="https://github.com/BetacodeTech/covid19-betacode-api" description="Backend"/>
              </Col>
          </Row>
          <Row className="footer-icons-row" >
              <Col>
                  <div className="footer-social-icons-list">
                    {socialLinks.map((item,index) =>
                      <SocialIcon key={index} icon={item.icon} url={item.url}/>
                    )}
                  </div>
              </Col>
          </Row>
          <Row style={{justifyContent: "center"}} className="footer-text-primary">
            <p>@Betacode</p>
          </Row>
      </div>
  );
};

export default Footer;
