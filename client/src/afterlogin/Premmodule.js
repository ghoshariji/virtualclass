import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Premmodule = () => {
    const param = new URLSearchParams(document.location.search);
    const id = param.get("id")
    const [data,setData] = useState([])
    const fetchData = async() =>{
        try {
            const res = await axios.get(`http://localhost:7000/api/instructor/get-prem-course-data/?id=${id}`)
            setData(res.data.courseDetail)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    const takeClass = (val) =>{
        window.open(`http://localhost:7000/upload-video/${val}`)
    }
  return (
    <div>
        {data.map((val,ind)=>{
            return (
                <div key={ind}>
                    <p>{val.name}</p>
                    <p>{val.description}</p>
                    <button onClick={()=>takeClass(val.video)}>Take class</button>
                </div>
            )
        })}
      
    </div>
  )
}

export default Premmodule