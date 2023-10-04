import React, { useState } from "react";

let number = 0;
function UseStateExample() {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<number[]>([]);
  const [valueInput, setValueInput] = useState<string>();

  const handleChangeCount = (action: "up" | "down") => {
    // if (action == "up") {
    //   setCount((pre) => {
    //     console.log("kiểm tra pre", pre);

    //     return count + 1;
    //   });

    //   console.log(data);
    //   console.log("kiểm tra count", count);
    // } else {
    //   setCount(count - 1);
    // }
    number++;
    console.log("Kiểm tra number", number);
  };

  console.log("statement in function.....", count);
  const handleChangeData = () => {
    data.push(1);
    console.log("check data", data);
  };

  console.log("re-render", data);

  console.log("Kiểm tra value input", valueInput);

  return (
    <div className="App">
      <h2>Check number: {number}</h2>
      <button onClick={() => handleChangeCount("up")}>UP</button>
      <button onClick={() => handleChangeCount("down")}>DOWN</button>

      <button onClick={() => handleChangeData()}>Push data</button>

      <hr />
      <br />
      <input
        type="text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValueInput(event.target.value)
        }
      />

      <h1>{count}</h1>
    </div>
  );
}

export default UseStateExample;
