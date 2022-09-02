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
    <div>
      <h1>hello {user.email}</h1>
      <button onClick={logoutuser}>logout</button>
      <Link to='/signup/Account/next'>next</Link>
      <Outlet/>
    </div>
  )
}

export default Account
