import { useEffect, useRef, useState } from "react";
import { Student } from "../../types";

interface Props {
  student: Student | undefined;
  onSubmit: Function;
}

function FormStudent(props: Props) {
  const [formData, setFormData] = useState<{ studentName: string }>({
    studentName: "",
  });
  useEffect(() => {
    if (props.student) {
      setFormData({ studentName: props.student.studentName });
    }
  }, [props.student]);

  //   Tao ref
  const gender = useRef();

  console.log("Kiểm tra gender", gender);

  console.log("re-render....");

  return (
    <div className="col-5 grid-margin">
      <div className="card" style={{ backgroundColor: "red" }}>
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <div className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  value={props.student?.studentId}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentName"
                  value={formData.studentName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  defaultValue={"Nữ"}
                  ref={gender.current}
                >
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" placeholder="dd/mm/yyyy" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" defaultValue={""} />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary me-2"
              onClick={(e) => {
                // props.onSubmit()
                console.log("Kiểm tra gender 2", gender);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormStudent;
