
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
  </Routes>

  );
}

export default App;
