import React from "react";
import {Button, Modal} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const ChartInfoModal = React.forwardRef(({title, subtitle, text}, ref) => {

  const {t, i18n} = useTranslation();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {setOpen(false)}

  React.useImperativeHandle(ref, () => ({
    handleOpen() {
      setOpen(true)
    }
  }));

  return (
    <Modal show={open} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
           centered size="lg">
      <Modal.Header closeButton>
        {!subtitle && <Modal.Title>{title}</Modal.Title>}
        {subtitle && <Modal.Title>{`${title} `}<small>{subtitle}</small></Modal.Title>}
      </Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {t("modal.close.button")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
})

export default ChartInfoModal;
