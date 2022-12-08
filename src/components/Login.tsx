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
  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login?.token!);
      navigate("/");
    },
  });

  const [signup] = useMutation(SIGN_UP_MUTATION, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup?.token!);
      navigate("/");
    },
  });

  return (
    <div>
      <h4 className="mv3">{formState.loginFS ? "Login" : "Sign Up"}</h4>
      <div className="flex flex-column">
        {!formState.loginFS && (
          <input
            value={formState.name}
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
          value={formState.email}
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
          value={formState.password}
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
          onClick={() => (formState.loginFS ? login : signup)}
        >
          {formState.loginFS ? "login" : "create account"}
        </button>
        <button
          className="pointer button"
          onClick={(e) =>
            setFormState({
              ...formState,
              loginFS: !formState.loginFS,
            })
          }
        >
          {formState.loginFS
            ? "need to create an account?"
            : "already have an account?"}
        </button>
      </div>
    </div>
  );
};

export default Login;
