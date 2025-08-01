import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count1:0,
            count2:1
        };
        console.log("child constructor");
    }
    render(){
        console.log("hello");
        const {count1,count2}=this.state;
        
    }
}