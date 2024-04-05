import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../image/first.jpg";
import Insnav from "../navbar/Insnav";
import Foot from "../footer/Foot";
import "../customcss/form2.css";
const AfterloginHomeins = () => {
  const queParams = new URLSearchParams(document.location.search);
  const [allsub, setAllsub] = useState([]);
  const navigate = useNavigate();
  const nameIns = queParams.get("name");
  const userId = queParams.get("id");
  const [post, setPost] = useState({
    subjectname: "",
    about: "",
    Examname: [],
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const submitModule = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `https://virtualclass-yz7w.onrender.com/api/instructor/addclass?id=${userId}`,
        post,
        config
      );
      alert("added successfully");
    } catch (error) {
      console.log("Error from the Instructor module added time" + error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      try {
        const response = await axios.get(
          `https://virtualclass-yz7w.onrender.com/api/instructor/get-class-admin?userId=${userId}`,
          config
        );
        console.log(response.data.data);
        setAllsub(response.data.data);
      } catch (error) {
        console.log("Error from the admin getting data" + error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Insnav />
      <div style={{ marginTop: "10rem" }}>
        <h5
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
          }}
        >
          Hello Instructor : {nameIns}
        </h5>

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
          {allsub.map((val, ind) => {
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
                        navigate(
                          `/addexamins?name=${val.subjectname}&id=${userId}`
                        )
                      }
                    >
                      Change Module
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        </div>
        <section class="sec" style={{ display: "flex", justifyContent: "center" }}>

          <div class="contentBoxes" style={{ display: "flex", justifyContent: "center" }}>
            <div class="formBx">
              <h2 style={{fontSize:'2rem'}}>Add Subject here</h2>
              <form action="" onSubmit={submitModule}>
                <div class="inputBoxes">
                  <span>Enter the subject name</span>
                  <input
                    type="text"
                    name="subjectname"
                    placeholder="Enter the subject name"
                    onChange={handleInput}
                  />
                </div>

                <div class="inputBoxes">
                  <span>About the subject</span>
                  <input
                    type="text"
                    name="about"
                    placeholder="Enter about the subject"
                    onChange={handleInput}
                  />
                </div>

                <div class="inputBoxes">
                  <input type="submit" value="submit" />
                </div>
              </form>
            </div>
          </div>
    </section>
      <Foot />
    </>
  );
};

export default AfterloginHomeins;
