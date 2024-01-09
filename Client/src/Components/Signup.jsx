import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import axios from "axios";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handleInput = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        username: Username,
        password: password,
      });
      console.log("Signup successful:", response.status);
      if (response.status == 200) {
        navigate("/");
      }
    } catch (error) {
      // Handle errors
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

  // ... rest of your component

  return (
    <div className="container">
      <div className="left-section"></div>
      <div className="right-section">
        <div className="login-container">
          <form className="login-form" onSubmit={handleInput}>
            <h2 className="login-title">
              <IoMdLogIn /> Signup
            </h2>
            <div className="form-control">
              <FaRegCircleUser className="i" />
              <input
                name="username"
                type="text"
                placeholder="Create Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <FaLock className="i" />
              <input
                name="password"
                type="password"
                placeholder="Create Password"
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
            </div>

            <div className="social-login">
              <FaGoogle className="google" />
              <FaFacebookF className="facbook" />
              <CiTwitter className="twitter" />
            </div>
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
