import { useState } from "react"
const Section=({title,description,isVisible,setIsVisible})=>{
  
    return (
        <div className= "border border-black p-2 m-2">
            <h3 className="font-bold ">{title}</h3>
            {
                isVisible ? <button className="cursor-pointer underline font-sans"onClick={()=>(setIsVisible())}>Hide</button>
                : <button className="cursor-pointer underline font-sans"onClick={()=>(setIsVisible())}>Show</button>
            }
           {isVisible && <p>{description}</p>}


        </div>

    )
}

const Instamart= ()=>{
    const[config,setConfig]=useState(" ")
   return ( <div className="bg-pink-300 border border-black">
        <h1 className="font-bold m-5 p-3">Instamart</h1>
        <Section title={"About Instamart"} 
        description={"This is the description part of the about here we can get the description of instamart"}
        isVisible={config=="about"}
        setIsVisible={()=>
            setConfig("about")
        }/>
         <Section title={"Carrer"} 
        description={"This is the Carrer part of the about here we can get the open career oppurtunity in the instamart"}
        isVisible={config=="career"}
        setIsVisible={()=>
            setConfig("career")
        }/>
         <Section title={"Contact us"} 
        description={"This is the contact us part of the about here we can connect with people to get in touch"}
        isVisible={config=="contact"}
         setIsVisible={()=>
            setConfig("contact")
        }/>
        

    </div>
   )
}
export default Instamart;