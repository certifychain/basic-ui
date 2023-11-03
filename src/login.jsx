import React from 'react'
import { useState } from "react"
import { login } from "./auth"
import { useCookies } from 'react-cookie'
import { Link, Navigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [cookies, setCookie] = useCookies(['authToken'])

  const isUserLoggedIn = () => {
      return !!cookies.authToken
  }
  
  const handleLogin = async () => {
    try {
      const response = await login(username, password)
      console.log(response)
      setCookie('authToken', response.data.token, { maxAge: 604800 })
      window.location.href = "./home"
    } catch (error) {
      console.log("error: " + error)
    }
  }

  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
    {!isUserLoggedIn() ? (
      <div className="min-w-[400px] bg-blue-300 p-5">
        <p className='text-5xl m-5'>login page</p>
        <div className='flex flex-col gap-5'>
          <div className="flex flex-col gap-2">
            username:
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="p-1" />
          </div>
          <div className="flex flex-col gap-2">
            password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="p-1" />
          </div>
          <button className='rounded-xl text-center py-2 px-5 bg-red-300' onClick={handleLogin}>login</button>
        </div>
        <p>don't you have an account ? <Link to="../register">register here</Link></p>
        </div>) :(
                    <Navigate to="/home" replace={true} />
                  )}
      </div>

  )
}

export default Login