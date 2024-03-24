import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Otppage = () => {
  const [data, setData] = useState({});
  const param = new URLSearchParams(document.location.search);
  const [otpuser, setuserotp] = useState("");
  const navigate = useNavigate();
  const email = param.get("email");
  const checkOtp = () => {
    const dataOtp = data.data;
    console.log(dataOtp);
    console.log(otpuser);
    if (dataOtp == otpuser) {
      navigate(`/changepass/?email=${email}`);
      alert("otp match");
      setuserotp("");
    } else {
      setuserotp("");
      console.log("Error otp don't match");
    }
  };
  const fetchData = async () => {
    try {
      console.log(email);
      const response = await axios.get(
        `http://localhost:7000/api/admin/generate-otp?email=${email}`
      );
      setData(response.data);
    } catch (error) {
      console.log("Error " + error);
    }
  };
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
        <button onClick={fetchData} type="submit">
          Get OTP
        </button>
        <p>Check your registered email for getting the otp</p>
        <input
          type="text"
          placeholder="Enter otp"
          onChange={(e) => setuserotp(e.target.value)}
          value={otpuser}
        />
        <button type="submit" onClick={checkOtp}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Otppage;
