import React, { useEffect, useState } from "react";
import Afternavabr from "./Afternavabr";
import axios from "axios";

const Dynamicmod = () => {
  const [subjects, setSubjects] = useState([]);
  const queParams = new URLSearchParams(document.location.search);
  const className = queParams.get("class");
  
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }
      try {

        const response = await axios.get(
          `http://localhost:7000/api/instructor/get-ques-user?subname=${className}`,config
        );
        setSubjects(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log("Error from dynamic data fetch: " + error);
      }
    };
    fetchData();
  }, [className]);

  return (
    <div>
      <Afternavabr />
      {subjects.map((subject, index) => (
        <div key={index}>
          <p>Subject Name: {subject.subjectname}</p>
          <p>About: {subject.about}</p>
          {/* You can add more details as needed */}
          <button type="submit">Go to module</button>
        </div>
      ))}
    </div>
  );
};

export default Dynamicmod;
