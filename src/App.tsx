import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Ex1 from "./pages/ex-1";
import Modal from "./pages/ex-2/toggle";

class App extends Component {
  state: { isShowModal: boolean; data: number } = {
    isShowModal: false,
    data: 10,
  };

  handleTogle = (status: boolean) => {
    console.log(1111111111);

    this.setState({ isShowModal: !this.state.isShowModal });
  };
  render() {
    const dataParent = 1000;
    return (
      <div className="App">
        <ChildApp
          onClick={() => {
            console.log("Child");
          }}
          data={dataParent}
        />

        <br />
        <hr />
        <h3>Bài tập: tạo chức năng tăng giảm số lượng của sản phẩm</h3>
        <Ex1 />

        <fieldset>
          <legend>Ví dụ toggle</legend>
          <h3>Bật tắt một modal</h3>

          <hr />
          <button onClick={()=>this.handleTogle(true)}>
           Open
          </button>
          {this.state.isShowModal && (
            <Modal onClose={this.handleTogle} data={this.state.data} />
          )}
        </fieldset>
      </div>
    );
  }
}
interface PropsChild {
  onClick: Function;
  data: number;
}
interface StateChild {
  sum: number;
}
class ChildApp extends Component<PropsChild, StateChild> {
  constructor(props: PropsChild) {
    super(props);
    this.state = {
      sum: 0,
    };
  }
  increase() {
    this.setState({ sum: 0 });
    console.log(this.state.sum);
  }
  render() {
    console.log("re-render .....");
    let sum = 0;
    return (
      <>
        <button
          onClick={() => {
            sum = sum + 1;
            console.log("check sum", sum);
          }}
        >
          Up
        </button>

        <button onClick={() => this.increase()}>Up state</button>
        <div>Sum: {sum}</div>
        <div>Sum state: {this.state.sum}</div>

        <h3>Dữ liệu của parent: {this.props.data}</h3>
        <button onClick={() => this.props.onClick()}>Click child</button>
      </>
    );
  }
}
export default App;
