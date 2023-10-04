import { useContext } from "react";
import { Student } from "../../types";
import { IndexContext } from ".";

export default function StudentElement({
  student,
  index,
  onViewAddEdit,
}: {
  student: Student;
  index: number;
  onViewAddEdit: Function;
}) {
  const dataParent = useContext(IndexContext);

  console.log("Kiem tra dataa", dataParent);

  return (
    <tr key={student.studentId} style={{ background: dataParent.color }}>
      <td>{index + 1}</td>
      <td>{student.studentId}</td>
      <td>{student.studentName}</td>
      <td>{student.studentAge}</td>
      <td>{student.studentGender ? "Nam" : "Nữ"}</td>
      <td>
        <div className="template-demo">
          <button
            type="button"
            className="btn btn-danger btn-icon-text"
            onClick={() => onViewAddEdit(student.studentId, "view")}
          >
            Xem
          </button>
          <button
            type="button"
            className="btn btn-warning btn-icon-text"
            onClick={() => onViewAddEdit(student.studentId, "edit")}
          >
            Sửa
          </button>
          <button type="button" className="btn btn-success btn-icon-text">
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}
