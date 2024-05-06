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
  // const [dataPre, setDataPre] = useState([]);
  const navigate = useNavigate();
  const params = new URLSearchParams(document.location.search);
  const userID = params.get("id");
  const [prem, setPrem] = useState([]);
  const [id, setId] = useState("");
  const [courseId,setCourseId] = useState([])
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
  // const fetchPremium = async() =>{
  //   try {
  //     const response = await axios.get(
  //       `https://virtualclass-yz7w.onrender.com/api/user/get-module-premium/id=${userID}`,
  //     );
  //     console.log(response.data.data);
  //     setDataPre(response.data.data);
  //   } catch (error) {
  //     console.log("Error from the userhome fetching data" + error);
  //   }
  // }
  const fetchPremuim = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:7000/api/user/get-course-user/?id=${id}`
      );
      setPrem(res.data.courses);
    } catch (error) {
      console.log("Error from the error" + error);
    }
  };
  useEffect(() => {

    // fetchPremium()
    const id = localStorage.getItem("id");
    const courseId = localStorage.getItem("course")
    // setId(id)
    setCourseId(courseId)
    fetchData();
    fetchPremuim(id);
   
  }, []);
  return (
    <>
      <Afterloginusernav />
      <div
        style={{
          marginTop: "10rem",
          background: "linear-gradient(45deg, #00bcd4, #ffeb3b)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Your premium couses</h1>
        
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
          {prem.map((val, ind) => {
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
                      <i> Subject Name : {val.name}</i>
                    </h2>
                    <p
                      className="p1"
                      style={{ fontSize: "11px", color: "red" }}
                    >
                      About : {val.about}
                    </p>
                    <button
                    onClick={() =>
                      navigate(`/dashboard/?id=${val._id}`)
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

      <div
        className="moduleUser"
        style={{
          marginTop: "10rem",
          background: "linear-gradient(45deg, #00bcd4, #ffeb3b)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Other courses</h1>
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
