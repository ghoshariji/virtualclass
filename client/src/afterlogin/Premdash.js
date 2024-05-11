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
      {/*     <div style={{marginTop:"10rem"}}>
<Afterloginusernav/>
      <h1>Hello student</h1>
      <div className="module-container">
        <div
          className="module-box container-first"
          onClick={() => navigate(`/go-to-module/?id=${id}`)}
        >
          Module
        </div>
      </div>
     
  </div>*/}

      <div className="containerHead">
        <div className="cardDida">
          <Afterloginusernav />
          <div className="iconDida">
            {/* Use React.Fragment or a div if you need a wrapper */}
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
