import {useState,useEffect} from "react"
import { useParams } from "react-router";
import Shimmer from "./Shimmer"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategories from "./RestaurantCategories";
const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
    console.log("res",resInfo)
// const {resId} =useParams();
// console.log(resId);

// const [resMenu,setResMenu]=useState([]);
// useEffect(()=>{
//     FetchRestaurantMenu();
// },[])

//     const FetchRestaurantMenu=async()=>{
//         const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4743879&lng=77.50399039999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
    
//         const jsonData= await data.json();
//         console.log(jsonData);
//         const restaurantMenu=jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards|| [];
        
//         console.log(restaurantMenu);
//         setResMenu(restaurantMenu);

//         // setResMenu(restaurantMenu);
//         // setResMenu(jsonData);
//         // console.log("update data is",setResMenu)
//     }

const[showItemIdx,setshowItemIdx]=useState(null)
    const status=useOnlineStatus();
    if(status===false) return <h2>May be you are offline!! please connect internet to start again""</h2>
  if (!resInfo) return <Shimmer/>;
    
    const cards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const restaurantMenu = cards[cards.length - 1]?.card?.card || [];
    //  const restaurantMenu=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[cards.length-1]?.card?.card || [];
     console.log("restaturandmenu",restaurantMenu)
         const {name, area,completeAddress} =restaurantMenu;

     console.log("test",resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

     const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((each)=>each.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     console.log("resmenu",categories)
    
    return(
        <div>
           <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-4xl mt-4 border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
            <h2 className="text-lg font-medium text-gray-600 mb-1">{area}</h2>
            <p className="text-gray-500">{completeAddress}</p>
</div>
                                {/* categories accordian */}
            {categories.map((category, idx) => (
            <RestaurantCategories
                key={category.categoryId || idx} // fallback key for safety
                data={category.card.card}
                showItems={showItemIdx === idx}
                setshowItemIdx={setshowItemIdx}
                index={idx}
            />
            ))}
        </div>
    )
}
export default RestaurantMenu;