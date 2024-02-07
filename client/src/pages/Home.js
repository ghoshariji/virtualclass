import React from "react";
import Navbar from "../navbar/Navbar";
import Foot from "../footer/Foot";
import img from "../image/apj1.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="container text-center"
        style={{
          marginTop: "4rem",
          marginBottom: "4rem",
          minHeight: "70vh",
          backgroundColor: "#f8f9fa", // Set background color
          padding: "2rem",
          borderRadius: "10px", // Add some border-radius
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#007bff" }}>
            <strong>Education is the most powerful weapon you can use to change the world.</strong>
          </h1>
        </div>
        <img src={img} alt="" style={{ height: "20vh", width: "20rem", borderRadius: "10px" }} />
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="p-3 border bg-light">
              <h3>First Section</h3>
              <p>Some content here...</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="p-3 border bg-light">
              <h3>Second Section</h3>
              <p>Some content here...</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="p-3 border bg-light">
              <h3>Third Section</h3>
              <p>Some content here...</p>
            </div>
          </div>
        </div>
      </div>

      <Foot />
    </>
  );
};

export default Home;
