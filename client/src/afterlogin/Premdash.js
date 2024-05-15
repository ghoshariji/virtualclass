import React from "react";
import Afterloginusernav from "../navbar/Afterloginusernav";
import { useNavigate } from "react-router-dom";
import "../customcss/predash.css";
import Foot from "../footer/Foot";
const Premdash = () => {
  const navigate = useNavigate();
  const param = new URLSearchParams(document.location.search);
  const id = param.get("id");
  return (
    <div>
      <div className="containerHead">
        <div className="cardDida">
          <Afterloginusernav />
          <div className="iconDida">
            <ion-icon name="diamond-outline"></ion-icon>
          </div>
          <div className="contentDida">
            <h2>Hello Student</h2>
            <button className="btn100" onClick={() => navigate(`/go-to-module/?id=${id}`)}>Module</button>
          </div>
        </div>
      </div>
      <Foot></Foot>
    </div>
  );
};

export default Premdash;
