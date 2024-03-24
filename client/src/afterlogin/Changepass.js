import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Changepass = () => {
  const param = new URLSearchParams(document.location.search);
  const email = param.get("email");
  const [post, setPost] = useState({
    password: "",
  });
  const navigate = useNavigate();
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const formSubmit = async (event) => {
    event.preventDefault()
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `http://localhost:7000/api/admin/change-pass?email=${email}`,
        post,
        config
        
      );
      alert("Succesfully chnage password");
      navigate("/login");
      setPost("")
    } catch (error) {
      console.log("Error from the chnagepass page" + error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <form
          action=""
          onSubmit={formSubmit}
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px",
          }}
        >
          <input
            type="text"
            name="password"
            onChange={handleInput}
            value={post.password}
            placeholder="Enter password"
          />
          <button type="submit">Change Passdword</button>
        </form>
      </div>
    </div>
  );
};

export default Changepass;
