import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../image/first.jpg";
import Insnav from "../navbar/Insnav";
import Foot from "../footer/Foot";
import "../customcss/form2.css";
import { toast, ToastContainer } from "react-toastify";


const AfterloginHomeins = () => {
  const queParams = new URLSearchParams(document.location.search);
  const [allsub, setAllsub] = useState([]);
  const navigate = useNavigate();
  const nameIns = queParams.get("name");
  const userId = queParams.get("id");
  const [prem, setPrem] = useState([]);
  const [post, setPost] = useState({
    subjectname: "",
    about: "",
    Examname: [],
  });
  const [post1, setPost1] = useState({
    name: "",
    about: "",
    price: "",
    insId: userId,
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const handleInput1 = (event) => {
    setPost1({ ...post1, [event.target.name]: event.target.value });
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
        `${process.env.REACT_APP_API_URL}/api/instructor/addclass?id=${userId}`,
        post,
        config
      );
      toast.success("Added succesfully");
    } catch (error) {
      console.log("Error from the Instructor module added time" + error);
    }
  };
  const submitModule1 = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/instructor/addclass-premium`,
        post1,
        config
      );
      toast.success("Added succesfully");
    } catch (error) {
      console.log("Error from the Instructor module added time" + error);
    }
  };
  const fetchPrem = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/instructor/get-premium/?id=${userId}`
      );
      setPrem(res.data.data);
    } catch (error) {
      console.log("Error" + error);
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
          `${process.env.REACT_APP_API_URL}/api/instructor/get-class-admin?userId=${userId}`,
          config
        );
        setAllsub(response.data.data);
      } catch (error) {
        console.log("Error from the admin getting data" + error);
      }
    };
    fetchData();
    fetchPrem();
  }, []);
  return (
    <>
    <div className="Headinstructorlogin">
      <Insnav />
      <ToastContainer />
      <div style={{ marginTop: "10rem" }} className="AllCARDIV">
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

        <h3  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2.5rem",
          marginTop: "2rem",
        }}>Normal Course</h3>


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

        <h3  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2.5rem",
          marginTop: "2rem",
        }}>Premium Course</h3>
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
                  <h2>Status : {JSON.stringify(val.isPremium)}</h2>
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
                        navigate(
                          `/upload-video?name=${val.name}&id=${userId}&cid=${val._id}`
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





      <div
        class="sec"
        style={{ display: "flex", justifyContent: "center",  }}
      >

      
        <div
          class="contentBoxes"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div class="formBx" >
            <h2 style={{ fontSize: "2rem" }}>Add Subject here</h2>
            <form action="" onSubmit={submitModule} >
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




        <div
          class="contentBoxes"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div class="formBx">
            <h2 style={{ fontSize: "2rem" }}>Add Premium course</h2>
            <form action="" onSubmit={submitModule1}>
              <div class="inputBoxes">
                <span>Enter the subject name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter the subject name"
                  onChange={handleInput1}
                />
              </div>

              <div class="inputBoxes">
                <span>About the subject</span>
                <input
                  type="text"
                  name="about"
                  placeholder="Enter about the subject"
                  onChange={handleInput1}
                />
              </div>
              <div class="inputBoxes">
                <span>Enter the Price</span>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter Course Price"
                  onChange={handleInput1}
                />
              </div>

              <div class="inputBoxes">
                <input type="submit" value="submit" />
              </div>
            </form>
          </div>
        </div>



      </div>




      
    </div>
    <Foot />
    </>
  );
};

export default AfterloginHomeins;
