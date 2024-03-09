import React from 'react'
import {useNavigate} from "react-router-dom"
import Afternavabr from './Afternavabr'

const AfterLoginAdmin = () => {
  const navigate = useNavigate()
  const classone = "one"
  const classtwo = "two"
  const classthree = "three"
  const classfour = "four"
  const classfive = "five"
  const classsix = "six"
  const classseven = "seven"
  const classeight = "eight"
  const classnine = "nine"
  const classten = "ten"
  const params = new URLSearchParams(document.location.search)
  return (
    <div>
      <Afternavabr />
      <div className="container-admin">
      <h1>Hello from admin {params.get("name")}</h1>
      <h3>Below the Classes for put the question and study module</h3>
      <div className="button-admin-first">
      <button onClick={()=>navigate(`/setquestion?class=${classone}`)}>Class One</button>
      <button onClick={()=>navigate(`/setquestion?class=${classtwo}`)}>Class Two</button>
      <button onClick={()=>navigate(`/setquestion?class=${classthree}`)}>Class Three</button>
      <button onClick={()=>navigate(`/setquestion?class=${classfour}`)}>Class Four</button>
      <button onClick={()=>navigate(`/setquestion?class=${classfive}`)}>Class Five</button>
      <button onClick={()=>navigate(`/setquestion?class=${classsix}`)}>Class Six</button>
      <button onClick={()=>navigate(`/setquestion?class=${classseven}`)}>Class Seven</button>
      <button onClick={()=>navigate(`/setquestion?class=${classeight}`)}>Class Eight</button>
      <button onClick={()=>navigate(`/setquestion?class=${classnine}`)}>Class Nine</button>
      <button onClick={()=>navigate(`/setquestion?class=${classten}`)}>Class Ten</button>
      </div>
      </div>
    </div>
  )
}

export default AfterLoginAdmin
