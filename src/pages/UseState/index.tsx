import { useState } from "react";

export default function UseState_Ex() {
  /**
     CÚ PHÁP:
     const [state, setState] = useState<type>(value)
     - state: khai báo biến state
     - setState: Phương thức dùng để cập nhật lại state
     - value: giá trị ban đầu của state
     - type: kiểu dữ liệu của state

     ** Mỗi khi setState cập nhật lại giá trị của state, thì sẽ re-render 

     */

  //  Ví dụ 1:
  const [count, setCount] = useState<number>(0);

  // Ví dụ 2:
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<Array<string>>([]);

  const handleAdd = () => {
    setData([...data, inputValue]);
  };

  // Kiểm tra render
  console.log("Before Redering...");
  return (
    <>
      <div className="card p-2 my-2" style={{ width: "50%" }}>
        <button
          onClick={() => setCount(count + 1)}
          className="btn btn-primary m-1"
        >
          Tăng
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="btn btn-danger m-1"
        >
          Giảm
        </button>
        <h2>Giá trị count: {count}</h2>
      </div>
      <div className="card p-2" style={{ width: "50%" }}>
        <input
          type="text"
          placeholder="Thêm dữ liệu vào"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd} className="btn btn-primary m-1">
          ADD
        </button>

        <ul>
          {data.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <hr />
    </>
  );
}
