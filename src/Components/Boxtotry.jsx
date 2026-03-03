import React, { useState } from 'react'

export default function Boxtotry() {
    let[data,setdata]=useState({
        username:"",
        password:""
    })
    let[login,setLogin]=useState(false)

    let handleSubmit= async(e)=>{
        e.preventDefault()
        setLogin(true)

        const response=await fetch("http://127.0.0.1:8000/register",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(data)
        })

        const result=await response.json()
        console.log(result)
    }


    function handleChange(e){
        setdata({...data,[e.target.name]:e.target.value})
    }
  
    return (
    <div>
        <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username</label>
        <input type="text" id='username' name='username' value={data.username} onChange={handleChange} />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' value={data.password} onChange={handleChange} />

        <button type='submit'>Login</button>
        </form>

        {login && <h3>registration Successful</h3>}
    </div>
  )
}
