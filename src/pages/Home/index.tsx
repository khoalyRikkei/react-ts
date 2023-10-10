import axios from "axios";
import { log } from "console";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [toggle, setToggle] = useState(true);

  // Chỉ chạy 1 lần khi mount
  useEffect(() => {
    axios("http://localhost:3000/users")
      .then((response) => {
        console.log("Kieemr tra axios", response);
        setData(response.data);
      })
      .catch((err) => {
        alert();
      });

    getData("http://localhost:3000/comments", setComments);
  }, []);

  const handleDelete = (id: number) => {
    console.log(id);
    axios
      .delete("http://localhost:3000/users/" + id)
      .then((response) => {
        getData("http://localhost:3000/users/", setData);
      })
      .catch();
  };

  const handleAdd = () => {
    const data = {
      name: "Nguyen Van A",
      doB: "1990-01-10T10:55:29.113Z",
      email: "Marlene_Reilly95@example.com",
      work: "National Quality Officer",
    };

    axios.post("http://localhost:3000/users/", data).then((res) => {
      console.log(res);
      getData("http://localhost:3000/users/", setData);
    });
  };

  const handleEdit = (id: string) => {
    const data = {
      name: "Nguyen Van C",
      doB: "1990-01-10T10:55:29.113Z",
    };

    axios.put("http://localhost:3000/users/" + id, data).then((res) => {
      console.log(res);
      getData("http://localhost:3000/users/", setData);
    });
  };

  const handleEditPatch = (id: string) => {
    const data = {
      name: "Nguyen Van D",
    };

    axios.patch("http://localhost:3000/users/" + id, data).then((res) => {
      console.log(res);
      getData("http://localhost:3000/users/", setData);
    });
  };

  console.log("re-render", data);

  return (
    <>
      <h1>
        <button onClick={() => setToggle(false)}>Comments</button>{" "}
        <button onClick={() => setToggle(true)}>User</button>
        {toggle ? (
          <ul>
            {data.map((item, i) => (
              <li key={i}>
                {item.name}
                <button onClick={() => handleEditPatch(item.id)}>Path</button>
                <button onClick={() => handleEdit(item.id)}>Put</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {comments.map((item, i) => (
              <li key={i}>{item.body}</li>
            ))}
          </ul>
        )}
        <button onClick={() => handleAdd()}>Post</button>
      </h1>
    </>
  );
}

const getData = async (url: string, setData: Function) => {
  const response = await axios.get(url);
  console.log("kieemr tra axois comment", response);
  setData(response.data);
};
