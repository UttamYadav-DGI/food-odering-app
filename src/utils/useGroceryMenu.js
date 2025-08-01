import React, { useEffect } from "react";
import { useState } from "react";

const useGrocery=()=>{

    const [resInfo,setResInfo]=useState([]);

    useEffect(()=>
        {fetchData()},
    [])

    const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/api/instamart/category-listing?categoryName=Fresh%20Vegetables&storeId=&offset=0&filterName=&primaryStoreId=&secondaryStoreId=&taxonomyType=");
    const jsonData=await data.json();
    setResInfo(jsonData);
    };
    return resInfo;
}

export default useGrocery;
