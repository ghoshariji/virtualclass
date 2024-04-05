import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Enteremail = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({
      email: ""
    });

    const handleInput = (event) => {
      setPost({ ...post, [event.target.name]: event.target.value });
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Set the height to 100% of the viewport height
          backgroundColor: "#f0f0f0", // Set a background color
        }}
      >
        <div
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "1rem",
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white", // Set background color for the input area
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add a shadow for depth
          }}
        >
          <p style={{ marginBottom: "1rem", fontSize: "2.5rem" }}>
            Enter your email
          </p>
          <input
            type="text"
            placeholder="Enter email"
            onChange={handleInput}
            value={post.email}
            name="email"
            style={{
              padding: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "250px",
              fontSize:'1.2rem'
            }}
          />
          <button
            type="submit"
            onClick={() => navigate(`/otpverification?email=${post.email}`)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
              fontSize:'2rem'
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
};

export default Enteremail;
