import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, AllPosts } from "./components";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/posts" component={AllPosts} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
