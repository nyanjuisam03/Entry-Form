import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
 function Details() {
const [data,setData]=useState([])
const url="http://localhost:2000/details "


const getData=async()=>{
    const res=await fetch(url)
    const d=await res.json()
    setData(d)
    console.log(d)
}

useEffect(()=>{
    getData();
},[])



const DeleteData=async(id)=>{
try{
  await axios.delete("http://localhost:2000/details/"+id)
  window.location.reload()
}
catch(err){

}

}

  return (
    <div className=' text-center'>
      {data.map((detail)=>(
        <table key={detail.id} className=" table-auto align-middle">
          <thead>
            <tr>
              <td>Full Name</td>
              <td>Age</td>
              <td>Gender</td>
              <td>Phone No</td>
            </tr>
          </thead>
          <tbody>
          <tr>
        <td>{detail.FullName}</td>
        <td>{detail.Age}</td>
        <td>{detail.Gender}</td>
        <td>{detail.PhoneNo}</td>
       <td><button onClick={()=>DeleteData(detail.id)} className="rounded-full bg-red-600">Delete</button></td> 
        </tr>
        </tbody>
        </table>
      ))}

      <button><Link to={'/'} className="pt-2 pb-2 bg-purple-950 w-40 text-white mt-16">Back to Homepage</Link></button>
    </div>
  )
}

export default Details
