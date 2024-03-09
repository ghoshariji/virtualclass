import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Afternavabr from "./Afternavabr";

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
          "http://localhost:7000/api/module/one",
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
    <div>
      <Afternavabr />
      <h1>Hello {className}</h1>
      {data.map((val, ind) => {
        return (
          <div
            key={ind}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Subject Name is : {val.name}</h5>
                <p class="card-text">Author is : {val.author}</p>
                <img src={val.img} alt="" />
                <a href={val.img} class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dynamicmodule;
