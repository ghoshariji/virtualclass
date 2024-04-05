import React, { useEffect, useState } from "react";
import axios from "axios";
import Adminnavbar from "../navbar/Adminnavbar";
import Foot from "../footer/Foot";
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
        "http://localhost:7000/api/chat/save-chat-admin",
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
        `http://localhost:7000/api/chat/get-chat-admin/?id=${id}`
      );
      setData(response.data.chat);
      console.log(response.data.data);
      console.log(response.data.chat);
    } catch (error) {
      console.log("Error from the admin get chat data " + error);
    }
  };
  useEffect(() => {
    getChat();
  }, []);
  return (
    <>
      <Adminnavbar />
      <div style={{ marginTop: "11rem", maxWidth: "600px", margin: "0 auto" }}>
        <div
          style={{
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
                    textAlign: val.admin ? "right" : "left",
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
                    {val.admin ? `Admin: ${val.admin}` : `User: ${val.user}`}
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
