import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../customcss/login.css";
import Beforelogin from "../navbar/Beforeloginnav";
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
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/login`,
        post,
        config
      );
      const { data } = response;
      const id = data.userId;
      const name = data.name;
      const token = data.token;
      const email = data.email;
      const image = data.image;
      const course = data.course;

      if (data.isAdmin) {
        toast.success("Login successful", {
          position: "top-center",
        });
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        setTimeout(() => {
          navigate("/afteradmin");
        }, 1000);
      } else {
        toast.success("Login successfully", {
          position: "top-center",
        });
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("image", image);
        localStorage.setItem("course", course);
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
        `${process.env.REACT_APP_API_URL}/api/user/get-user-info`,
        token,
        config
      );
      const { data } = response;
      const id = data.id;
      const name = data.name;
      toast.success("Login successfully", {
        position: "top-center",
      });
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      //window.location.reload();
      setTimeout(() => {
        navigate("/afterlogin");
      }, 1000);
    } catch (error) {}
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
    <div>
      <Beforelogin />
      <div className="BODYLOGIN" style={{ marginTop: "6rem" }}>
        <div className="Welcome" style={{ marginTop: "8rem" }}>
          <h2>Welcome Our eLearning Classroom</h2>
        </div>

        <div className="container1000">
          <ToastContainer />
          <div className="drop">
            <div className="content100">
              <h2>LOG IN</h2>
              <form onSubmit={submitHandle}>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={handleInput}
                    value={post.email}
                    name="email"
                  />
                </div>

                <div className="inputBox">
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={handleInput}
                    value={post.password}
                    name="password"
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="submit"
                    value="Login"
                    style={{ fontSize: "16px" }}
                  />
                </div>
              </form>
            </div>
          </div>
          <a
            onClick={() => navigate("/enteremail")}
            className="btns100"
            style={{ fontSize: "14px" }}
          >
            Forgot Password
          </a>
          <a
            onClick={() => navigate("/signup")}
            className="btns100 signup"
            style={{ fontSize: "14px" }}
          >
            Signup
          </a>
          <a
            onClick={() => navigate("/instructorhome")}
            className="btns Instructor"
            style={{ fontSize: "14px" }}
          >
            Instructor Login?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
