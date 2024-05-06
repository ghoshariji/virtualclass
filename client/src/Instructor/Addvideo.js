import React, { useState } from "react";
import Insnav from "../navbar/Insnav";
import axios from "axios";
const Addvideo = () => {
  const [topicName, setTopicName] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [description, setDescription] = useState("");
  const queParams = new URLSearchParams(document.location.search);
  const id = queParams.get("id");
  const cid = queParams.get("cid");
  const submitHandle = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("topicName", topicName);
    formData.append("videoFile", videoFile);
    formData.append("description", description);

    try {
      const res = await axios.post(
        `http://localhost:7000/api/instructor/upload-video/?id=${id}&cid=${cid}`,
        formData
      );
      console.log("Video uploaded successfully:", res.data);
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  return (
    <div>
      <Insnav />
      <div style={{ marginTop: "10rem" }}>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="Enter the topic name"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
          />
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
          />
          <input
            type="text"
            placeholder="Enter the description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Addvideo;
