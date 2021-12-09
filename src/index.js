import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, AllPosts } from "./components";
import "./index.css";

import { useAuth } from "./custom-hooks";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          {!isLoggedIn && (
            <>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </>
          )}
          {isLoggedIn && (
            <>
              <Route path="/posts" component={AllPosts} />
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
