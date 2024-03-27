import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Afternavabr from "./Afternavabr";
import "../customcss/Card.css"

 import img from "../image/first.jpg"
import Finalnavbar from "../navbar/Finalnavbar";

const Dynamicmodule = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const className = query.get("class");
  const config = {
    "Content-type": "application/json",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/module/${className}`,
          config
        );
        const data = response.data;
        setData(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    <div style={{marginTop:"10rem", background:"linear-gradient(45deg, #00bcd4, #ffeb3b)"}}>
    <Finalnavbar /> 
    <h1>Hello {className}</h1>
    <div className="body-main-card">
     
     
      {data.map((val, ind) => {
        return (


         



          <div class="card-container" key={ind}>
          <div class="card">
            <div class="imgBx">
              <img className="img9832" src={img} alt="" />
            </div>
            <div class="content">
              <h2 className="head9832"> <i> Subject Name : {val.name}</i></h2>
              <p className="p1" style={{ fontSize: '11px', color: 'red' }}>Teacher Name : {val.name}</p>

              <a href={val.img} class="button12">Go Here</a>
            </div>
          </div>
        </div>



        );
      })}

      
    </div>
    </div>
    </>
  );
};

export default Dynamicmodule;
       


              