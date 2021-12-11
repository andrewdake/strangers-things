import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useNav } from "../custom-hooks";

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
  const { linkProps, navLinks } = useNav();

  return (
    <NavContainer>
      {navLinks.map(({ name, icon, to }, idx) => (
        <NavLink key={idx} {...linkProps(name, to)}>
          <i className={"material-icons-outlined"}>{icon}</i>
          <span>{name}</span>
        </NavLink>
      ))}
    </NavContainer>
  );
}
