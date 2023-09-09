import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
const Restaurantmenu =()=>
{
    
const param =useParams()
const {id}=param;
return (
<div>
    <h2>Restaurant id:{id}</h2>
    <h3>Good Morning </h3>
   
</div>
);

};

export default Restaurantmenu;
