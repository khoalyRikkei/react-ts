import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext<string | null>(null);
const DataContext = createContext<{ [key: string]: number | string } | null>(
  null
);

export default function ExampleUseContext() {
  const [user, setUser] = useState<string | null>("Rikkei Academy");

  /**
   * @syntax const value = useContext(SomeContext)
   * @SomeContext  const SomeContext = createContext(myContext) // Khởi tạo và khai báo component với createContext() của react, bản thân SomeContext không chưa thông tin
   * @useContext sẽ return giá trị của component được gọi. Nó là trong property value của <SomeContext.Provider value={any}>. Nếu không được cung cấp, nó trả về giá trị khởi tạo được chứa trong createContext()
   */

  const [themDark, setThemeDark] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = themDark ? "black" : "white";
    document.body.style.color = themDark ? "white" : "black";
  }, [themDark]);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => setThemeDark(!themDark)}
      >
        Toggle Theme
      </button>

      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}! - from component parent`}</h1>
        <Component2 />
      </UserContext.Provider>
      <DataContext.Provider value={{ id: 1, name: "Nguyễn Văn A" }}>
        <Component6 />
      </DataContext.Provider>
    </>
  );
}

function Component2() {
  return (
    <>
      <h3>Component 2</h3>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h3>Component 3</h3>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h3>Component 4</h3>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  console.log("check user", user);

  return (
    <>
      <hr />
      <h3>Component 5</h3>
      <p>{`Hello ${user} again! from componet child`}</p>
      <hr />
    </>
  );
}
function Component6() {
  const data = useContext(DataContext);
  console.log("check data 1", data);
  return (
    <>
      <h3>Component 6</h3>

      <DataContext.Provider value={{ ...data, age: 20 }}>
        <Component7 />
      </DataContext.Provider>
    </>
  );
}
function Component7() {
  const data = useContext(DataContext);
  console.log("check data 2", data);
  return (
    <>
      <hr />
      <h3>Component 7</h3>
      <p>{`Hello ${data?.name} có ID là ${data?.id}`}</p>
      <hr />
    </>
  );
}
