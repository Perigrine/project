import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="w-full justify-center items-center flex min-h-[100vh]">
      <form
        className=" border-[1px] border-black space-y-[20px] rounded-[10px] p-[20px]"
        onSubmit={onsubmit}
      >
        <header>
          <h2>Login</h2>
        </header>
        <main>
          <p>
            <label>Email: </label>
            <input
              className="border-[1px] border-black w-full"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onchange}
            />
          </p>
          <p>
            <label>Password: </label>
            <input
              className="border-[1px] border-black w-full"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onchange}
              minLength="6"
            />
          </p>
        </main>
        <input
          type="submit"
          className="ring-blue-500 ring-2 text-[18px] "
          value="Login"
        />
        <p className="my-1">
          Don't you have an account?
          <Link to="/register" className="py-2 ring-blue-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

Login.porpTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
