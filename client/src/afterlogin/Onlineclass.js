import React, { useState } from "react";
import Foot from "../footer/Foot";
import Afterloginusernav from "../navbar/Afterloginusernav";
import { useNavigate } from "react-router-dom";
const Onlineclass = () => {
  const navigate = useNavigate()
  const [value,setValue] = useState("")
  const handleJoin = () =>{
    navigate(`/join-room?value=${value}`)
  }
  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <Afterloginusernav />

        <div>
          <input type="text" placeholder="Enter name" value={value} onChange={(e)=>setValue(e.target.value)}/>
          <button type="submit" onClick={handleJoin}>Join</button>
        </div>

        <Foot />
      </div>
    </>
  );
};

export default Onlineclass;
