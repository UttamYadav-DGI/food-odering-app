import React from "react"
class UserClass extends React.Component{
    constructor (props){
        super(props)
        this.state={
        count:0,
        count2:1
        
    };
    console.log("child constructor ");
}   
    componentDidMount(){
        console.log("child component mount");
    }

    render(){
        console.log("child render phase")
        const {count,count2}=this.state;
        const {name,address}=this.props
        return (
            <div>
            <h3>{count}</h3>
            <h3>{count2}</h3>
            <button
            onClick={()=>{
                this.setState({
                    count:count+1,
                    count2:count2+1
                })
            }}
            >
            click to increase count
            </button>
            <h2>name:{name}</h2>
            <h2>address:{address}</h2>
            <h2>contact:uttam12@gmail.com</h2>
        </div>
        )
    }
}
export default UserClass;