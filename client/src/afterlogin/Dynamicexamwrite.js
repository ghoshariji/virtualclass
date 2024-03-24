import React from 'react'
import Afternavabr from './Afternavabr'

const Dynamicexamwrite = () => {
    const queParams = new URLSearchParams(document.location.search);
    const quesList = JSON.parse(queParams.get("ques"));
    
  return (
    <div>
        <Afternavabr/>
      <h1>Welcome to the exam</h1>
      {
        quesList.map((val,ind)=>{
            return <div key={ind}>
                <p>{val.question}</p>
                <p>{val.optionA}</p>
                <button>Submit</button>
            </div>
        })
      }
    </div>
  )
}

export default Dynamicexamwrite
