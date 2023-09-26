import { useDispatch } from "react-redux";
import { addItem ,removeItems} from "../Util/cartSlice";
import {img_cdn} from "./constant";

export const Restaurantcard =({name,avgRating,cloudinaryImageId,cuisines,costForTwo})=>{
    const dispatch=useDispatch();
    const handdleAddItems =()=>{
        dispatch(addItem("abc"));
    }
    const handdleRemoveItems =()=>{
        dispatch(removeItems());
    }
    return ( 
      <>
       <div className="w-80 p-5 m-5 border-color: rgb(0 0 0) bg-fuchsia-100">
          <img  className=""src={img_cdn+ cloudinaryImageId}/>
              <h2 className="font-bold">{name}</h2>
              <h3>{avgRating}</h3>
              <h4>
              {cuisines.join(",")}
              </h4>
              <h4>{costForTwo}</h4>
              <button className="m-3 bg-green-500" on onClick={()=>{handdleAddItems()}}>Add Items</button>
              <button className="m-3 bg-green-500" on onClick={()=>{handdleRemoveItems()}}>Remove Items</button>
          
      </div>
      </>
      )
  
  };