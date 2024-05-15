import axios from "axios";
import React, { useEffect, useState } from "react";
import "../customcss/premodule.css";
import Afterloginusernav from "../navbar/Afterloginusernav";
import Foot from "../footer/Foot";

const Premmodule = () => {
  const param = new URLSearchParams(document.location.search);
  const id = param.get("id");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/instructor/get-prem-course-data/?id=${id}`
      );
      setData(res.data.courseDetail);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  const takeClass = (val) => {
    window.open(`${process.env.REACT_APP_API_URL}/upload-video/${val}`);
  };
  return (
    <>
      <div className="HeadMaka">
        <Afterloginusernav></Afterloginusernav>
        {data.map((val, ind) => {
          return (
            <div>
              <div className="containerMaka">
                <div className="cardMaka">
                  <div className="circleMaka">
                    <h2>eLearning</h2>
                  </div>
                  <div className="contentMaka" key={ind}>
                    <p>{val.name}</p>
                    <p>{val.description}</p>
                    <button onClick={() => takeClass(val.video)}>
                      Take Class{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Foot></Foot>
    </>
  );
};

export default Premmodule;
