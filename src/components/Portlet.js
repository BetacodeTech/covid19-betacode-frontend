import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {Modal, Button} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Portlet = ({title, subtitle, info, children, showInfo}) => {
  const {t, i18n} = useTranslation();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          {showInfo &&
            <div className="portlet-icon" onClick={handleShow}>
              <FontAwesomeIcon icon={faInfoCircle}/>
            </div>
          }
        </div>
        <div className="portlet-body">
          {children}
        </div>
      </div>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
             centered size="lg">
        <Modal.Header closeButton>
          {!subtitle && <Modal.Title>{title}</Modal.Title>}
          {subtitle && <Modal.Title>{title}<small>{subtitle}</small></Modal.Title>}
        </Modal.Header>
        <Modal.Body>{info}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("modal.close.button")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default Portlet;
