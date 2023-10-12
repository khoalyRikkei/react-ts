import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { _CREATE_TODO } from "../../store/common";
import { act_create } from "../../store/actions";
function Home() {
  const couter = useSelector(
    (state: { countReducer: number }) => state.countReducer
  ) as number;
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch(act_create(value))}>Tạo mới</button>
      <h1>{couter}</h1>
    </div>
  );
}

export default Home;
