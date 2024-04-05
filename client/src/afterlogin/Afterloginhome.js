import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import first from "../image/a.jpeg";
import Foot from "../footer/Foot";
import axios from "axios";
import "../customcss/Card.css";
import img from "../image/first.jpg";
import Afterloginusernav from "../navbar/Afterloginusernav";

const Afterloginhome = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const params = new URLSearchParams(document.location.search);
  const userID = params.get("id");  
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };  
      try {
        const response = await axios.get(
          "https://virtualclass-yz7w.onrender.com/api/user/get-module",
          config
        );
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.log("Error from the userhome fetching data" + error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
   
      <Afterloginusernav />
      <div className="moduleUser" style={{marginTop:"10rem", background:"linear-gradient(45deg, #00bcd4, #ffeb3b)"}}>
        <div
          className="container-home-ins"
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((val, ind) => {
            return (
              <div class="card-container" key={ind}>
                <div
                  class="card"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div class="imgBx">
                    <img className="img9832" src={img} alt="" />
                  </div>
                  <div class="content">
                    <h2 className="head9832">
                      {" "}
                      <i> Subject Name : {val.subjectname}</i>
                    </h2>
                    <p
                      className="p1"
                      style={{ fontSize: "11px", color: "red" }}
                    >
                      About : {val.about}
                    </p>
                    <button
                      onClick={() =>
                        navigate(`/dynamicdashboard?data=${val.subjectname}`)
                      }
                    >
                      Go to Module
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


    
      </div>
      <Foot />
    </>
  );
};

export default Afterloginhome;
