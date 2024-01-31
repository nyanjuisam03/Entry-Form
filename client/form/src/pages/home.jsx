import React from 'react'
import { useState } from 'react'
import axios from "axios"

function Home() {
      const [detail,setDetail]=useState({
        FullName:"",
        Age:"",
        Gender:"",
        PhoneNo:""
      })
   
      
      const handleChange=(e)=>{

    setDetail(prev=>({...prev,[e.target.name]:e.target.value}))
    console.log(detail)
}

const AddDetail=async(e)=>{
    e.preventDefault()
   try{
   await axios.post("http://localhost:2000/details",detail)
   alert('Data Added Successfully')
  setDetail({
    FullName:'',
    Age:'',
    Gender:'',
    PhoneNo:''
  })
  
   }
catch(err){
    alert("Please add your Details")  //alerting error if any occurs while adding details to the database
}

}


  return (
    <div className='relative'>
      <h2 className='text-center pb-6' >Simple Form</h2>
      <div className='flex flex-col space-y-2 w-1/2 absolute right-80'>
        <input type="text" className="border-black border-2 rounded-full" placeholder='Name' onChange={handleChange} name='FullName' value={detail.FullName} />
        <br />
        <input type="number"className="border-black border-2 rounded-full"  placeholder='Age'  onChange={handleChange} name='Age' value={detail.Age}/>
        <br />
        <input type="text" className="border-black border-2 rounded-full " placeholder='Gender'  onChange={handleChange} name='Gender' value={detail.Gender} />
        <br />
        <input type="text" className="border-black border-2  rounded-full" placeholder='PhoneNo'  onChange={handleChange} name='PhoneNo' value={detail.PhoneNo} />
        <div className='flex justify-center'>
        <button   onClick={AddDetail} className='pt-2 pb-2 bg-purple-950 w-40 text-white rounded-full mt-5'>Add  New Info</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Home
