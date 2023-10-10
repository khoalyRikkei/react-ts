import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [data, setData] = useState<any[]>([]);
  const configValue = process.env;

  console.log(1111111111, configValue);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log("phan hoi", res);
        setData(res);
      })
      .catch((err) => console.error("Kiểm tra error", err));
    // fetchData("http://localhost:3000/posts", setData);
  }, []);

  return (
    <div className="App">
      <ul>{data && data.map((item, i) => <li key={i}>{item.title}</li>)}</ul>

      <Home />
    </div>
  );
}

function fetchData(url: string, setData: Function) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      setData(res);
    });
}

export default App;
