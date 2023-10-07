import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import ListNote from "./components/ListNote";

export interface Note {
  content: string;
  date: Date;
}

function App() {
  const [listNote, setListNote] = useState<Note[]>([]);
  const [value, setValue] = useState<string>("");
  const [listFilter, setListFilter] = useState<Note[]>([]);
  const [isDark, setIsDark] = useState(false);

  const handleDelete = (index: number) => {
    const newData = listNote.filter((_, i) => i !== index);
    setListNote(newData);
  };

  const handleAdd = () => {
    setListNote([...listNote, { content: value, date: new Date() }]);
    setValue("");
  };

  const handleSearch = (value: string) => {
    const newData = listNote.filter((item) => item.content.includes(value));
    setListFilter(newData);
  };

  useEffect(() => {
    setListFilter(listNote);
  }, [listNote]);

  document.body.style.backgroundColor = isDark ? "black" : "white";
  document.body.style.color = isDark ? "white" : "black";

  return (
    <>
      <button onClick={() => setIsDark(!isDark)}>Dark</button>
      <div className="container">
        <h1>Reviews</h1>
        <div className="search">
          <div className="icon">Search</div>
          <input type="text" onChange={(e) => handleSearch(e.target.value)} />
        </div>

        <div className="list-note">
          <ListNote data={listFilter} onDelete={handleDelete} />
          <div className="card bg-blue">
            <textarea
              name=""
              rows={10}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maxLength={200}
            ></textarea>
            <div className="btn-group">
              <div className="btn">{200 - value.length}</div>
              <div className="btn" onClick={handleAdd}>
                Public
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
