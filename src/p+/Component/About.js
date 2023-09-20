import { Outlet } from "react-router-dom";

const About= ()=>{
    return (
        <>
        <div className="font-bold m-5">
    <h2>About us </h2>

    <h3>This is about us page we are just the passionate developer for the successful future.</h3>
    <p>
       

    </p>
    <Outlet/> 
    </div>
    </>)
}
export default About;
