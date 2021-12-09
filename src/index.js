import React, { useContext } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Nav, AllPosts, Home, SignupOrLogin } from "./components";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import "./index.css";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          {!isLoggedIn && (
            <>
              <Route path="/login" component={SignupOrLogin} />
              <Route path="/signup" component={SignupOrLogin} />
              <Route path="/posts" render={() => <Redirect to="/home" />} />
            </>
          )}
          {isLoggedIn && <Route path="/posts" component={AllPosts} />}
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
