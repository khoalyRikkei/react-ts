import { Component } from "react";
import "./App.css";

class App extends Component {
  sumNumber(a: number, b: number) {
    const sum = a + b;
    console.log("Kết quả", sum);
  }

  render() {
    return (
      <>
        <h1>Hello</h1>
        <div className="container">
          {/* <button onClick={() => this.sumNumber(10, 20)}>Tính tổng</button> */}
          <AddData onSum={this.sumNumber} data={1000} />
        </div>
      </>
    );
  }
}
interface Props {
  onSum: Function;
  data: number
}
class AddData extends Component<Props> {
  handleSum() {
    this.props.onSum(3, 4);
  }
  render() {
    return (
      <>
        <input type="text" placeholder="Nhập số a" />
        <input type="text" placeholder="Nhập số b" />
        <button onClick={this.handleSum}>Tính tổng</button>
      </>
    );
  }
}

export default App;
