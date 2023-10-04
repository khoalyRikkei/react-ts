import React, { useState } from "react";

function UserManagement() {
  const [valueInput, setValueInput] = useState<string>("");
  const [data, setData] = useState<string[]>([]);

  const handleAdd = () => {
    setData([...data, valueInput]);
    setValueInput("");
  };

  const handleDelete = (index: number) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValueInput(e.target.value)
          }
          value={valueInput}
        />

        <button onClick={handleAdd}>ADD</button>
      </div>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserManagement;
