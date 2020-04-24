import React from "react";

const Link = ({image, url, description}) => {

  const handleOnClick = () => {
    window.open(url, "_blank");
  };

    return (
        <div style={styles.container}>
          <img src={image} style={styles.img} onClick={handleOnClick}/>
          <p style={{marginTop: 0}} className="footer-text-primary">
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
