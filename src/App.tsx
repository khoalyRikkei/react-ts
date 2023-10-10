import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getDataUser } from "./api";
import axios from "axios";
import { FILTER_DATA_USER } from "./api/common";

function App() {
  const [data, setData] = useState<any[]>([]);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await getDataUser();
    setData(response);
  };
  console.log("Kiểm tra data", data);

  const handleSearch = () => {
    axios
      .get(FILTER_DATA_USER + "name=" + valueSearch)
      .then((res) => {
        console.log("filter", res);
      })
      .catch((err) => {});
  };
  const handlePaginate = () => {
    const page = Number(prompt("Bạn muốn tìm trang nào")) || 1;
    const data_per_page = +Number(prompt("Bạn 1 trang bao nhiêu data")) || 1;
    axios
      .get(FILTER_DATA_USER + "_page=" + page + "&_limit=" + data_per_page)
      .then((res) => {
        console.log("handlePaginate", res);
      })
      .catch((err) => {});
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setValueSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handlePaginate}>Phân trang</button>
    </div>
  );
}

export default App;
