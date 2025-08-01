import { useEffect,useState } from "react"
import { MENU_API } from "./mockData";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
   
    useEffect(()=>{
    fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch(MENU_API+resId)
        const jsonData=await data.json();
        console.log("data",data)
     setResInfo(jsonData);
     console.log(data)
    };
    return resInfo;
};
export default useRestaurantMenu;