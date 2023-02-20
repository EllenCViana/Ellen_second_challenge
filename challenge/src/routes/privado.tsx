import React from 'react'
import { Navigate } from 'react-router-dom'

function privado ({children}:any) {
    let user:boolean;
    let privado=localStorage.getItem("privado")

    if (privado!=="true"){
        user=false
    }
    else {
        user=true
    }
  return user ? children : <Navigate to="/" />
}

export default privado;