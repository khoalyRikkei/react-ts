import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface Props {
  show: boolean;
  onClose: Function;
  isLoginForm: string;
}

export default function ModalAuth(props: Props) {
  return (
    <>
      <Modal show={props.show} onHide={() => props.onClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.isLoginForm === "register" ? "Đăng ký" : "Đăng Nhập"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.onClose(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => props.onClose(false)}>
            {props.isLoginForm === "register" ? "Đăng ký" : "Đăng Nhập"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
