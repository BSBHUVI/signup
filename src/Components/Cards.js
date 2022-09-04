import React from 'react'
import '../style.css'


function Cards({lists}) {
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

</div>
    })
 }


</>  
  
  )
}

export default Cards
