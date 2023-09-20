import { useState } from "react";
import  logo from "../asset/logo.png";
import { Link } from "react-router-dom";
export const Title =() => {
    return (
        <a href="/">
    <img className="w-40 m-2 p-2 "  alt="Food villa"
     src={logo}></img>
    </a>
    )
}

export const Header =()=> {

    const [logged,setLogged] =useState(false);
    return (
        <div className="flex justify-between bg-pink-50">
            <Title></Title>
        <div className="flex">
            <ul className="flex py-10">
                <li className="px-5"><Link to={"/About"}>About</Link></li>
                <li className="px-5"><Link to={"/Contact"}>Contact Us</Link>
                </li>
                <li className="px-5"><Link to={"/Instamart"}>Instamart</Link></li>
                <li className="px-5">Menu</li>  
                
            </ul>
        </div>
        <div className="m-10">
           {logged?(<button  className="bg-green-500 w-100 border-radius: 0.375rem ring-2 ring-offset-2 hover:ring-offset-4" onClick={()=>setLogged(false) }>Logout</button>):
            (<button className="bg-red-500 w-100 border-radius: 0.375rem ring-2 ring-offset-2 hover:ring-offset-4"  onClick={()=>setLogged(true)}>Login</button>)}
            </div>
        
        </div>
    );
};


