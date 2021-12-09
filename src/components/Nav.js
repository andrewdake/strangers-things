import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import styled from "styled-components";
import { STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY } from "../../constants";

const loggedOutLinks = [
  {
    name: "Home",
    iconClassName: "material-icons-outlined",
    icon: "home",
    to: "/home",
  },
  {
    name: "Login",
    iconClassName: "material-icons-outlined",
    icon: "login",
    to: "/login",
  },
  {
    name: "Signup",
    iconClassName: "material-icons-outlined",
    icon: "check_box",
    to: "/signup",
  },
];

const loggedInLinks = [
  {
    name: "Home",
    iconClassName: "material-icons-outlined",
    icon: "home",
    to: "/home",
  },
  {
    name: "Logout",
    iconClassName: "material-icons-outlined",
    icon: "logout",
    to: "/logout",
  },
];

const NavContainer = styled.nav`
  & {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.8em;
  }
  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    margin-left: 2em;
  }
  & > a:last-child {
    margin-right: 1em;
  }
  & > a.active {
    color: blue;
    font-weight: bold;
  }
`;

export default function Nav() {
  const { isLoggedIn, updateAuthStatus } = useContext(AuthContext);
  const history = useHistory();
  const navLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  const logout = () => {
    localStorage.removeItem(STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY);
    updateAuthStatus();
    history.push("/home");
  };

  return (
    <NavContainer>
      {navLinks.map(({ name, to, iconClassName, icon }, idx) => (
        <NavLink
          key={idx}
          exact
          activeClassName="active"
          to={name === "Logout" ? "/home" : to}
          onClick={name === "Logout" ? logout : null}
        >
          <i className={iconClassName}>{icon}</i>
          <span>{name}</span>
        </NavLink>
      ))}
    </NavContainer>
  );
}
