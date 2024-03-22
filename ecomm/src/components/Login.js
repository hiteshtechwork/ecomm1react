import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", values)
      .then((res) => {
        console.log(res);
        if (res.data.Status === "loginSuccess") {
          navigate("/");
        } else if (res.data.Status === "emailNotFound") {
          alert(res.data.Message);
        } else if (res.data.Status === "wrongPassword") {
          alert(res.data.Message);
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <h2 className="mb-3">Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="fw-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => {
                setValues({ ...values, email: e.target.value });
              }}
              placeholder="email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="fw-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-0"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-success w-100">Log-In</button>
          <p>You are agreed to our terms and condition</p>
          <Link
            to="/signup"
            className=" bg-light w-100 btn btn-default border rounded-0
            text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
