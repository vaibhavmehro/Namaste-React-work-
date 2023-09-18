import {img_cdn} from "./constant";

export const Restaurantcard =({name,avgRating,cloudinaryImageId,cuisines,costForTwo})=>{
    return ( 
      <>
       <div className="card">
          <img src={img_cdn+ cloudinaryImageId}/>
              <h2>{name}</h2>
              <h3>{avgRating}</h3>
              <h4>
              {cuisines.join(",")}
              </h4>
              <h4>{costForTwo}</h4>
          
      </div>
      </>
      )
  
  };