import { useRef, useState } from "react";
let id: any;
export default function ExampleUseRef() {
  const [startTime, setStartTime] = useState<null | number>(null);
  const [now, setNow] = useState<null | number>(null);

  /**
   * useRef là một React Hook giúp biến không re-render khi component re-render
   * dùng trong trường hợp muốn thay đổi giá trị của biến nhưng không muốn reset lại biến khi re-render như let, var
   * @syntax const ref = useRef(initialValue)
   * @initialValue giá trị ban đầu muốn truyền vào object có thuộc tính current
   * return về object có property là current. Có thể gán nó thành giá trị mới
   *
   */
  const intervalRef = useRef<any>(null);

  const gender = useRef<HTMLSelectElement>(null);

  function handleStart() {
    console.log(11, id);
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    id = setInterval(() => {
      setNow(Date.now());
    }, 10);
    console.log(id);
  }

  function handleStop() {
    console.log(id);
    clearInterval(id);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Sử dụng useRef như biến toàn cục (Không thay đổi khi re-render)</h1>
      <hr />
      <h3>Time passed: {secondsPassed.toFixed(3)}</h3>
      <button onClick={handleStart} className="btn btn-primary m-1">
        Start
      </button>
      <button onClick={handleStop} className="btn btn-danger m-1">
        Stop
      </button>

      <br />

      <hr />
      <h1>Sử dụng useRef để làm việc với form (tham chiếu trực tiếp đến phần tử DOM)</h1>
      <select name="gender" defaultValue={"Nữ"} ref={gender}>
        <option>Nam</option>
        <option>Nữ</option>
      </select>
      <button
        onClick={() => {
          console.log("Kiểm tra gender", gender.current?.value);
        }}
        className="btn btn-success m-3"
      >
        Kiểm tra
      </button>
    </>
  );
}
