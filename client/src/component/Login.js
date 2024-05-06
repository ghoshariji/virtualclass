import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../customcss/login.css";
import { FaUser, FaLock } from "react-icons/fa";
const LoginForm = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const submitHandle = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(post);
    try {
      const response = await axios.post(
        "https://virtualclass-yz7w.onrender.com/api/user/login",
        //"http://localhost:7000/api/user/login",
        post,
        config
      );
      const { data } = response;
      const id = data.userId;
      const name = data.name;
      const token = data.token;
      const email = data.email
      const image = data.image
      const course = data.course


      if (data.isAdmin) {
        toast.success("Login successful", {
          position: "top-center",
        });
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("token", token);
        localStorage.setItem("email",email)
       
        
        setTimeout(()=>{
          navigate("/afteradmin");
        },1000)
        
      } else {
        toast.success("Login successful", {
          position: "top-center",
        });
        localStorage.setItem("token", token);
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("image",image)
        localStorage.setItem("course",course)
        setTimeout(() => {
          navigate("/afterlogin");
        }, 1000);
        
      }
    } catch (error) {
      console.error("Error fetching login", error);
      console.log("Login failed" + error);
      toast.error("Login failed", {
        position: "top-center",
      });
    }
  };
  const checkAuth = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "https://virtualclass-yz7w.onrender.com/api/user/get-user-info",
        token,
        config
      );
      const { data } = response;
      const id = data.id;
      const name = data.name;
      toast.success("Login successful", {
        position: "top-center",
      });
      
      localStorage.setItem("id",id)
      localStorage.setItem("name",name)
      setTimeout(() => {
        navigate("/afterlogin");
      }, 1000);
    } catch (error) {
      console.log("Error from the user page" + error);
    }
  };
  const fetchLogin = async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      checkAuth(token);
    }
  };
  useEffect(() => {
    fetchLogin();
  }, []);
  return (
    <div className="body">
      <ToastContainer />
      <div className="wrapper">
        <form action="" onSubmit={submitHandle}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              name="email"
              onChange={handleInput}
              value={post.email}
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              value={post.password}
            />
            <FaLock className="icon" />
          </div>

          <div className="remenber-forgot">
            <label>
              <input type="checkbox" />
              Remenber me
            </label>
            <a href="/enteremail"> Forgot password</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Login as ? <a href="/instructorhome">Instructor</a>{" "}
            </p>
          </div>

          <div className="register-link">
            <p>
              Don't have an account ? <a href="/signup">Register</a>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
