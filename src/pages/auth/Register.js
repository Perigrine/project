import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="w-full justify-center items-center flex min-h-[100vh]">
      <form
        className=" border-[1px] border-black space-y-[20px] rounded-[10px] p-[20px]"
        onSubmit={onSubmit}
      >
        {/* <img src={avatar} alt="Avatar" /> */}

        <div>
          <label>Name:</label>
          <input
            type="text"
            className="border-[1px] border-black w-full"
            placeholder="Name"
            value={name}
            onChange={onChange}
            name="name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            className="border-[1px] border-black w-full"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="border-[1px] border-black w-full"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            className="border-[1px] border-black w-full"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          className="border-[1px] border-black w-full cursor-pointer bg-[#398909]"
          value="Register"
        />
      </form>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
