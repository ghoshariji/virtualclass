import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, cpassword] = useState();
  const submitHandle = async () => {
    if (!email || !password) {
      alert("Fill all the field");
    }

    try {
      const config = {
        Headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      alert("Login successfully");
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      alert("Login failed");
      console.log("Error from login page" + error);
    }
  };
  return (
    <div>
      <Navbar />
      <h1>Login</h1>
    </div>
  );
};

export default Login;
