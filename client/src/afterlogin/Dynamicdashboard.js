import React from "react";
import { useNavigate } from "react-router-dom";
import Afterloginusernav from "../navbar/Afterloginusernav";
import Foot from "../footer/Foot";
import "../customcss/dynamicdashboard.css";

const Dynamicdashboard = () => {
  const queParams = new URLSearchParams(document.location.search);
  const classValue = queParams.get("data");
  const navigate = useNavigate();
  const moduleHandle = () => {};
  return (
    <div className="danamicDashboardHead">
      <div className="containerHead">
        <div className="cardDida">
          <Afterloginusernav />
          <div className="iconDida">
            <ion-icon name="rocket-outline"></ion-icon>
          </div>
          <div className="contentDida">
            <h2>Hello Student</h2>
            <button
              className="btn100"
              onClick={() => navigate(`/gotomoduledy?class=${classValue}`)}
            >
              Module
            </button>
            <button className="btn100" onClick={() => navigate("/onlineclass")}>
              Go to Online Class
            </button>
            <button
              className="btn100"
              onClick={() => navigate(`/dynamicexamdash?class=${classValue}`)}
            >
              Go to Exam
            </button>
          </div>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default Dynamicdashboard;
