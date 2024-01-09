import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState();
  const [password, setpassword] = useState();
  const handleinput = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username: Username,
        password: password,
      });
      console.log("Login successful:", response.data);
      if (response.status == 200) {
        navigate("/bot");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response status:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };
  return (
    <div className="container">
      <div className="left-section"></div>
      <div className="right-section">
        <div className="login-container">
          <form className="login-form" onSubmit={handleinput}>
            <h2 className="login-title">
              <IoMdLogIn /> Login
            </h2>
            <div className="form-control">
              <FaRegCircleUser className="i" />
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <FaLock className="i" />
              <input
                name="password"
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                className="checkbox-input"
              />
              <span className="checkbox-custom"></span>
              <label htmlFor="rememberMe">Remember me</label>
              <p className="aa">
                <Link to="/signup">Signup Page</Link>
              </p>
            </div>

            <div className="social-login">
              <FaGoogle className="google" />
              <FaFacebookF className="facbook" />
              <CiTwitter className="twitter" />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
