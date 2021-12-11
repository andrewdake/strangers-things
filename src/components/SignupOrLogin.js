import React from "react";
import styled from "styled-components";
import { Layout } from "./util";
import { useSignupOrLogin } from "../custom-hooks";

const FormField = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 14px;
    margin-top: 1em;
  }
  &:last-child {
    margin-top: 2em;
  }
  & > label {
    font-size: 12px;
  }
  & > input {
    border: 1px solid lightgrey;
  }
  & > input,
  & + input[type="submit"] {
    height: 2.5em;
    padding: 0.5em;
    border-radius: 5px;
    margin-top: 0.5em;
    width: 220px;
  }
  & + input[type="submit"] {
    margin-top: 3em;
  }
`;

const Error = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1em;
    border: 2px solid red;
    padding: 1em;
    font-size: 14px;
    border-radius: 5px;
    width: 220px;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: italic;
    text-align: center;
  }
  & > div:last-child {
    margin-top: 1em;
  }
  & > div i {
    color: red;
    margin-right: 0.5em;
  }
`;

export default function SignupOrLogin() {
  const {
    h1,
    error,
    form,
    handleSubmit,
    handleChange,
    usernameLabel,
    passwordLabel,
  } = useSignupOrLogin();

  return (
    <Layout>
      <h1>{h1}</h1>
      {error && (
        <Error>
          <div>
            <i className="material-icons-outlined">error</i>
            <span>{error.name}</span>
          </div>
          <div>{error.message}</div>
        </Error>
      )}
      <form onSubmit={handleSubmit}>
        <FormField>
          <label>{usernameLabel}</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>{passwordLabel}</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </FormField>
        <input type="submit" value="Submit" />
      </form>
    </Layout>
  );
}
