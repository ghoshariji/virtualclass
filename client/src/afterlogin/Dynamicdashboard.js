import React from "react";
import Afternavabr from "./Afternavabr";
import { useNavigate } from "react-router-dom";
import Finalnavbar from "../navbar/Finalnavbar";

const Dynamicdashboard = () => {
  const queParams = new URLSearchParams(document.location.search);
  const classValue = queParams.get("data");
  const navigate = useNavigate();
  const moduleHandle = () => {

  };
  return (
    <div style={{marginTop:"10rem", background:"linear-gradient(45deg, #00bcd4, #ffeb3b)"}}>
      <Finalnavbar />
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
  );
};

export default Dynamicdashboard;
