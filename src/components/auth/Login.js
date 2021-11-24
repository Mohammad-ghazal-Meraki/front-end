import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { userContext } from "../../App";
import "../auth/Login.css";
import { userSign } from "../../App";

import LoginFacebook from "../facebook/FacebookLogin";

const Login = () => {
  const newSign = useContext(userSign);
  const history = useHistory();
  const [email, setEmail] = useState(newSign.email);
  const [password, setPassword] = useState(newSign.password);
  const newUser = useContext(userContext);
  const [err, setErr] = useState();

  return (
    <div class="container-register1">
      <div class="form-register">
        <img
          src="https://soychef.es/wp-content/uploads/2016/11/user-1.png"
          alt=""
        />
        <h1>Login Form</h1>

        <div class="container-register">
          <input
            type="text"
            placeholder="Email"
            name="email"
            defaultValue={newSign.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
<<<<<<< HEAD
        </span>
        <h1
          style={{
            fontSize: "20px",
            textAlign: "center",
            paddingTop: "0px",
            marginTop: "-20px",
          }}
        >
          <span style={{ color: "rgb(19,145,210)" }}>Tre</span>
          <span style={{ color: "rgb(252,158,21)" }}>val</span>
          <GiPlanePilot style={{ fontSize: "3vw" }} />
          <span style={{ color: "rgb(227,64,61)" }}>eo</span>
        </h1>

        <h2 className="header-login">login</h2>
        <input
          type="email"
          placeholder="email here"
          className="email-login"
          defaultValue={newSign.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password here"
          defaultValue={newSign.password}
          className="password-login"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="btn-login"
          onClick={() => {
            axios
              .post("http://localhost:5000/login", { email, password })
              .then((result) => {
                if (!result.data.token) {
                  setErr(result.data);
                } else {
                  localStorage.setItem(`info`, result.data.token);
                  newUser.setToken(result.data.token);
                  history.push(`/home`);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          login
        </button>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v12.0&appId=300480835180286&autoLogAppEvents=1"
          nonce="Zu8VEK3r"
        ></script>

        <LoginFacebook />
        {err}
=======
          <input
            type="password"
            placeholder="Password"
            defaultValue={newSign.password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="psw"
            required
          />
          <div>
            <button
              onClick={() => {
                axios
                  .post("http://localhost:5000/login", { email, password })
                  .then((result) => {
                    if (!result.data.token) {
                      setErr(result.data);
                    } else {
                      localStorage.setItem(`info`, result.data.token);
                      newUser.setToken(result.data.token);
                      history.push(`/home`);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              class="signupbtn"
            >
              Login
            </button>
          </div>
          <div class="spacing">
            <script
              async
              defer
              crossOrigin="anonymous"
              src="https://connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v12.0&appId=300480835180286&autoLogAppEvents=1"
              nonce="Zu8VEK3r"
            ></script>
            <LoginFacebook />
            {err}
          </div>
        </div>
>>>>>>> 5fb38b7bf19b29389896b842bbfeb6a7909e1e48
      </div>
    </div>
  );
};

export default Login;
