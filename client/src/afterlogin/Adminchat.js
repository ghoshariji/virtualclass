import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Adminnavbar from "../navbar/Adminnavbar";
import Foot from "../footer/Foot";
const Adminchat = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  const name = params.get("name");
  const getAllChat = async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/chat/get-allchat-admin"
      );
      setData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error from the get all chat" + error);
    }
  };
  useEffect(() => {
    getAllChat();
  }, []);
  return (
    <div style={{ backgroundColor:'#b5f1f5'}}>
    <Adminnavbar />
    <div
      style={{
        marginTop: "10rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {data.map((val, ind) => (
        <div
          key={ind}
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            border: "2px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f8f9fa",
            width:'50%',
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Student name : {val.name}
          </p>
          <button
            onClick={() =>
              navigate(`/adminmesg/?id=${id}&userId=${val.id}`)
            }
            style={{
              padding: "0.7rem 1.5rem",
              borderRadius: "8px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
          Go to chat
          </button>
        </div>
      ))}
    </div>
    <Foot />
  </div>
  );
};

export default Adminchat;
