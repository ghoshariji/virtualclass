import React from "react";
import Afterloginusernav from "../navbar/Afterloginusernav";
import { useNavigate } from "react-router-dom";
const Premdash = () => {
  const navigate = useNavigate();
  const param = new URLSearchParams(document.location.search);
  const id = param.get("id");
  return (
    <div>
      <div style={{ marginTop: "10rem" }}>
        <Afterloginusernav />
        <h1>Hello student</h1>
        <div className="module-container">
          <div
            className="module-box container-first"
            onClick={() => navigate(`/go-to-module/?id=${id}`)}
          >
            Module
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premdash;
