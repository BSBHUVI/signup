import React from 'react'
import { Navigate } from 'react-router-dom'
import {useUserAuth} from "../context/Usercontext"

function Protectedroutes({children}) {
    const {user}=useUserAuth()
    if (!user){
        return <Navigate to='/signup'/>
    }
  return  children
}

export default Protectedroutes
