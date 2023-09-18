import { useRouteError } from "react-router-dom";


const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return(
    <div>
    <h2>Error caused</h2>
    <h3>Unmatched error</h3>
    <h2>{err.status + ":" + err.statusText}</h2>
    </div>
    )
}
export default Error;