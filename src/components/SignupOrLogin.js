import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  BASE_URL,
  STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY,
} from "../../constants";
import { AuthContext } from "../context/AuthContext";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

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

export default function SignupOrLogin() {
  const { updateAuthStatus } = useContext(AuthContext);
  const history = useHistory();
  const { pathname } = useLocation();
  const signupOrLogin = pathname.slice(1);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch(
        `${BASE_URL}/users/${
          signupOrLogin === "signup" ? "register" : "login"
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: form }),
        }
      );

      const { success, error, data } = await response.json();

      if (success) {
        setError(null);
        localStorage.setItem(
          STRANGERS_THINGS_LOCAL_STORAGE_TOKEN_KEY,
          data.token
        );
        updateAuthStatus();
        history.push("/posts");
      } else {
        setError(error);
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <Container>
      <h1>{signupOrLogin === "signup" ? "Register Account" : "Login"}</h1>
      <form onSubmit={handleSubmit}>
        {error && (
          <Error>
            <i className="material-icons-outlined">error</i>
            <div>{error.name}</div>
            <div>{error.message}</div>
          </Error>
        )}
        <FormField>
          <label>
            {signupOrLogin === "signup" ? "Choose username" : "Username"}
          </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>
            {signupOrLogin === "signup" ? "Choose password" : "Password"}
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </FormField>
        <input type="submit" value="Submit" />
      </form>
    </Container>
  );
}
