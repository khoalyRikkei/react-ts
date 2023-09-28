import { Component } from "react";

class Main extends Component {
  render() {
    const styleMain = { color: "orange" };
    const content = "Xin chào Việt Nam";
    return <h1 style={styleMain}>{content}</h1>;
  }
}
export default Main;
