import React from 'react'
import '../style.css'
import {useUserAuth} from '../context/Usercontext'
import axios from './Axios'
import { useNavigate } from 'react-router-dom'



function Cards({lists}) {

  const {user}=useUserAuth()
  const navigate=useNavigate()
  
  
  function del(id) {
   
   
    axios
      .delete("/lists/" + id)
      .then(() => {
        alert("deleted");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function order(id){
    axios.put('/lists/'+id).then(()=>{
      alert("updated")
    })
    navigate('/signup/navbar/orders')
  }
  
    
 



 
  return (
    <>
 {
    lists.map((list)=>{
        return <div key={list._id} className="card" >
     <img width="286" height="286" src={list.image} alt="..."></img>
      <div className="card-body">
    <h5 className="card-title">{list.title}</h5>
    <p className="card-text">{list.description}</p>
    <button onClick={()=>order(list._id)}  className="btn btn-primary">Order at {list.price} from store✔️</button>
  </div>
  {user.email==="bhuvansbhuvan467@gmail.com" && <button className='btn btn-danger' onClick={() => del(list._id)}>delete</button>}

</div>
    })
 }


</>  
  
  )
}

export default Cards
