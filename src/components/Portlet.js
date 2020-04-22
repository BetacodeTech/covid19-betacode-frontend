import React from "react";

const Portlet = ({title, subtitle, children}) => {

    return (
        <div className="portlet">
            <div className="portlet-head">
                {title &&
                <h2 className="portlet-title color-primary1">
                    {title}
                    {subtitle && <small className="portlet-subtitle color-primary3">{subtitle}</small>}
                </h2>
                }
            </div>
            <div className="portlet-body">
                {children}
            </div>
        </div>
    )
};

export default Portlet;
