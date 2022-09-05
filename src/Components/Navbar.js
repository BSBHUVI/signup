import React, {  useRef} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {useUserAuth} from '../context/Usercontext'



function Navbar() {
 
  const {user,logout}=useUserAuth()
  const navigate=useNavigate()
  const ref=useRef()

  const logoutuser=()=>{
    logout()
    navigate('/signup/login')


  }
  const search=()=>{
    const value=ref.current.value
     if(value==="Home" || value==="home"){
      navigate('/signup/navbar/account')
     }
     if(value==="Orders" || value==="orders"){
      navigate('/signup/navbar/orders')
     }
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
        <Link className="nav-link my-3 text-light"   to="/signup/navbar/orders">ORDERS</Link>
        </li>
        {user.email==="bhuvansbhuvan467@gmail.com" && <Link to="/signup/navbar/admin"><button className='btn btn-primary'>ADMIN</button></Link>}
        
        
      </ul>
      <div>
        <datalist  id='suggest'>
          <option >Home</option>
          <option >Orders</option>
        </datalist>
        <input ref={ref}  className='form-control me-2 d-flex' autoComplete='on' list='suggest' />
        
      </div>
      <button  onClick={search} className="btn btn-outline-success" type="submit">Search</button>
     
    
      <button className="btn-btn btn-danger" onClick={logoutuser}>logout</button>
    </div>
  </div>

    
  
   
</nav>
<Outlet/>
      
    </div>
  )
}

export default Navbar
