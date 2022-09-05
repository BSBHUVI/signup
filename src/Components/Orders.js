import axios from './Axios';
import React, { useEffect, useState } from 'react'





function Orders() {
  const [orders,setOrders]=useState([]);
  useEffect(()=>{
    axios.get('/booked/sync').then((response)=>{
      setOrders(response.data);
    })

  },[])
  function remove(id){
    axios.put('/remove/'+id).then(()=>{
      alert("removed")
    })

  }
 
  
  return (
    <div className="card-container">
       {
    orders.map((order)=>{
        return <div key={order._id} className="card" >
     <img width="286" height="286" src={order.image} alt="..."></img>
      <div className="card-body">
    <h5 className="card-title">{order.title}</h5>
    <p className="card-text">{order.description}</p>
   
    <button data-text="Awesome" class="button">
   <a  href="https://paytm.me/EY2G-JP"><span class="actual-text">&nbsp;BUY NOW&nbsp;</span></a> 
    <span class="hover-text" aria-hidden="true">&nbsp;&nbsp;</span>
</button>

  </div>
 <button className='btn-danger btn' onClick={()=>remove(order._id)} >Remove</button>

</div>
    })
 }

     
    </div>
  )
}

export default Orders
