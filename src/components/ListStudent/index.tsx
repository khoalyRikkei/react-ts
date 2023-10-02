import { Component, ReactNode } from "react";
import Student from "./Student";
import { studentsDB } from "../../models/db";
import { IStudent } from "../../types/types";

class ListStudent extends Component<{
  data: IStudent[];
  onDelete: Function;
  onViewForm: Function;
  onAddEditForm: Function
}> {
  render(): ReactNode {
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.length > 0 &&
                this.props.data.map((student, index) => (
                  <Student
                    student={student}
                    index={index}
                    onDelete={this.props.onDelete}
                    key={index}
                    onViewForm={this.props.onViewForm}
                    onAddEditForm={this.props.onAddEditForm}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListStudent;
