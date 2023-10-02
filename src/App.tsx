import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ControlStudent from "./components/Control";
import FormStudent from "./components/FormStudent";
import ListStudent from "./components/ListStudent";
import { IStudent } from "./types/types";
import { studentsDB } from "./models/db";

class App extends Component {
  state: { students: IStudent[]; isShowForm: boolean } = {
    students: studentsDB,
    isShowForm: false,
  };

  // handleToggleForm
  handleToggleForm = (status: boolean): void => {
    this.setState({ isShowForm: status });
  };

  handleDelete = (code: string) => {
    console.log("Kieemr tra code", code);

    this.setState(() => {
      const newData = this.state.students.filter(
        (student) => student.code != code
      );
      return { students: newData };
    });
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
            />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <div className="col-5 grid-margin">
          {this.state.isShowForm && <FormStudent />}
        </div>
        {/* END FORM SINH VIÊN */}
      </div>
    );
  }
}

export default App;
