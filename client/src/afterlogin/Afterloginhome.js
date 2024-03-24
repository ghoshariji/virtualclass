import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import first from "../image/a.jpeg";
import Foot from "../footer/Foot";
import Afternavabr from "./Afternavabr";
import axios from "axios";

const Afterloginhome = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const params = new URLSearchParams(document.location.search);
  const userID = params.get("id")
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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //       },

  //     };
  //     const response = await axios.get(`http://localhost:7000/api/instructor?userID=${userID}`,
  //     config)
  //   };
  //   fetchData();
  // }, []);
  useEffect(()=>{
    const fetchData = async() =>{
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }
      try {
        const response = await axios.get("http://localhost:7000/api/user/get-module",config)
        console.log(response.data.data)
        setData(response.data.data)
      } catch (error) {
        console.log("Error from the userhome fetching data" + error)
      }

    }
    fetchData()
  },[])
  return (
    <div>
      {/* style={{ position: "relative", zIndex: -1 }} */}
      <Afternavabr />
      <div className="container-home-ins">
        {data.map((val, ind) => {
          return (
            <div key={ind}>
              <p>{val.subjectname}</p>
              <p>{val.about}</p>
              <button onClick={()=>navigate(`/dynamicdashboard?data=${val.subjectname}`)}>Go to Module</button>
            </div>
          );
        })}
      </div>
      <div class="container text-center">
        <div class="row g-2" style={{ marginTop: "2rem" }}>
          <h1>Hello {params.get("name")}</h1>
          <div class="col-6">
            <div
              class="p-3"
              id="container-class"
              style={{ backgroundImage: `URL(${first})` }}
            >
              <h1 id="className">Class 1</h1>
              <p>
                The purpose of learning is growth, and our minds, unlike our
                bodies, can continue growing as we continue to live.
              </p>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => navigate(`/module?data=${classone}`)}
                id="btnModule"
              >
                Go to module
              </button>
            </div>
          </div>
          <div class="col-6">
            <div
              class="p-3"
              id="container-class"
              style={{ backgroundImage: `URL(${first})` }}
            >
              <h1 id="className">Class 2</h1>
              <p>
                The purpose of learning is growth, and our minds, unlike our
                bodies, can continue growing as we continue to live.
              </p>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => navigate(`/module?data=${classtwo}`)}
                id="btnModule"
              >
                Go to module
              </button>
            </div>
          </div>
          <div class="col-6">
            <div
              class="p-3"
              id="container-class"
              style={{ backgroundImage: `URL(${first})` }}
            >
              <h1 id="className">Class 3</h1>
              <p>
                The purpose of learning is growth, and our minds, unlike our
                bodies, can continue growing as we continue to live.
              </p>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => navigate(`/module?data=${classthree}`)}
                id="btnModule"
              >
                Go to module
              </button>
            </div>
          </div>
          <div class="col-6">
            <div
              class="p-3"
              id="container-class"
              style={{ backgroundImage: `URL(${first})` }}
            >
              <h1 id="className">Class 4</h1>
              <p>
                The purpose of learning is growth, and our minds, unlike our
                bodies, can continue growing as we continue to live.
              </p>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => navigate(`/module?data=${classfour}`)}
                id="btnModule"
              >
                Go to module
              </button>
            </div>
          </div>
          <div class="col-6">
            <div
              class="p-3"
              id="container-class"
              style={{ backgroundImage: `URL(${first})` }}
            >
              <h1 id="className">Class 5</h1>
              <p>
                The purpose of learning is growth, and our minds, unlike our
                bodies, can continue growing as we continue to live.
              </p>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => navigate(`/module?data=${classfive}`)}
                id="btnModule"
              >
                Go to module
              </button>
            </div>
          </div>
          <div class="col-6">
            <div
              class="p-3"
              id="container-class"
              style={{ backgroundImage: `URL(${first})` }}
            >
              <h1 id="className">Class 6</h1>
              <p>
                The purpose of learning is growth, and our minds, unlike our
                bodies, can continue growing as we continue to live.
              </p>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => navigate(`/module?data=${classsix}`)}
                id="btnModule"
              >
                Go to module
              </button>
            </div>
          </div>
          <div class="col-6">
            <div
              class="p-3"
              id="container-class"
              style={{ backgroundImage: `URL(${first})` }}
            >
              <h1 id="className">Class 7</h1>
              <p>
                The purpose of learning is growth, and our minds, unlike our
                bodies, can continue growing as we continue to live.
              </p>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => navigate(`/module?data=${classseven}`)}
                id="btnModule"
              >
                Go to module
              </button>
            </div>
          </div>{" "}
          <div class="col-6">
            <div
              class="p-3"
              id="container-class"
              style={{ backgroundImage: `URL(${first})` }}
            >
              <h1 id="className">Class 8</h1>
              <p>
                The purpose of learning is growth, and our minds, unlike our
                bodies, can continue growing as we continue to live.
              </p>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => navigate(`/module?data=${classeight}`)}
                id="btnModule"
              >
                Go to module
              </button>
            </div>
          </div>
          <div class="col-6">
            <div
              class="p-3"
              id="container-class"
              style={{ backgroundImage: `URL(${first})` }}
            >
              <h1 id="className">Class 9</h1>
              <p>
                The purpose of learning is growth, and our minds, unlike our
                bodies, can continue growing as we continue to live.
              </p>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => navigate(`/module?data=${classnine}`)}
                id="btnModule"
              >
                Go to module
              </button>
            </div>
          </div>{" "}
          <div class="col-6">
            <div
              class="p-3"
              id="container-class"
              style={{ backgroundImage: `URL(${first})` }}
            >
              <h1 id="className">Class 10</h1>
              <p>
                The purpose of learning is growth, and our minds, unlike our
                bodies, can continue growing as we continue to live.
              </p>
              <button
                type="button"
                class="btn btn-warning"
                onClick={() => navigate(`/module?data=${classten}`)}
                id="btnModule"
              >
                Go to module
              </button>
            </div>
          </div>
        </div>
      </div>

      <Foot />
    </div>
  );
};

export default Afterloginhome;
