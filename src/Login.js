import React, { useState } from "react";
import { Link } from "@material-ui/core";
import "./Login.css";
import { auth } from "./Firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //ogin and redirect to homepage

        history.push("/");
      })
      .catch((event) => alert(event.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create user login and redirect to homepage
        history.push("/");
      })
      .catch((event) => alert(event.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>

        <button onClick={register} className="login_createAccountButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
