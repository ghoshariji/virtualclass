import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Afterloginusernav from "../navbar/Afterloginusernav";
import Foot from "../footer/Foot";
import "../customcss/onlinejoin.css"
const Onlineclass = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleJoin = () => {
    navigate(`/join-room/${value}`);
  };

  return (
    <>
      <div
        className="online-class-container"
      >
        <Afterloginusernav />

        <div
          className="class-join-container"
        >
          <label htmlFor="" className="join-label">
            Below the link for join the class
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="join-input"
          />
          <button
            type="submit"
            onClick={handleJoin}
            className="join-button"
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
