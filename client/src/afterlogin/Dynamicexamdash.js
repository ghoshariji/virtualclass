import React, { useEffect, useState } from 'react'
import Afternavabr from './Afternavabr';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import img from "../image/first.jpg";
import Finalnavbar from '../navbar/Finalnavbar';
const Dynamicexamdash = () => {
    const queParams = new URLSearchParams(document.location.search);
    const subname = queParams.get("class")
    const [examlist,setExamlist] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchData = async() =>{
            const config = {
                headers:{
                "Content-type":"application/json"
            }
        }
        try {
            const response = await axios.get(`http://localhost:7000/api/user/get-ques-list?subname=${subname}`)
            console.log(response.data.data)
            setExamlist(response.data.data)
        } catch (error) {
            console.log("Error from the getting examList" + error)
        }

    }
        fetchData()
    },[])
  return (
    <>  <Finalnavbar />
    <div style={{marginTop:"10rem", background:"linear-gradient(45deg, #00bcd4, #ffeb3b)"}}>
      
        <h1>All exam details</h1>
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
        {
        examlist.map((val, ind) => {
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
                    <i> Exam Name : {val.examname}</i>
                  </h2>
                  <p className="p1" style={{ fontSize: "11px", color: "red" }}>
                    Time : {val.time}
                  </p>
                  <button onClick={()=>navigate(`/dynamicexamwrite?ques=${JSON.stringify(val.questionSet)}`)}>Attempt</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
    </>
  )
}

export default Dynamicexamdash
