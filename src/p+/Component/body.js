import { useState,useEffect } from "react";
import { Restaurantcard } from "./Restaurantcard";
import { restaurantlist } from "./constant";
import Shimmer from "./shimmer";
const filter =(searchText,allRestaurants)=>{
    
const filterdata=allRestaurants.filter((rest)=>rest?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
    return filterdata;
}   

const Body=()=>{
    const [allRestaurant,setAllRestaurants]=useState(restaurantlist)
    const [filteredRestaurants,setFilteredRestaurants]= useState(restaurantlist)
    const [searchText,setSearchText] = useState("")

  useEffect(()=>{
    getRestaurants();   
  },[]);
  async function getRestaurants(){
    try{
    const data =await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9760592&lng=77.76105079999999");
    const json =await  data.json();
    
    console.log(json);
    // setFilteredRestaurants(json?.data?.success?.cards[4]?.gridWidgets?.gridElements?.infoWithStyle?.restaurants)
    // setAllRestaurants(json?.data?.success?.cards[4]?.gridWidgets?.gridElements?.infoWithStyle?.restaurants)
    }
    catch{
      ()=>(console.log("error"));
    }
} 
console.log("render");
// if(!allRestaurant) return null;
if(filteredRestaurants?.length==0)
{
   return ( 
    <h2>No Searched data found</h2>
   )
}
       

    
    return  (
      <>
      <div className="justify-between px-20 p-5  ">
        <input type="text"className=" ring-2 ring-offset-2 hover:ring-offset-4" placeholder="Search "
        value={searchText}
        onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button className="justify-center bg-green-400 px-5  m-5"
        onClick={()=>{
            const data=filter(searchText,allRestaurant);
            setFilteredRestaurants(data);
            // setAllRestaurants(restaurantlist);
        }
        }
        
        >Search</button>
      </div>
      <div className="flex flex-wrap bg-violet-50">
          {filteredRestaurants?.map((rest)=>{return <Restaurantcard {...rest.info}/>})}
        </div>
        </>
    )
};
export default Body;