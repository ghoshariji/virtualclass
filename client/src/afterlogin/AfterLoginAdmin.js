import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Foot from "../footer/Foot";
import { toast, ToastContainer } from "react-toastify";
import "../customcss/afterloginadmin.css";

const AfterLoginAdmin = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const params = new URLSearchParams(document.location.search);
  const [prem, setPrem] = useState([]);
  const makeIns = async (email) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/admin/makeins/?email=${email}`
      );
      toast.success("Updated");
    } catch (error) {
      //console.log("Error from true false time");
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
        `${process.env.REACT_APP_API_URL}/api/admin/removins/?email=${email}`
      );
      toast.success("Updated");
    } catch (error) {
      //console.log("Error from true false time");
    }
  };
  const fetchPremuicourse = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/instructor/get-course-admin`
      );
      setPrem(res.data.data);
    } catch (error) {
      console.log("Error from the error" + error);
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
          `${process.env.REACT_APP_API_URL}/api/admin/get-ins-details`,
          config
        );
        setData(response.data.data);
      } catch (error) {
        console.log("Error from the admin fetch data in instructor" + error);
      }
    };
    fetchdata();
    fetchPremuicourse();
  }, []);
  const makePremium = async (id) => {
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/instructor/update-course/?id=${id}`
      );
      toast.success("Updated succesfully");
      fetchPremuicourse();
    } catch (error) {
      console.log("Error" + error);
    }
  };
  return (
    <>
      <div className="containerMamiHead">
        <Navbar />
        <ToastContainer />
        <div style={{ marginTop: "10rem" }}>
          <h1 style={{ fontSize: "2rem" }}>
            Hello admin : {localStorage.getItem("name")}
          </h1>

          <div className="containerMami">
            {prem.map((val, ind) => {
              return (
                <div className="boxMami" key={ind}>
                  <h3>eLearning</h3>
                  <p>Name: {val.name}</p>
                  <p>Price:{val.price}</p>
                  <p>About:{val.about}</p>
                  <p>Status:{JSON.stringify(val.isPremium)}</p>
                  <button onClick={() => makePremium(val._id)}>
                    Make Premium
                  </button>
                  <button onClick={() => makePremium(val._id)}>
                    Make Premium
                  </button>
                  <span className="count">VC</span>
                </div>
              );
            })}
          </div>

          <h2 style={{ fontWeight: "900", textAlign: "center" }}>
            Below all the List Who have applied for the Become a Instructor
          </h2>

          <div className="containerMami">
            {data.map((val, ind) => {
              return (
                <div className="boxMami" key={ind}>
                  <h3>eLearning</h3>
                  <p>Name: {val.email}</p>
                  <p> isInstructor : {JSON.stringify(val.isInstructor)}</p>
                  <button onClick={() => makeIns(val.email)}>
                    Make Instructor
                  </button>

                  <button onClick={() => removIns(val.email)}>
                    Remove Instructor
                  </button>
                  <span className="count">VC</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default AfterLoginAdmin;
