// import React, { useReducer} from 'react'

// function reducer(state,action){
//   switch(action.type){
//     case "increment":{
//       return state+1;
//     }
//     case "decrement":{
//       return state-1;
//     }

//     default:{
//       return state
//     }
//   }
// }

// export default function About() {
//   let [Count,dispatch]=useReducer(reducer,0)
  
//   return (
//     <div>
//       <h1>Count:{Count}</h1>

//       <button onClick={()=>dispatch({type:"increment"})}>inc</button>
//           <button onClick={()=>dispatch({type:"decrement"})}>dec</button>

//     </div>
//   )
// }


//controlled component


// import React from "react";
// import { useState } from "react";

// export default function About(){
//   let [data,setData]=useState({
//     username:"",
//     password:""
//   })

//   function handleChange(e){
//     let {name,value}=e.target;
//     console.log(e.target.value)
//     setData({...data,[name]:value})


//   }

//   return (
//   <div>
//     <label htmlFor="username">username</label>
//     <input type="text" id="username" name={"username"} value={data.username} onChange={handleChange} />
//     <label htmlFor="password">password</label>
//     <input type="password" id="password" name="password" value={data.password} onChange={handleChange} />
//     <button type="submit">Submit</button>
//   </div>
//   )
// }

// import React, { useEffect, useState } from "react"
// export default function About(){
//   let [data,setData]=useState()
//   useEffect(()=>{
//     fetch("https://fakestoreapi.com/products").then(d=>d.json()).then(data=>setData(data))
//   })
//   return(
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Image</th>
//             <th>Title</th>
//             <th>description</th>
//             <th>price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.map((v,i)=>{
//             return(
//               <tr key={i+1}>
//                 <td>{v.id}</td>
//                 <td><img src={v.image} alt="" /></td>
//                 <td>{v.title}</td>
//                 <td>{v.description}</td>
//                 <td>{v.price}</td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   )
// } 

import "./App.css"
import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile(){
    let [username,setUsername]=useState("")
    let [password,setpassword]=useState("")
    let [message,setmessage]=useState("")

    let navigate=useNavigate()

const handleRegister=async (e)=>{
    e.preventDefault();
    const res=await fetch("http://127.0.0.1:8000/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
    body:JSON.stringify({username,password})
}
)

const data=await res.json();
setmessage(data.message || data.detail)

if (res.ok){
  navigate("/login")
}
else if ( data.detail=="user already exists") {
    const redirect=confirm("User already exists, redirecting to login") ;
    if (redirect){
        navigate("/login")
    }
   
}

else{
    alert(data.detail||"login failed")

}

}

    return (

        <div className="form-container">
            <div className="form-holder">
            <form onSubmit={handleRegister} autocomplete="off">
                <label htmlFor="username">Enter Username</label>
                <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <br />
                <label htmlFor="password">Enter password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <br />
             

                <button type="submit">register</button>
            </form>
            </div>
            <p>{message}</p>
        </div>
    )

}

