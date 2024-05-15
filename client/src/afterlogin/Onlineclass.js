import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Afterloginusernav from "../navbar/Afterloginusernav";
import Foot from "../footer/Foot";
import "../customcss/onlinejoin.css";
import img from "../image/Live-Class-Image.png";
const Onlineclass = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleJoin = () => {
    navigate(`/join-room/${value}`);
  };

  return (
    <>
      <div className="main1000">
        <Afterloginusernav />
        <div className="payment-card">
          <div className="image">
            <img src={img} alt="" className="payment-pic" />
          </div>

          <div className="payment-data">
            <h2>Join the Live Class</h2>
          </div>

          <input
            type="text"
            placeholder="Enter your name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="transparent-input"
          />

          <div className="pay-btn">
            <button className="btn100" type="submit" onClick={handleJoin}>
              Join Now
            </button>
          </div>
        </div>
      </div>

      <Foot />
    </>
  );
};

export default Onlineclass;
