import { createContext, useState } from "react";
import Control from "./Control";
import FormStudent from "./form";
import ListStudent from "./listStudent";
import { Student } from "../../types";
import { students } from "../../models";

type Them = {
  color: string;
  width: number;
};
// Cung cấp môi trường useContext
export const IndexContext = createContext<Them>({ color: "green", width: 50 });
function StudentManagement() {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);
  const [data, setData] = useState<Student[]>(students);
  const [studentForm, setStudentForm] = useState<Student | undefined>();

  const handleToggleForm = (status: boolean) => {
    setIsShowForm(status);
  };

  const handleSubmit = () => {
    handleToggleForm(false);
  };

  const handleViewAddEdit = (id: string, action: "view" | "edit" | "add") => {
    const student = data.find((item) => item.studentId === id);
    setStudentForm(student);
    handleToggleForm(true);
  };

  return (
    <div className="row">
      <IndexContext.Provider value={{ color: "red", width: 1000 }}>
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Control onToggleForm={handleToggleForm} />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}

            <ListStudent data={data} onViewAddEdit={handleViewAddEdit} />

            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {isShowForm && (
          <FormStudent onSubmit={handleSubmit} student={studentForm} />
        )}
        {/* END FORM SINH VIÊN */}
      </IndexContext.Provider>
    </div>
  );
}

export default StudentManagement;
