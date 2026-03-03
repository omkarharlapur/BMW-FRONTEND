  import React, { useState } from 'react'
  import './../Pages/app.css'
  import { useNavigate } from 'react-router-dom'

  export default function Login() {
      const navigate=useNavigate()
      let [username,setUsername]=useState("")
      let [password,setPassword]=useState("")
      let [message,setMessage]=useState("")

      const handleLogin=async(e)=>{
          e.preventDefault()
          const response = await fetch("http://127.0.0.1:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      username,
      password,
    }),
  }
    
  );

  const data=await response.json();
  if (response.ok){
          localStorage.setItem("token",data.access_token);
          navigate("/")
  }
  else{
      alert("cant login")
  }
      }
    return (
      <div className="form-container login-page">
        <div className='form-holder'>
          <form  onSubmit={handleLogin} autoComplete='off'>
            
                  <label htmlFor="username">Enter Username</label>
                  <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                  <br />
                  <label htmlFor="password">Enter password</label>
                  <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <br />
                  <button type="submit">login</button>
              </form>
              </div>
              <p>{message}</p>
      </div>
    )
  }


