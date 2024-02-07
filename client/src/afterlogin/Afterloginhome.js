import React from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import first from "../image/a.jpeg"
import Foot from "../footer/Foot";
const Afterloginhome = () => {
    const navigate = useNavigate();
  return (
    <div>
    <Navbar />
    <div class="container text-center">
      <div class="row g-2" style={{marginTop:"2rem"}}>
      <div class="col-6">
          <div class="p-3" id="container-class" style={{backgroundImage:`URL(${first})`}}>
            <h1 id="className">Class 1</h1>
            <p>The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.</p>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/sigup")} id="btnModule">Go to module</button>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3" id="container-class" style={{backgroundImage:`URL(${first})`}}>
            <h1 id="className">Class 2</h1>
            <p>The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.</p>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/sigup")} id="btnModule">Go to module</button>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3" id="container-class" style={{backgroundImage:`URL(${first})`}}>
            <h1 id="className">Class 3</h1>
            <p>The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.</p>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/sigup")} id="btnModule">Go to module</button>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3" id="container-class" style={{backgroundImage:`URL(${first})`}}>
            <h1 id="className">Class 4</h1>
            <p>The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.</p>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/sigup")} id="btnModule">Go to module</button>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3" id="container-class" style={{backgroundImage:`URL(${first})`}}>
            <h1 id="className">Class 5</h1>
            <p>The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.</p>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/sigup")} id="btnModule">Go to module</button>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3" id="container-class" style={{backgroundImage:`URL(${first})`}}>
            <h1 id="className">Class 6</h1>
            <p>The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.</p>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/sigup")} id="btnModule">Go to module</button>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3" id="container-class" style={{backgroundImage:`URL(${first})`}}>
            <h1 id="className">Class 7</h1>
            <p>The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.</p>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/sigup")} id="btnModule">Go to module</button>
          </div>
        </div> <div class="col-6">
          <div class="p-3" id="container-class" style={{backgroundImage:`URL(${first})`}}>
            <h1 id="className">Class 8</h1>
            <p>The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.</p>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/sigup")} id="btnModule">Go to module</button>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3" id="container-class" style={{backgroundImage:`URL(${first})`}}>
            <h1 id="className">Class 9</h1>
            <p>The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.</p>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/sigup")} id="btnModule">Go to module</button>
          </div>
        </div> <div class="col-6">
          <div class="p-3" id="container-class" style={{backgroundImage:`URL(${first})`}}>
            <h1 id="className">Class 10</h1>
            <p>The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.</p>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/sigup")} id="btnModule">Go to module</button>
          </div>
        </div>
       
      </div>
    </div>
    <Foot />
  </div>
  )
}

export default Afterloginhome;
