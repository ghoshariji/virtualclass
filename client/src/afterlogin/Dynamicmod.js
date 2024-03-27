import React, { useEffect, useState } from "react";
import Afternavabr from "./Afternavabr";
import axios from "axios";
import img from "../image/first.jpg";
import Finalnavbar from "../navbar/Finalnavbar";

const Dynamicmod = () => {
  const [subjects, setSubjects] = useState([]);
  const queParams = new URLSearchParams(document.location.search);
  const className = queParams.get("class");

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const response = await axios.get(
          `http://localhost:7000/api/instructor/get-ques-user?subname=${className}`,
          config
        );
        setSubjects(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log("Error from dynamic data fetch: " + error);
      }
    };
    fetchData();
  }, [className]);

  return (
    <div style={{marginTop:"10rem", background:"linear-gradient(45deg, #00bcd4, #ffeb3b)"}}>
      <Finalnavbar />

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
        {subjects.map((val, ind) => {
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
                  <p className="p1" style={{ fontSize: "11px", color: "red" }}>
                    About : {val.about}
                  </p>
                  <button type="submit">Go to module</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dynamicmod;
