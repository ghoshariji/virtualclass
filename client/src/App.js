
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import "./customcss/custom.css"
import Contact from './pages/Contact';
import Afterloginhome from './afterlogin/Afterloginhome';
import Onlineclass from './afterlogin/Onlineclass';
import AfterLoginAdmin from './afterlogin/AfterLoginAdmin';
import Chat from './component/Chat';
import Dynamicmodule from './afterlogin/Dynamicmodule';
import Instructorhome from './Instructor/Instructorhome';
import AfterloginHomeins from './Instructor/AfterloginHomeins';
import Addexamins from './Instructor/Addexamins';
import Addques from './Instructor/Addques';
import Dynamicmod from './afterlogin/Dynamicmod';
import Dynamicdashboard from './afterlogin/Dynamicdashboard';
import Dynamicexamdash from './afterlogin/Dynamicexamdash';
import Dynamicexamwrite from './afterlogin/Dynamicexamwrite';
import Otppage from './afterlogin/Otppage';
import Changepass from './afterlogin/Changepass';
import Enteremail from './afterlogin/Enteremail';
import Chatuser from './afterlogin/Chatuser';
import Adminmesg from './afterlogin/Adminmesg';
import Adminchat from './afterlogin/Adminchat';
import Room from './afterlogin/Room';
import { useEffect, useState } from 'react';
import Profile from './afterlogin/Profile';
import Paymentdone from './afterlogin/Paymentdone';
import Addvideo from './Instructor/Addvideo';
import Premdash from './afterlogin/Premdash';
import Premmodule from './afterlogin/Premmodule';
import Beforehome from './pages/Beforehome';




function App() {
  const [auth,setAuth] = useState("")
  const [authIns,setAuthIns] =useState("")
  const fetchLogin = async() =>{
    const token = await localStorage.getItem("token");
    setAuth(token)
  }
  const fetchIns = async() =>{
    const token = await localStorage.getItem("instoken");
    setAuthIns(token)
  }
  
  useEffect(()=>{
    fetchLogin()
    fetchIns()
   },[])
  return (
  <Routes>
    <Route path="/" element={<Login/>}  exact/>
    <Route path="/home" element={auth == null ? <Login/> :  <Home/>}/>
    <Route path="/login-home" element={<Beforehome/>}/>
    <Route path="/contact" element={auth == null ? <Login/> :  <Contact/>} />
    <Route path="/about" element={auth == null ? <Login/> :  <About/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/afterlogin" element={auth == null ? <Login/> :  <Afterloginhome/>} />
    <Route path="/onlineclass" element={auth == null ? <Login/> :  <Onlineclass/>} />
    <Route path="/afteradmin" element={ auth == null ? <Login/> : <AfterLoginAdmin/>} />
    <Route path="/chat" element={<Chat/>} />
    <Route path="/gotomodule" element={<Dynamicmodule/>} />
    <Route path="/instructorhome" element={<Instructorhome/>} />
    <Route path="/afterloginins" element={authIns==null ? <Instructorhome/> :<AfterloginHomeins/>} />
    <Route path="/addexamins" element={authIns==null ? <Instructorhome/> : <Addexamins/>} />
    <Route path="/addquesins" element={authIns==null ? <Instructorhome/> : <Addques/>} />
    <Route path="/gotomoduledy" element={auth==null ? <Login/> : <Dynamicmod/>} />
    <Route path="/dynamicdashboard" element={auth == null ? <Login/> :  <Dynamicdashboard/>} />
    <Route path="/dynamicexamdash" element={auth == null ? <Login/> :  <Dynamicexamdash/>} />
    <Route path="/dynamicexamwrite" element={auth == null ? <Login/> :  <Dynamicexamwrite/>} />
    <Route path="/otpverification" element={<Otppage/>} />
    <Route path="/changepass" element={<Changepass/>} />
    <Route path="/enteremail" element={<Enteremail/>} />
    <Route path="/chat-with-admin" element={auth == null ? <Login/> :  <Chatuser/>} />
    <Route path="/chat-with-user-by-id" element={auth == null ? <Login/> :<Adminmesg/>} />
    <Route path="/chat-with-user" element={auth == null ? <Login/> :<Adminchat/>} />
    <Route path="/join-room/:roomID" element={<Room/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/verify" element={<Paymentdone/>} />
    <Route path="/upload-video" element={authIns == null ? <Login/> : <Addvideo/>} />
    <Route path="/dashboard" element={auth == null ? <Login/> : <Premdash/>} />
    <Route path="/go-to-module" element={auth == null ? <Login/> : <Premmodule/>} />
  </Routes>

  );
}

export default App;
