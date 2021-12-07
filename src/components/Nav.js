import React from "react";
import { NavLink } from "react-router-dom";

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

export default function Nav({ loggedIn }) {
  const navLinks = loggedIn ? loggedInLinks : loggedOutLinks;

  return (
    <nav>
      {navLinks.map(({ name, to, iconClassName, icon }) => (
        <NavLink to={to}>
          <i className={iconClassName}>{icon}</i>
          <span>{name}</span>
        </NavLink>
      ))}
    </nav>
  );
}
