import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Home from "./CustomerPage/pages/Home";
function App() {
  const dispatch = useDispatch();
  const listTodo = useSelector(
    (state: { todosReducer: string[] }) => state.todosReducer
  ) as string[];

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

      {listTodo &&
        listTodo.map((item: string, i: number) => (
          <p key={i}>
            {item}{" "}
            <button
              onClick={() =>
                dispatch({ type: "DELETE", payload: "", index: i })
              }
            >
              Delete
            </button>
          </p>
        ))}
    </div>
  );
}

export default App;
