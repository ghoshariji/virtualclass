import React, { useEffect, useState } from 'react'
import Afternavabr from './Afternavabr';
import axios from "axios"
import {useNavigate} from "react-router-dom"

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
    <div>
        <Afternavabr />
      <h1>All exam details</h1>
      {
        examlist.map((val,ind)=>{
            return <div key={ind}>
                <p>{val.examname}</p>
                <p>{val.time}</p>
                <button onClick={()=>navigate(`/dynamicexamwrite?ques=${JSON.stringify(val.questionSet)}`)}>Attempt</button>
            </div>
        })
      }
    </div>
  )
}

export default Dynamicexamdash
