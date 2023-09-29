import { Component, ReactNode } from "react";

// interface Prop {
//   onClick: Function;
// }
// function sum(props: Prop, {}) {}

// sum({ onClick: () => {} }, {});

type T = {
  sum: number;
  name: string;
};
class Ex1 extends Component {
  //   constructor() {
  //     super({});
  //     // this.state = {
  //     //   count: 0,
  //     // };
  //   }

  state: { count: number } = { count: 0 };
  name: string = "Nguyễn văn A";
  state_2: T = {
    sum: 0,
    name: "Nguyeenx van A",
  };
  setClone = (data: T) => {
    this.state_2 = data
    this.render();
  };
  render() {
    return (
      <>
        <h1>Bài tập 1:</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            this.name = "Nguyen Van C";
            this.setClone({ sum: 20, name: "Hello world" });
            // this.state_2 = {
            //   sum: 10,
            //   name: "test",
            // };

            console.log(this.name, this.state_2);
          }}
        >
          Click
        </button>
        <button>{this.state.count}</button>

        <h1>Name:{this.state_2.name}</h1>

        <ul>
          <li>- Bước 1: Khai báo state --- </li>
          <li>- Bước 2: Tạo các hàm tăng giảm -</li>
          <li>- Bước 3: Hiển thị kết quả -</li>
        </ul>
      </>
    );
  }
}

export default Ex1;
