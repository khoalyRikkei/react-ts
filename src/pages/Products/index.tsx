import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Product page</h1>
      <button onClick={() => navigate("/product-detail/1")}>San pham 1</button>
      <button onClick={() => navigate("/product-detail/2")}>San pham 2</button>

      <button onClick={() => navigate("/product-detail/3")}>San pham 3</button>
    </>
  );
}
