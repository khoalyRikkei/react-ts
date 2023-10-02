import { Component, FormEvent, ReactNode, RefObject, createRef } from "react";
import { IStudent } from "../../types/types";

class FormStudent extends Component<{
  onAddEditForm: Function;
  onCloseForm: Function;
  action: string | null;
  studentForm: IStudent | null;
}> {
  state: { formData: IStudent } = {
    formData: {
      code: "",
      name: "",
      age: "",
      gender: "",
      doB: "",
      poB: "",
      address: "",
    },
  };

  gender: RefObject<HTMLSelectElement> = createRef();
  poB: RefObject<HTMLSelectElement> = createRef();

  handleOnChange = (
    event: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    const convertValue = name === "age" ? Number(value) : value;
    this.setState({
      formData: { ...this.state.formData, [name]: convertValue },
    });
  };

  //   shouldComponentUpdate(
  //     nextProps: Readonly<{
  //       onAddEditForm: Function;
  //       onCloseForm: Function;
  //       action: string | null;
  //       studentForm: IStudent | null;
  //     }>,
  //     nextState: Readonly<{ formData: IStudent }>,
  //     nextContext: any
  //   ): boolean {
  //     console.log("Kiểm tra...should", nextProps, "state", nextState);

  //     console.log(nextProps.studentForm?.code === nextState.formData.code);

  //     if (nextProps.studentForm?.code === nextState.formData.code) {
  //       return false;
  //     }
  //     if (this.props.studentForm) {
  //       this.setState({ formData: { ...this.props.studentForm } });
  //     }
  //     return true;
  //   }
  componentDidMount(): void {
    if (this.props.studentForm) {
      this.setState({ formData: { ...this.props.studentForm } });
    }
  }

  componentDidUpdate(
    prevProps: Readonly<{
      onAddEditForm: Function;
      onCloseForm: Function;
      action: string | null;
      studentForm: IStudent | null;
    }>,
    prevState: Readonly<{ formData: IStudent }>,
    snapshot?: any
  ): void {
    if (prevState.formData.code === this.props.studentForm?.code) {
      return;
    }

    if (this.props.studentForm) {
      this.setState({ formData: { ...this.props.studentForm } });
    }
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 1. Lấy data từ form -->
    // 2. Lấy data từ ref
    const student = {
      ...this.state.formData,
      gender: this.gender.current?.value,
      poB: this.poB.current?.value,
    };
    // 3. Gửi lại cho cha
    this.props.onAddEditForm(student);

    // 4. Đóng form

    this.props.onCloseForm(false);
  };
  render(): ReactNode {
    console.log("Cvheck", this.state.formData);

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample" onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="code"
                  value={this.state.formData.code}
                  disabled={true}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={this.handleOnChange}
                  value={this.state.formData.name}
                  readOnly={this.props.action === "view" ? true : false}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  onChange={this.handleOnChange}
                  value={this.state.formData.age}
                  readOnly={this.props.action === "view" ? true : false}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  name="gender"
                  className="form-control"
                  ref={this.gender}
                  value={this.state.formData.gender}
                  disabled={this.props.action === "view" ? true : false}
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  name="doB"
                  type="date"
                  readOnly={this.props.action === "view" ? true : false}
                  onChange={this.handleOnChange}
                  value={this.state.formData.doB}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="poB"
                  value={this.state.formData.poB}
                  ref={this.poB}
                  disabled={this.props.action === "view" ? true : false}
                >
                  <option value="29">Hà Nội</option>
                  <option value="59">TP. Hồ Chí Minh</option>
                  <option value="43">Đà Nẵng</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  name="address"
                  onChange={this.handleOnChange}
                  readOnly={this.props.action === "view" ? true : false}
                />
              </div>
            </div>
            {this.props.action !== "view" ? (
              <button type="submit" className="btn btn-primary me-2">
                {this.props.action == "edit"
                  ? "Update student"
                  : "Add new Student"}
              </button>
            ) : (
              <button
                className="btn btn-primary me-2"
                onClick={() => this.props.onCloseForm(false)}
              >
                Close
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default FormStudent;
