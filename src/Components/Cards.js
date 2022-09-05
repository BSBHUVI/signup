import React from 'react'
import '../style.css'
import {useUserAuth} from '../context/Usercontext'
import axios from './Axios'


function Cards({lists}) {
  const {user}=useUserAuth()
  
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
  return (
    <>
 {
    lists.map((list)=>{
        return <div key={list._id} className="card" >
     <img width="286" height="286" src={list.image}></img>
      <div className="card-body">
    <h5 className="card-title">{list.title}</h5>
    <p className="card-text">{list.description}</p>
    <a href="#" className="btn btn-primary">BUY at {list.price} from store✔️</a>
  </div>
  {user.email==="bhuvansbhuvan467@gmail.com" && <button onClick={() => del(list._id)}>delete</button>}

</div>
    })
 }


</>  
  
  )
}

export default Cards
