import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Afterloginusernav from "../navbar/Afterloginusernav";
import Foot from "../footer/Foot";

const Onlineclass = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleJoin = () => {
    navigate(`/join-room/${value}`);
  };

  return (
    <>
      <div
        style={{
          marginTop: "10rem",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Afterloginusernav />

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "50%",
            alignItems: "center",
            backgroundColor: "#e9c7fc",
            borderRadius: "10px",
          }}
        >
          <label htmlFor="" style={{ fontSize: "2.5rem", padding: "1rem" }}>
            Below the link for join the class
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              padding: "0.5rem",
              fontSize: "2.5rem",
              borderRadius: "0.8rem",
              border: "1px solid #ccc",
              marginRight: "1rem",
            }}
          />
          <button
            type="submit"
            onClick={handleJoin}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "2rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "0.3rem",
            }}
          >
            Join
          </button>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Onlineclass;
