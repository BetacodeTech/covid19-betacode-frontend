import React from "react";

const Card = ({children}) => {
  return (
      <div style={styles.container}>
          {children}
      </div>
  )
};

const styles = {
    container: {
        backgroundColor: "#fff",
        margin: "10px 0px",
        padding: 30,
        borderRadius: 5
    }
};

export default Card;
