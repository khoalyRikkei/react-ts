import { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <h1 className="title">
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </h1>
    );
  }
}
export default Header;
