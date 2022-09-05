import React, { useState } from 'react'
import axios from './Axios'

function Admin() {
 const [image,setImage]=useState("")
 const [title,setTitle]=useState("")
 const [description,setDescription]=useState("")
 const [price,setPrice]=useState("")
 const postitems=(e)=>{
  e.preventDefault()
  axios.post('/lists/new',{
    image:image,
    title:title,
    description:description,
    price:price
  }).then(()=>{
    alert("successfull")
  }).catch((err)=>{
    alert(err)
  })
  setImage("")
  setDescription("")
  setTitle("")
  setPrice("")

 }
  return (
    <div className='post-container'>
    <h1 className='post-heading'>POST THE NEW LISTS</h1>
      <form className='form-container' >
      <input value={image} onChange={(e)=>{setImage(e.target.value)}} className='input-text' type="text" placeholder='Enter the image link ' />
      <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className='input-text' type="text" placeholder='Enter the title' />
      <input value={description} onChange={(e)=>{setDescription(e.target.value)}} className='input-text' type="text" placeholder='Enter the description'/>
      <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className='input-text' type="text" placeholder='Enter the price' />
       <button onClick={postitems} className='but-form'>POST</button>
      </form>
    </div>
  )
}

export default Admin
