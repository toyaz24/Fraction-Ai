import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./videoplayer.css"

export default function ConfirmationModal({show,onHide,startTooltipTime,stopTooltipTime,description}) {
    const handleConfirm = () => {
        toast.success("Video details confirmed!");
        onHide(); 
    };

  return (
    <Modal show={show} onHide={onHide} backdropClassName="modal-backdrop-blur">
      <Modal.Header closeButton>
        <Modal.Title>Video Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Start Time: {Math.floor(Math.abs(startTooltipTime))}</p>
        <p>Stop Time: {Math.floor(Math.abs(stopTooltipTime))}</p>
        <p>Description: {description}</p>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" onClick={handleConfirm}>Confirm</Button> {/* Add Confirm button */}
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
