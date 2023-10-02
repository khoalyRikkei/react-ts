import { Component, ReactNode } from "react";
import { IStudent } from "../../types/types";

class Student extends Component<{
  student: IStudent;
  index: number;
  onDelete: Function;
}> {
  render() {
    const { student, index } = this.props;
    console.log(this.props, 1111111111111);
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{student.code}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>{student.gender ? "Nam" : "Nữ"}</td>
        <td>
          <div className="template-demo">
            <button type="button" className="btn btn-danger btn-icon-text">
              Xem
            </button>
            <button type="button" className="btn btn-warning btn-icon-text">
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-success btn-icon-text"
              onClick={() => this.props.onDelete(student.code)}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }

  //   componentDidMount() {
  //     // const { student, index } = this.props;
  //     // console.log(this.props, 1111111111111);
  //   }
}

export default Student;
