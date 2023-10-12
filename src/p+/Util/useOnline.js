import { useState,useEffect } from "react";
const useOnline =()=>{
    const [isOnline,setIsOnline]=useState(true);
    <button onClick={setIsOnline=(false)}>Status </button>

    

}
export default useOnline;