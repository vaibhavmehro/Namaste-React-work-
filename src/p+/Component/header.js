import { useContext, useState } from "react";
import  logo from "../asset/logo.png";
import { Link } from "react-router-dom";
import userContext from "../Util/userContext";
import { useSelector } from "react-redux";
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

    const {user} =useContext(userContext);
    const cartItems=useSelector(store=>store.cart.items);
    return (
        <div className="flex justify-between bg-pink-50">
            <Title></Title>
        <div className="flex">
            <ul className="flex py-10">
                <li className="px-5"><Link to={"/About"}>About</Link></li>
                <li className="px-5"><Link to={"/Contact"}>Contact Us</Link>
                </li>
                <li className="px-5"><Link to={"/Instamart"}>Instamart</Link></li>
                <li className="px-5">Cart {cartItems.length}</li>  
                
            </ul>
        </div>
        <div className="m-10 space-x-5">
           <span className="m-10 p-5"> {user.name}</span>
           {logged?(<button  className="bg-green-500 w-100 border-radius: 0.375rem ring-2 ring-offset-2 hover:ring-offset-4" onClick={()=>setLogged(false) }>Logout</button>):
            (<button className="bg-red-500 w-100 border-radius: 0.375rem ring-2 ring-offset-2 hover:ring-offset-4"  onClick={()=>setLogged(true)}>Login</button>)}
            </div>
        
        </div>
    );
};


