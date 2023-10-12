import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
function Home() {
  const couter = useSelector(
    (state: { countReducer: number }) => state.countReducer
  ) as number;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch({ type: "CREATE", payload: value })}>
        Tạo mới
      </button>
      <h1>{couter}</h1>
    </div>
  );
}

export default Home;
