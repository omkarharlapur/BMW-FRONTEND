import React from "react";
import { Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import "./Pages/App.css"
import Profile from "./Pages/Profile"
import About from "./Pages/About"
import Login from "./Components/Login";

export default function App(){  


    return (
        <div>
            <Navbar/>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}