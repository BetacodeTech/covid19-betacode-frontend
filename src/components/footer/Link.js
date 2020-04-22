import React from "react";

const Link = ({label, url}) => {

  const handleOnClick = () => {
    window.open(url, "_blank");
  }

    return (
        <div style={styles.container}>
            <h4>{label}</h4>
            <p style={styles.url} onClick={handleOnClick}>{
              url}
            </p>
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
    url: {
        cursor: "pointer",
    }
}

export default Link;
