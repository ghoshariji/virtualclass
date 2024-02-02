import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const navigate = useNavigate();
  const submitHandle = async () => {
    if (!name || !email || !password || !cpassword) {
      alert("Please all the filled");
      return;
    }
    if (password !== cpassword) {
      alert("Password and confirm password doesn't match");
      return;
    }

    try {
      const config = {
        Headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/signup",
        {
          name,
          email,
          password,
          cpassword,
        },
        config
      );
      alert("Register successfully");
      localStorage.setItem("userInfo",JSON.stringify(data));
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
      console.log("Error on registration page" + error);
    }
  };
  return (
    <div>
      <div className="container-lg">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">
              Enter your name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Enter email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Enter Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="cpassword" class="form-label">
              Enter confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="cpassword"
              placeholder="enter confirm password"
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary" onClick={submitHandle}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
