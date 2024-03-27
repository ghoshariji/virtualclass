import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Afternavabr from "./Afternavabr";
import axios from "axios";
import Finalnavbar from "../navbar/Finalnavbar";

const AfterLoginAdmin = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const classone = "one";
  const classtwo = "two";
  const classthree = "three";
  const classfour = "four";
  const classfive = "five";
  const classsix = "six";
  const classseven = "seven";
  const classeight = "eight";
  const classnine = "nine";
  const classten = "ten";
  const params = new URLSearchParams(document.location.search);
  const makeIns = async (email) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `http://localhost:7000/api/admin/makeins/?email=${email}`
      );
      alert("Done");
    } catch (error) {
      console.log("Error from true false time");
    }
  };
  const removIns = async (email) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `http://localhost:7000/api/admin/removins/?email=${email}`
      );
      alert("Done");
    } catch (error) {
      console.log("Error from true false time");
    }
  };
  useEffect(() => {
    const fetchdata = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const response = await axios.get(
          "http://localhost:7000/api/admin/get-ins-details",
          config
        );
        setData(response.data.data);
      } catch (error) {
        console.log("Error from the admin fetch data in instructor" + error);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
    <Finalnavbar />
    <div style={{marginTop:"10rem"}}>
     
      <div className="container-admin">
        <h1 style={{fontSize:"2rem"}}>Hello admin : {params.get("name")}</h1>
        <h2 style={{fontWeight:'900'}}>Below all the List Who have applied for the Become a Instructor</h2>
        {data.map((val, ind) => {
          return (
            <div key={ind} style={{display:"flex",justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'1rem'}}>
              
              <p style={{fontSize:"2rem"}}>{val.email}</p>
              <p style={{fontSize:"2rem"}}> isInstructor : {JSON.stringify(val.isInstructor)}</p>
              <div style={{alignItems:'center'}}>
              <button onClick={() => makeIns(val.email)} style={{display:'grid',gap:'2px',fontSize:'15px'}}>
                Make instructor
              </button>
              <button onClick={() => removIns(val.email)} style={{display:'grid',gap:'2px',fontSize:'15px'}}>
                Remove instructor
              </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default AfterLoginAdmin;
