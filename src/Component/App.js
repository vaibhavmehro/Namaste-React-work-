import React, { Children } from "react";
import  ReactDOM from "react-dom/client";
import {Header} from "./header";
import Footer from "./footer";
import About  from "./About";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Body from "./body";
import Error from "./Error";
import Contact from "./contact";
import Restaurantmenu from "./restaurantmenu";
    const Applayout =()=>
    {
        return (
            <>
            <Header/>
            <Outlet/>
            <Footer/>
            </>
        )
    };
    const appRouter =createBrowserRouter([
        {
            path:"/",
            element:<Applayout/>,
            errorElement:<Error/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {

                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurantmenu/:id",
                element: <Restaurantmenu/>
            }
               ]
        }
      
        
    ]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
