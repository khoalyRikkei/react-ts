import { routes } from "../../routes";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Xin chào React Hook</h1>
        <p>
          Hooks mới được thêm ở phiên bản React 16.8. Cho phép bạn sử dụng state
          và các chức năng khác của React mà không cần tạo class.
        </p>
        <h3>Một số Hook sẽ được giới thiệu trong chương trình học</h3>
        <ul>
          {routes.map((route, i) => (
            <li key={i}>
              <p>{route.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
