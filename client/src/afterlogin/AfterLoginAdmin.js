import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Foot from "../footer/Foot";
import { toast, ToastContainer } from "react-toastify";

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
      <Navbar />
      <ToastContainer />
      <div style={{ marginTop: "10rem" }}>
        <div>
          {prem.map((val, ind) => {
            return (
              <div key={ind}>
                <p>name:{val.name}</p>
                <p>price:{val.price}</p>
                <p>about:{val.about}</p>
                <p>Status:{JSON.stringify(val.isPremium)}</p>
                <button onClick={() => makePremium(val._id)}>
                  Make premium
                </button>
              </div>
            );
          })}
        </div>
        <div className="container-admin">
          <h1 style={{ fontSize: "2rem" }}>
            Hello admin : {params.get("name")}
          </h1>
          <h2 style={{ fontWeight: "900" }}>
            Below all the List Who have applied for the Become a Instructor
          </h2>
          {data.map((val, ind) => {
            return (
              <div
                key={ind}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1rem",
                }}
              >
                <p style={{ fontSize: "2rem" }}>{val.email}</p>
                <p style={{ fontSize: "2rem" }}>
                  {" "}
                  isInstructor : {JSON.stringify(val.isInstructor)}
                </p>
                <div style={{ alignItems: "center" }}>
                  <button
                    onClick={() => makeIns(val.email)}
                    style={{ display: "grid", gap: "2px", fontSize: "15px" }}
                  >
                    Make instructor
                  </button>
                  <button
                    onClick={() => removIns(val.email)}
                    style={{ display: "grid", gap: "2px", fontSize: "15px" }}
                  >
                    Remove instructor
                  </button>
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

export default AfterLoginAdmin;
