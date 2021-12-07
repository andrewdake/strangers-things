import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, AllPosts } from "./components";
import "./index.css";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/pizza" component={() => <div>wtf man</div>} />
          <Route path="/posts" component={AllPosts} />
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
