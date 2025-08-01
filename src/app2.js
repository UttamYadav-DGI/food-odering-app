import React, { lazy,Suspense, useEffect } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import AboutClass from "./components/About"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router"
import Contact from "./components/Contact"
import RestaurantCard from "./components/RestaurantCard"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"
import { useState } from "react"
import { Provider } from "react-redux"
import Cart from "./components/Cart"
import appStore from "./utils/AppStore"
import AboutUs from "./components/About"
const Grocery=lazy(() => import("./components/Grocery"));// it's create a seperte bundle for grocery
const PageLayout=()=>{
    const [userName,setUserName]=useState("");

    useEffect(()=>{
        const data={
            name:"uttam",
        };
        setUserName(data.name);
    },[])
    return (
       <Provider store={appStore}>
       <UserContext.Provider value={{loggedInUser:userName,setUserName}} >
        <Header/>
        <Outlet/>
         {/* <Footer/> */}
        </UserContext.Provider>
       </Provider>
       
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<PageLayout/>,
        children:[
        {
            path:"/",
            element:<Body/>
        },
        {
        path:"/about",
        element:<AboutUs/>
        },
        {   
        path:"/contact",
        element:<Contact/>
        },
        {
        path:"/grocery",
        element:<Suspense fallback={<h3>loading...</h3>} ><Grocery/></Suspense>
        },
        {
        path:"/cart",
        element:<Cart/>
        },
        {
            path:"/restaurantMenu/:resId",
            element:<RestaurantMenu/>
        }
        ]
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); 