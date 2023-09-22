import { useContext } from "react";
import userContext from "../Util/userContext";

const Footer =()=>{
    const {user}=useContext(userContext)
    return (
        <div>
            <h2 className="m-5 font-bold">{user.email}</h2>
        </div>
    )
}
export default Footer;