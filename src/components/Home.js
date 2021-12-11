import React from "react";
import { Layout } from "./util";
import { SignupOrLoginBtn } from "./styled";
import { useHome } from "../custom-hooks";

export default function Home() {
  const { isLoggedIn, buttons } = useHome();

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
