import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphql/mutations/LOGIN_MUTATION";
import { SIGN_UP_MUTATION } from "../graphql/mutations/SIGN_UP_MUTATION";
import { AUTH_TOKEN } from "../constants";
const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    loginFS: true,
    email: "",
    password: "",
    name: "",
  });

  const { loginFS, email, password, name } = formState;

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: email,
      password: password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login?.token!);
      navigate("/");
    },
  });

  const [signup] = useMutation(SIGN_UP_MUTATION, {
    variables: {
      name: name,
      email: email,
      password: password,
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup?.token!);
      navigate("/");
    },
  });

  return (
    <div>
      <h4 className="mv3">{loginFS ? "Login" : "Sign Up"}</h4>
      <div className="flex flex-column">
        {!loginFS && (
          <input
            value={name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value,
              })
            }
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value,
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <button
          className="pointer mr2 button"
          onClick={() => (loginFS ? login : signup)}
        >
          {loginFS ? "login" : "create account"}
        </button>
        <button
          className="pointer button"
          onClick={(e) =>
            setFormState({
              ...formState,
              loginFS: !loginFS,
            })
          }
        >
          {loginFS ? "need to create an account?" : "already have an account?"}
        </button>
      </div>
    </div>
  );
};

export default Login;
