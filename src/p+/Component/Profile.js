import { useEffect, useState } from "react";
const Profile =()=>
{
    const [count,setCount]=useState(0);

    useEffect(()=>{});
    return(
        <div>
           <h2>Profile component</h2>
           <h3>Name: {props.name}</h3>
           <h4>count: {count}</h4>
           <button 
           onClick={()=>{setCount(1);}}>count
           </button>
        </div>
    )
}
export default Profile;

