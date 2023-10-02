import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ControlStudent from "./components/Control";
import FormStudent from "./components/FormStudent";
import ListStudent from "./components/ListStudent";
import { IStudent } from "./types/types";
import { studentsDB } from "./models/db";

class App extends Component {
  state: {
    students: IStudent[];
    isShowForm: boolean;
    action: string | null;
    studentForm: IStudent | null;
  } = {
    students: studentsDB,
    isShowForm: false,
    action: null,
    studentForm: null,
  };

  // handleToggleForm
  handleToggleForm = (status: boolean, action: string): void => {
    if (status === false) {
      this.setState({ studentForm: null });
    }
    this.setState({ isShowForm: status, action: action });
  };

  handleDelete = (code: string) => {
    this.setState(() => {
      const newData = this.state.students.filter(
        (student) => student.code != code
      );
      return { students: newData };
    });
  };

  handleAddEditForm = (student: IStudent, action: string | null) => {
    if (this.state.action === "add") {
      this.state.students.push(student);
      this.setState({ students: this.state.students });
    } else if (this.state.action === "edit") {
      const newData = this.state.students.map((item) => {
        if (item.code === student.code) {
          return { ...item, ...student };
        }

        return item;
      });

      this.setState({ students: newData });
    }
  };
  handleViewForm = (code: "string", action: string) => {
    const student = this.state.students.find(
      (student) => student.code === code
    );

    if (student) {
      this.setState({ studentForm: student });
    }
    this.handleToggleForm(true, action);
  };
  render(): React.ReactNode {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <ControlStudent onShowForm={this.handleToggleForm} />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent
              data={this.state.students}
              onDelete={this.handleDelete}
              onViewForm={this.handleViewForm}
              onAddEditForm={this.handleAddEditForm}
            />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <div className="col-5 grid-margin">
          {this.state.isShowForm && (
            <FormStudent
              onAddEditForm={this.handleAddEditForm}
              onCloseForm={this.handleToggleForm}
              action={this.state.action}
              studentForm={this.state.studentForm}
            />
          )}
        </div>
        {/* END FORM SINH VIÊN */}
      </div>
    );
  }
}

export default App;
