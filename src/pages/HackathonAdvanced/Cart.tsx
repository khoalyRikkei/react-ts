import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal, Table } from "react-bootstrap";
import { I_Product } from "../../types";

interface Props {
  show: boolean;
  onToggle: Function;
  data: I_Product[];
  onChangeCart: Function;
}

function Cart({ show, onToggle, data, onChangeCart }: Props) {
  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => onToggle(false)}>
        <Modal.Header closeButton>
          <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Hình ảnh</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={product.imageUrl} alt="" height={50} />
                    </td>
                    <td>
                      <Button
                        variant="warning"
                        onClick={() => onChangeCart(product.id, "-")}
                      >
                        -
                      </Button>{" "}
                      {product.qty}
                      <Button
                        variant="success"
                        onClick={() => onChangeCart(product.id, "+")}
                      >
                        +
                      </Button>
                    </td>
                    <td>
                      <Button variant="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Cart;
