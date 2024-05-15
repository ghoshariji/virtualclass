import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Foot from "../footer/Foot";
import axios from "axios";
import "../customcss/Card.css";
import Afterloginusernav from "../navbar/Afterloginusernav";
import img1 from "../image/virtualcard.webp";
import "../customcss/virtualCard.css";

const Afterloginhome = () => {
  const [data, setData] = useState([]);
  // const [dataPre, setDataPre] = useState([]);
  const navigate = useNavigate();
  const params = new URLSearchParams(document.location.search);
  const userID = params.get("id");
  const [prem, setPrem] = useState([]);
  const [id, setId] = useState("");
  const [courseId, setCourseId] = useState([]);
  const fetchData = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/get-module`,
        config
      );
      // console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log("Error from the userhome fetching data" + error);
    }
  };
  const fetchPremuim = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/get-course-user/?id=${id}`
      );
      setPrem(res.data.courses);
    } catch (error) {
      console.log("Error from the error" + error);
    }
  };
  useEffect(() => {
    // fetchPremium()
    const id = localStorage.getItem("id");
    const courseId = localStorage.getItem("course");
    // setId(id)
    setCourseId(courseId);
    fetchData();
    fetchPremuim(id);
  }, []);
  return (
    <div className="moduleUser">
      <Afterloginusernav />
      <div
        style={{
          marginTop: "8.5rem",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "28px"}}>
          premium courses
        </h1>
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
              <div className="containerMaa" key={ind}>
                <input
                  type="checkbox"
                  id="switch"
                  style={{ display: "none" }}
                />
                <div className="outer">
                  <div className="contentMaa">
                    <label htmlFor="switch">
                      <span className="toggle">
                        <span className="circle"></span>
                      </span>
                    </label>

                    <div className="image-boxMaa">
                      <img src={img1} alt="" />
                    </div>
                    <div className="details">
                      <div className="name"> Subject Name: {val.name}</div>
                      <p>About:{val.about}</p>
                      <button
                        onClick={() => navigate(`/dashboard/?id=${val._id}`)}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          marginTop: "9rem",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "26px" }}>
         Free courses available on YouTube
        </h1>
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
              <div className="containerMaa" key={ind}>
                <input
                  type="checkbox"
                  id="switch"
                  style={{ display: "none" }}
                />
                <div className="outer">
                  <div className="contentMaa">
                    <label htmlFor="switch">
                      <span className="toggle">
                        <span className="circle"></span>
                      </span>
                    </label>
                    <div className="image-boxMaa">
                      <img src={img1} alt="" />
                    </div>
                    <div className="details">
                      <div className="name">
                        {" "}
                        Subject Name: {val.subjectname}
                      </div>
                      <p>About:{val.about}</p>
                      <button
                        onClick={() =>
                          navigate(`/dynamicdashboard?data=${val.subjectname}`)
                        }
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Foot />
    </div>
  );
};

export default Afterloginhome;
