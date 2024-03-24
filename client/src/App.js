
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import "./customcss/custom.css"

import Contact from './pages/Contact';
import Afterloginhome from './afterlogin/Afterloginhome';
import Module from './afterlogin/Module';
import Giveexam from './afterlogin/Giveexam';
import Onlineclass from './afterlogin/Onlineclass';
import AfterLoginAdmin from './afterlogin/AfterLoginAdmin';
import Chat from './component/Chat';
import Adminquestion from './afterlogin/Adminquestion';
import Dynamicmodule from './afterlogin/Dynamicmodule';
import Addexam from './afterlogin/Addexam';
import Writeexam from './afterlogin/Writeexam';
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


function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} exact/>
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/afterlogin" element={<Afterloginhome/>} />
    <Route path="/module" element={<Module/>} />
    <Route path="/giveexam" element={<Giveexam/>} />
    <Route path="/onlineclass" element={<Onlineclass/>} />
    <Route path="/afteradmin" element={<AfterLoginAdmin/>} />
    <Route path="/chat" element={<Chat/>} />
    <Route path="/setquestion" element={<Adminquestion/>} />
    <Route path="/gotomodule" element={<Dynamicmodule/>} />
    <Route path="/addexam" element={<Addexam/>} />
    <Route path="/writeexam" element={<Writeexam/>} />
    <Route path="/instructorhome" element={<Instructorhome/>} />
    <Route path="/afterloginins" element={<AfterloginHomeins/>} />
    <Route path="/addexamins" element={<Addexamins/>} />
    <Route path="/addquesins" element={<Addques/>} />
    <Route path="/gotomoduledy" element={<Dynamicmod/>} />
    <Route path="/dynamicdashboard" element={<Dynamicdashboard/>} />
    <Route path="/dynamicexamdash" element={<Dynamicexamdash/>} />
    <Route path="/dynamicexamwrite" element={<Dynamicexamwrite/>} />
    <Route path="/otpverification" element={<Otppage/>} />
    <Route path="/changepass" element={<Changepass/>} />
    <Route path="/enteremail" element={<Enteremail/>} />
  </Routes>

  );
}

export default App;
