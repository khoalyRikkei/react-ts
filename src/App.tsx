import React, { Component, FormEvent, Fragment, createElement } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    console.log("Check react", React);

    const h1 = createElement(
      "h1",
      {
        className: "title",
      },
      "Hello meeting"
    );
    const h2 = <h2 className="title">"Hello world"</h2>;
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <h1>Xin chào bài 9</h1>
          </header>
          <h1>Hello</h1>
          {h1}
          {h2}
        </div>

        <Form>Hello world form</Form>
      </Fragment>
    );
  }
}

class Form extends Component<{ children: string }> {
  render() {
    console.log(this.props.children);

    const button = createElement("button", null, "Click");
    const form = createElement(
      "form",
      {
        onSubmit: (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log(11111111, "form");
        },
      },
      button
    );
    return (
      <>
        {form}
        <h1>{this.props.children}</h1>
      </>
    );
  }
}

export default App;
