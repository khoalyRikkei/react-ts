import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import Home from "./CustomerPage/pages/Home";
import { act_delete } from "./CustomerPage/store/actions";
function App() {
  const dispatch = useDispatch();
  const listTodo = useSelector(
    (state: { todosReducer: string[] }) => state.todosReducer
  ) as string[];
  const counter = useSelector(
    (state: { countReducer: number }) => state.countReducer
  );

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: "UP",
            name: "Việt",
            payload: { id: 10, username: "Nguyễn Văn A" },
          })
        }
      >
        UP
      </button>
      <button onClick={() => dispatch({ type: "DOWN", name: "Hương" })}>
        DOWN
      </button>
      <Home />

      <p> {counter}</p>

      {listTodo &&
        listTodo.map((item: string, i: number) => (
          <p key={i}>
            {item}{" "}
            <button onClick={() => dispatch(act_delete(i))}>Delete</button>
          </p>
        ))}
    </div>
  );
}

export default App;
