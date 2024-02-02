
import './App.css';
import {Routes,Route} from "react-router-dom"
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/login" element={<Signup/>} />
  </Routes>
  );
}

export default App;
