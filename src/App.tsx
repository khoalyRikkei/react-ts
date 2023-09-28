import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const slogan = "Để nông dân biết code";
    return (
      <div className="App">
        <>
          <header>
            <h1>Session 19 - DOM</h1>
          </header>
          <main id="main">
            <h3 id="text-title">Đây là title</h3>
            <section>
              <p className="text-red">Đây là thẻ p1</p>
              <p className="text-red">Đây là thẻ p2</p>
              <p className="text-red">Đây là thẻ p3</p>
              <p className="text-red">Đây là thẻ p4</p>
            </section>
          </main>
        </>
      </div>
    );
  }
}

function FormComponent() {
  return (
    <>
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
      </form>
    </>
  );
}

export default App;
