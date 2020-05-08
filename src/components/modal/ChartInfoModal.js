import React from "react";
import {Button, Modal} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";

const ChartInfoModal = React.forwardRef(({title, subtitle, text}, ref) => {

  const mode = useSelector(state => state.mode.mode);

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
      <Modal.Header closeButton className={mode}>
        {!subtitle && <Modal.Title>{title}</Modal.Title>}
        {subtitle && <Modal.Title>{`${title} `}<small>{subtitle}</small></Modal.Title>}
      </Modal.Header>
      <Modal.Body className={mode}>{text}</Modal.Body>
      <Modal.Footer className={mode}>
        <Button variant="secondary" onClick={handleClose}>
          {t("modal.close.button")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
})

export default ChartInfoModal;
