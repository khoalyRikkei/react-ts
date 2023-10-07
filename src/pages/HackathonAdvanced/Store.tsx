import { Card, Col, Row, Container, Button } from "react-bootstrap";
import { I_Product } from "../../types";
import { useState, useEffect } from "react";

interface Props {
  data: I_Product[];
  onChangeCart: Function;
}

function StoreRA({ data, onChangeCart }: Props) {
  const [idCart, setIdCart] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  // Thay đổi giá trị trong cart
  const handleChangeCart = (id: number, type: string) => {
    setIdCart(id);
    onChangeCart(id, type);

    type === "+" ? setCount(count + 1) : setCount(count - 1);
  };

  // Di chuyển chuột ra ngoài
  const handleOut = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.classList.value.includes("card-out")) {
      setIdCart(null);
      setCount(0);
    }
  };

  return (
    <Container>
      <Row>
        {data.map((product, index) => (
          <Col lg={3} md={4} sm={6} sx={12} key={index}>
            <Card onMouseLeave={(e) => handleOut(e)} className="card-out">
              <Card.Img
                variant="top"
                src={product.imageUrl}
                height={300}
                style={{ objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.des}</Card.Text>
                {product.id !== idCart && (
                  <Button
                    variant="primary"
                    onClick={() => handleChangeCart(product.id, "+")}
                  >
                    Add
                  </Button>
                )}
                {product.id === idCart && (
                  <div>
                    <Button
                      variant="warning"
                      onClick={() => handleChangeCart(product.id, "-")}
                    >
                      -
                    </Button>{" "}
                    {count}
                    <Button
                      variant="success"
                      onClick={() => handleChangeCart(product.id, "+")}
                    >
                      +
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default StoreRA;
