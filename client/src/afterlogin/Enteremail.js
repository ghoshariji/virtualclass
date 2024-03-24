import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Enteremail = () => {
    const navigate = useNavigate()
    const [post,setPost] = useState({
      email:""
    })
    const handleInput = (event) =>{
      setPost({...post,[event.target.name]:event.target.value})
    }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "1rem",
          margin: "1rem",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <p>Enter your email</p>
        <input type="text" placeholder="Enter email" onChange={handleInput} value={post.email} name="email"/>
        <button type="submit" onClick={()=> navigate(`/otpverification?email=${post.email}`)}>Submit</button>
      </div>
    </div>
  );
};

export default Enteremail;
