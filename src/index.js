import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components";

function App() {
  return (
    <section>
      <Nav />
      <div>hello world</div>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
