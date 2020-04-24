import React from "react";
import Icon from "react-fontawesome";

const SocialIcon = ({name, url}) => {
  return (
    <a href={url} style={{margin: "0 10px"}}>
      <Icon name={name} className="social-icon" size="2x"/>
    </a>
  );
};

export default SocialIcon;
