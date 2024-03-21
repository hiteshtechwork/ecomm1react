import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const dummyValues = { name: "", email: "", password: "" };
  const [values, setValues] = useState(dummyValues);
  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // //handle Register api call
  const handleRegister = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/register", values)
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => console.log(err + "register frontend error"));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-50">
        <h2 className="mb-3">Sign-Up Form</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="name" className="fw-bold">
              UserName
            </label>
            <input
              className="form-control rounded-0"
              type="text"
              placeholder="UserName"
              name="name"
              onChange={handleValues}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="fw-bold">
              Email
            </label>
            <input
              className="form-control rounded-0"
              type="text"
              placeholder="email"
              name="email"
              onChange={handleValues}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="fw-bold">
              Password
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Password"
              name="password"
              onChange={handleValues}
            />
          </div>
          <button className="btn btn-success w-100">Sign Up</button>
          <p>You are agreed to our terms and condition</p>
          <Link
            to="/signup"
            className=" bg-light w-100 btn btn-default border rounded-0
            text-decoration-none"
          >
            Log In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
