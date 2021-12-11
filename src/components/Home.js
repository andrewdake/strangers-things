import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Layout } from "./util";

const SignupOrLoginBtn = styled(Link)`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    font-size: 22px;
    border-radius: 5px;
    background-color: black;
    color: white;
    width: 220px;
    margin-top: 1em;
  }
  &:last-child {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const buttons = [
  { name: "Signup", to: "/signup" },
  { name: "Login", to: "/login" },
];

export default function Home() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Layout>
      <h1>Stranger's Things</h1>
      {isLoggedIn ? (
        <SignupOrLoginBtn to="/posts">View All Posts</SignupOrLoginBtn>
      ) : (
        buttons.map(({ name, to }, idx) => (
          <SignupOrLoginBtn key={idx} to={to}>
            {name}
          </SignupOrLoginBtn>
        ))
      )}
    </Layout>
  );
}
