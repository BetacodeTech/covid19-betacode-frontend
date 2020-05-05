import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from "react-redux";

import ChartInfoModal from "./modal/ChartInfoModal";

const Portlet = ({title, subtitle, info, children}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const childRef = React.useRef();

  return (
    <>
      <div className="portlet">
        <div className="portlet-head">
          {title &&
          <div>
            <h2 className="portlet-title color-primary1">
              {title}
              {subtitle && <small className="portlet-subtitle color-primary3">{subtitle}</small>}
            </h2>
          </div>
          }
          {info &&
            <div className="portlet-icon" onClick={() => childRef.current.handleOpen()}>
              <FontAwesomeIcon icon={faInfoCircle}/>
            </div>
          }
        </div>
        <div className="portlet-body">
          {children}
        </div>
      </div>
      <ChartInfoModal title={title} subtitle={subtitle} text={info} ref={childRef}/>
    </>
  )
};

export default Portlet;
