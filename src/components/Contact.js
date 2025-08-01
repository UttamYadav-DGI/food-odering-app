import React, { useContext } from "react";
 import UserContext from "../utils/UserContext";
const Contact=()=>{
    const {loggedInUser}=useContext(UserContext);
    return (
        <div>
        <h1>i am contact page</h1>
        <h2>{loggedInUser}</h2>
        </div>
        
    )
}
export default Contact;
