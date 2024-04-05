import React, { useEffect, useState } from "react";
import axios from "axios";
import Foot from "../footer/Foot";
import Navbar from "../navbar/Navbar";
const Adminmesg = () => {
  const params = new URLSearchParams(document.location.search);
  const id1 = params.get("id");
  const id = params.get("userId");
  const [data, setData] = useState([]);
  const [message, setMesg] = useState("");

  const sendMesg = async (event) => {
    event.preventDefault()
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "https://virtualclass-yz7w.onrender.com/api/chat/save-chat-admin",
        { message, id },
        config
      );
      getChat();
      setMesg("");
    } catch (error) {
      console.log("Error from the save chat admin" + error);
    }
  };
  const getChat = async () => {
    try {
      const response = await axios.get(
        `https://virtualclass-yz7w.onrender.com/api/chat/get-chat-id-admin/?id=${id}`
      );
      setData(response.data.data);
    } catch (error) {
      console.log("Error from the admin get chat data " + error);
    }
  };
  useEffect(() => {
    getChat();
  }, []);
  return (
    <>
      <Navbar/>
      <div style={{ marginTop: "11rem", maxWidth: "600px", margin: "0 auto" }}>
        <div
          style={{
            marginTop: "10rem", 
            maxHeight: "70vh",
            overflowY: "scroll",
            padding: "1rem",
            backgroundColor: "#f4f4f4",
            borderRadius: "8px",
          }}
        >
          {data &&
            data.map((val, ind) => {
              return (
                <div
                  key={ind}
                  style={{
                    textAlign: val.mesgadmin ? "right" : "left",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      padding: "0.5rem",
                      borderRadius: "8px",
                      backgroundColor: val.admin ? "#ff9800" : "#2196f3",
                      color: "white",
                      display: "inline-block",
                      maxWidth: "70%",
                      fontSize: "12px",
                    }}
                  >
                    {val.mesgadmin ? `Me: ${val.mesgadmin}` : `User: ${val.mesguser}`}
                  </span>
                </div>
              );
            })}
        </div>
        <div style={{ marginTop: "1rem" }}>
          <form
            onSubmit={sendMesg}
            style={{ display: "flex", padding: "2rem" }}
          >
            <div style={{ display: "flex" }}>
              <input
                type="text"
                onChange={(e) => setMesg(e.target.value)}
                value={message}
                style={{
                  flex: "1",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  marginRight: "0.5rem",
                  width: "75%",
                }}
                placeholder="Type your message here..."
              />
              <button
                type="submit"
                style={{
                  padding: "0.5rem",
                  borderRadius: "8px",
                  backgroundColor: "#4caf50",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  width: "25%",
                  fontSize: "2rem",
                }}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Adminmesg;
