import { useEffect, useState } from "react";
function UseEffectExample() {
  const [count, setCount] = useState<number>(0);
  const [mark, setMark] = useState<number>(0);

  const [rank, setRank] = useState<string>("");

  const [time, setTime] = useState({
    minute: new Date().getMinutes(),
    second: new Date().getSeconds(),
  });

  /**
   * useEffect(callbackFn, [dependencies]) ---> gọi sau khi render
   * @TH1 : không sử dụng dependencies --> mỗi lần re-render --> gọi lại
   * @TH2 : sử dụng dependencies rỗng --> khi mouting lần đầu
   * @TH3 : dependencies có giá trị --> khi giá trị trong dependencies --> gọi callbackFn
   */

  //
  useEffect(() => {
    switch (true) {
      case mark > 8:
        setRank("Giỏi");
        break;
      case mark > 7:
        setRank("Khá");
        break;
      case mark > 5:
        setRank("Trung bình");
        break;
      case mark > 3:
        setRank("Yếu");
        break;

      default:
        setRank("Kém");
    }

    console.log("react effect....");
  }, [mark]);

  //   useEffect mounting --> chạy 1 lần duy nhất khi mount

  useEffect(() => {
    setInterval(() => {
      const minute = new Date().getMinutes();
      const second = new Date().getSeconds();

      setTime({ minute: minute, second: second });
    }, 1000);
  }, []);
  function handleLog() {
    console.log("log..log");
  }

  console.log("render");
  return (
    <div className="App">
      <h1>Hello React UseEffect()</h1>

      <button onClick={() => setCount(count + 1)}>UP</button>
      <button onClick={() => setCount(count - 1)}>DOWN</button>
      <br />
      <button onClick={() => setMark(mark + 1)}>UP mark</button>
      <button onClick={() => setMark(mark - 1)}>DOWN mark</button>
      <h1>
        Điểm: {mark}, học lực: {rank}
      </h1>

      <h3>Kiểm tra count: {count}</h3>
      <h3>
        Time: {time.minute} :{time.second}
      </h3>
    </div>
  );
}

export default UseEffectExample;
