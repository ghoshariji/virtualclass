import React, { useState } from 'react'
import Afternavabr from '../afterlogin/Afternavabr'
import axios from "axios"
import Finalnavbar from '../navbar/Finalnavbar'
const Addques = () => {
    const queParams = new URLSearchParams(document.location.search)
    const examname = queParams.get("examname")
    const subname = queParams.get("subname")
    const id = queParams.get("id")
    const [post,setPost] = useState({
        question:"",
        optionA:"",
        optionB:"",
        optionC:"",
        optionD:"",
        correctAnswer:""
    })
    const submitForm = async(event) =>{
        event.preventDefault();
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        try {
           const response = await axios.post(`http://localhost:7000/api/instructor/add-ques-ins?examname=${examname}&id=${id}&subname=${subname}`,
           post,
           config) 
           alert("Question added")
        } catch (error) {
            console.log("Error from the question page error" + error)
        }
    }
    const handleInput = (event) =>{
        setPost({...post,[event.target.name]:event.target.value})
    }
  return (
    <div>
        <Finalnavbar />
      
      <div className="container-ins" style={{marginTop:"10rem"}}>
      <h1>Add question here</h1>
        <form action="" onSubmit={submitForm}>
            <input type="text" name='question' placeholder='Enter question' onChange={handleInput} />
            <input type="text" name='optionA' placeholder='optionA' onChange={handleInput} />
            <input type="text" name='optionB' placeholder='optionB' onChange={handleInput} />
            <input type="text" name='optionC' placeholder='optionC' onChange={handleInput} />
            <input type="text" name='optionD' placeholder='optionD' onChange={handleInput} />
            <input type="text" name='correctAnswer' placeholder='correct answer' onChange={handleInput} />
            <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Addques
