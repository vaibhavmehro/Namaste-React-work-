import { useState } from "react";
import  logo from "./asset/logo.png"
import { Link } from "react-router-dom";

export const Header =()=> {

    const [logged,setLogged] =useState(false);
    return (
        <div className="header">
            <Title></Title>
        <div className="nav-items">
            <ul>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/Contact"}>Contact Us</Link>
                </li>
                <li>Details</li>
                <li>Menu</li>  
                
            </ul>
        </div>
        
           {logged?(<button onClick={()=>setLogged(false) }>Logout</button>):
            (<button onClick={()=>setLogged(true)}>Login</button>)}
        
        </div>
    );
};

export const Title =() => {
    return (
        <a href="/">
    <img className="logo"  alt="Food villa"
     src={logo}></img>
    </a>
    )
}
