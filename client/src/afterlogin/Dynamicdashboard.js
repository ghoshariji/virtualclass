import React from "react";
import { useNavigate } from "react-router-dom";
import Afterloginusernav from "../navbar/Afterloginusernav";
import Foot from "../footer/Foot";

const Dynamicdashboard = () => {
  const queParams = new URLSearchParams(document.location.search);
  const classValue = queParams.get("data");
  const navigate = useNavigate();
  const moduleHandle = () => {

  };
  return (
    <>
    <div style={{marginTop:"10rem"}}>
    <Afterloginusernav/>
      <h1>Hello student</h1>
      <div className="module-container">
        <div
          className="module-box container-first"
          onClick={() => navigate(`/gotomoduledy?class=${classValue}`)}
        >
          Module
        </div>
        <div
          className="module-box container-second"
          onClick={() => navigate("/onlineclass")}
        >
          Go to online class
        </div>
        <div className="module-box container-third" onClick={()=>navigate(`/dynamicexamdash?class=${classValue}`)}>
          Go to Exam
        </div>
      </div>
     
    </div>
    <Foot/>
    </>
  );
};

export default Dynamicdashboard;
