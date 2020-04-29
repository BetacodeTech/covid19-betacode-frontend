import React from "react";

const Link = ({image, url, description}) => {

  const handleOnClick = () => {
    window.open(url, "_blank");
  };

    return (
        <div style={styles.container}>
          <img src={image} style={styles.img} onClick={handleOnClick} alt=""/>
          <p className="footer-text-link color-secondary3">
            {description}
          </p>
        </div>
    );
};

const styles = {
    container: {
      textAlign: "center",
    },
    img: {
      cursor: "pointer",
      width: "150px",
    }
}

export default Link;
