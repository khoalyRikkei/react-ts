import { Student } from "../../types";
import StudentElement from "./Student";

interface Props {
  data: Student[];
  onViewAddEdit: Function;
}

function ListStudent(props: Props) {
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
            {props.data &&
              props.data.map((student, index) => (
                <StudentElement
                  key={index}
                  student={student}
                  onViewAddEdit={props.onViewAddEdit}
                  index={index}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudent;
