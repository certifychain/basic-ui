import React from 'react';
import { useState } from "react"
import { signup } from "./auth"
import { useCookies } from 'react-cookie'
import { Link, Navigate } from 'react-router-dom'

function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [errorreg, setErrorreg] = useState("")
  const [cookies, setCookie] = useCookies(['authToken'])

  const isUserLoggedIn = () => {
    return !!cookies.authToken
  }

  const handleSignup = async () => {
    try {
      if (cpassword !== password) {
        setErrorreg('error: passwords do not match, try again')
        setPassword("")
        setCpassword("")
      } else if (password.length < 8) {
        setErrorreg('error: password is too short')
        setPassword("")
        setCpassword("")
      } else {
        const response = await signup(username, password, email)
        console.log(response)
        setCookie('authToken', response.data.token, { maxAge: 604800 })
        window.location.href = "./home"
      }
    } catch (error) {
      alert("error: " + error)
    }
  }


  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
    {!isUserLoggedIn() ? (
      <div className="min-w-[400px] bg-blue-300 p-5">
        <p className='text-5xl m-5'>register page</p>
        <div className='flex flex-col gap-5'>
          <div className="flex flex-col gap-2">
            username:
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="p-1" />
          </div>
          <div className="flex flex-col gap-2">
            email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="p-1" />
          </div>
          <div className="flex flex-col gap-2">
            password:
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="p-1" />
          </div>
          <div className="flex flex-col gap-2">
            confirm password:
            <input type="password" value={cpassword} onChange={(event) => setCpassword(event.target.value)} className="p-1" />
          </div>
          <button onClick={handleSignup} className='rounded-xl text-center py-2 px-5 bg-red-300'>register</button>
        </div>
        <p>already have an account? <Link to="../login">login here</Link></p>
        <div className="my-5 text-center text-red-500">{errorreg}</div>
      </div>) :(
                    <Navigate to="/home" replace={true} />
              )}
    </div>
  )
}


export default Register