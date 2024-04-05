import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Foot from "../footer/Foot";
import Navbar from "../navbar/Navbar";
const Adminchat = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  const name = params.get("name");
  const getAllChat = async () => {
    try {
      const response = await axios.get(
        "https://virtualclass-yz7w.onrender.com/api/chat/get-chat-admin"
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
    <>
      <Navbar />
      <div style={{ marginTop: "10rem", backgroundColor: "#b5f1f5" }}>
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
                width: "50%",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                Student name : {val.name}
              </p>
              <button
                onClick={() =>
                  navigate(`/chat-with-user-by-id/?userId=${val.id}`)
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
    </>
  );
};

export default Adminchat;
