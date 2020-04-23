import React from "react";

const Link = ({image, url, description}) => {

  const handleOnClick = () => {
    window.open(url, "_blank");
  }

    return (
        <div style={styles.container}>
          <img src={image} style={styles.img} onClick={handleOnClick}/>
          <p style={{marginTop: 0}}>{description}</p>
        </div>
    );
}

const styles = {
    container: {
      display: "grid",
      gridTemplateRows: "auto auto",
      justifyContent: "center",
      textAlign: "center",
    },
    img: {
      cursor: "pointer",
      width: "150px",
    }
}

export default Link;
