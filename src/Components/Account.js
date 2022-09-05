import React, { useEffect, useState } from 'react'

import '../style.css'
import Cards from './Cards'
import axios from './Axios'


function Account() {

  const [lists,setLists]=useState([])
  useEffect(()=>{
    axios.get('/lists/sync').then((response)=>{
      setLists(response.data)
    })
  },[])
 


  return (
    <>

<div className="card-container">

<Cards lists={lists}/>

</div>

    </>
  )
}

export default Account
