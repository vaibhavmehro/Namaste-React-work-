import React, { Suspense }  from "react";
import {Header} from "./header";
import Footer from "./footer";
import About  from "./About";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Body from "./body";
import Error from "./Error";
import Contact from "./contact";
import Restaurantmenu from "./restaurantmenu";
import Profile from "./Profile";
import ReactDOM from "react-dom/client"
import Shimmer from "./shimmer";
// import Instamart from "./Instamart"
import { lazy } from "react";

const Instamart=lazy(()=>import("./Instamart"));
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
                element:<About/>,
                children:[
                    {
                        path: "profile",
                        element:<Profile/>
                }],
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurantmenu/:id",
                element: <Restaurantmenu/>
            },
            {
                path:"/Instamart",
                element:<Suspense><Instamart/></Suspense>
            }
               ]
        }
      
        
    ]);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
