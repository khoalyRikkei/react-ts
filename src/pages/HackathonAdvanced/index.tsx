import StoreRA from "./Store";
import { productsDB } from "../../models";
import Cart from "./Cart";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { I_Product } from "../../types";

export default function HackathonAdvanced() {
  const [show, setShow] = useState(false);
  const [listCart, setListCart] = useState<I_Product[]>([]);

  const handleChangeCart = (id: number, type: "-" | "+") => {
    // Lấy sản phẩm trong product
    const product = productsDB.find((item) => (item.id = id));

    // Đưa vào list cart

    if (!product) {
      return;
    }

    const productCart = listCart.find((item) => item.id === id);

    // Kiểm duyệt sản phẩm trong cart
    if (productCart) {
      type === "+" ? productCart.qty++ : productCart.qty--;
    } else {
      const newProduct = { ...product, qty: 1 };
      listCart.push(newProduct);
    }
    setListCart([...listCart]);
  };

  // toggle card
  const handleToggle = (status: boolean) => {
    setShow(status);
  };
  return (
    <>
      <Button onClick={() => handleToggle(true)}>Cart</Button>
      <StoreRA data={productsDB} onChangeCart={handleChangeCart} />
      <Cart
        show={show}
        onToggle={handleToggle}
        data={listCart}
        onChangeCart={handleChangeCart}
      />
    </>
  );
}
