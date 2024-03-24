import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Afternavabr from "./Afternavabr";
import axios from "axios";

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
    <div>
      <Afternavabr />
      <div className="container-admin">
        <h1>Hello from admin {params.get("name")}</h1>
        <h3>Below the Classes for put the question and study module</h3>
        <div className="button-admin-first">
          <button onClick={() => navigate(`/addexam?class=${classone}`)}>
            Class One
          </button>
          <button onClick={() => navigate(`/addexam?class=${classtwo}`)}>
            Class Two
          </button>
          <button onClick={() => navigate(`/setquestion?class=${classthree}`)}>
            Class Three
          </button>
          <button onClick={() => navigate(`/setquestion?class=${classfour}`)}>
            Class Four
          </button>
          <button onClick={() => navigate(`/setquestion?class=${classfive}`)}>
            Class Five
          </button>
          <button onClick={() => navigate(`/setquestion?class=${classsix}`)}>
            Class Six
          </button>
          <button onClick={() => navigate(`/setquestion?class=${classseven}`)}>
            Class Seven
          </button>
          <button onClick={() => navigate(`/setquestion?class=${classeight}`)}>
            Class Eight
          </button>
          <button onClick={() => navigate(`/setquestion?class=${classnine}`)}>
            Class Nine
          </button>
          <button onClick={() => navigate(`/setquestion?class=${classten}`)}>
            Class Ten
          </button>
        </div>
        {data.map((val, ind) => {
          return (
            <div key={ind}>
              <p>{val.email}</p>
              <p> isInstructor : {JSON.stringify(val.isInstructor)}</p>
              <button onClick={() => makeIns(val.email)}>
                Make instructor
              </button>
              <button onClick={() => removIns(val.email)}>
                Remove instructor
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AfterLoginAdmin;
