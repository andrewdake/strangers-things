import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  }
  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    margin-left: 1em;
  }
`;

export default function Nav({ loggedIn }) {
  const navLinks = loggedIn ? loggedInLinks : loggedOutLinks;

  return (
    <NavContainer>
      {navLinks.map(({ name, to, iconClassName, icon }, idx) => (
        <NavLink key={idx} to={to}>
          <i className={iconClassName}>{icon}</i>
          <span>{name}</span>
        </NavLink>
      ))}
    </NavContainer>
  );
}
