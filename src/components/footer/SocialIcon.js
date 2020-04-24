import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = ({icon, url}) => {
  return (
    <a href={url} style={{margin: "0 10px"}}>
      <FontAwesomeIcon icon={icon} className="social-icon" size="2x"/>
    </a>
  );
};

export default SocialIcon;
