import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useUserAuth} from '../context/Usercontext'


function Navbar() {
  const {user,logout}=useUserAuth()
  const navigate=useNavigate()

  const logoutuser=()=>{
    logout()
    navigate('/signup/login')


  }
  return (
    <div>
       <nav className="navbar navbar-dark bg-dark  navbar-expand-lg ">
    <div className="container-fluid">
    <h3 className='logo mx-3'><Link to="/signup/navbar/account">META STORE</Link></h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <span className="nav-link order-link"><Link  to="/signup/navbar/orders">ORDERS</Link></span>
        </li>
        
        
      </ul>
     
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button className="btn-btn btn-danger" onClick={logoutuser}>logout</button>
    </div>
  </div>

    
  
   
</nav>
<Outlet/>
      
    </div>
  )
}

export default Navbar
