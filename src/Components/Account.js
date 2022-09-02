import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import {useUserAuth} from '../context/Usercontext'

function Account() {
  const {user,logout}=useUserAuth()
  const navigate=useNavigate()
  const logoutuser=()=>{
    logout()
    navigate('/signup/login')


  }
  return (
    <div className='Account'>
    <div className="container">
      <p>hello {user.email}</p>
      <button onClick={logoutuser}>logout</button>
      <Link to='/signup/Account/next'>next</Link>
      <Outlet/>
    </div>
    </div>
  )
}

export default Account
