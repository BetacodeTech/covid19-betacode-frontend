import React from "react";

const SocialIcon = ({image, url}) => {

  return (
    <a href={url}>
      <img src={image}/>
    </a>
  );
}

const styles = {
  icon: {
    cursor: "pointer",
  }
}

export default SocialIcon;
