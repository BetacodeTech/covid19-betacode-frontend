import React from "react";
import Card from "./Card";

const Info = ({title, text}) => {

    return (
        <Card>
            <h2>{title}</h2>
            <div>{text}</div>
        </Card>
    )
};

export default Info;
