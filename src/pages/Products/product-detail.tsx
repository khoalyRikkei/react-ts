import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const param = useParams();
  return (
    <>
      <h1>Sản phẩm {param.id}</h1>
    </>
  );
}
