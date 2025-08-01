import React from "react"
import ReactDOM from "react-dom/client"

     // root.render(papa);
const papa=React.createElement('div',{id:"papa"},React.createElement('div',{id:"bacha"},React.createElement('h1',{},"bacha hello world")));
const heading=React.createElement("h1",{},"hello world by react");
const root=ReactDOM.createRoot(document.getElementById("root"));



//behind the scene=> jsx=>react.createElement=>reactElement->jsObject=>htmlElement(render)   babel performing this conversion
const jsxHeading= <h1> namaste react</h1>

//react functional components
const Heading1=()=>( 
    <div id="container">
    <h1 className="heading">radhe radhe</h1>
    </div>
)
const Heading3=()=>( 
    <div id="container">
    <h1 className="heading">radhe radhe</h1>
    </div>
)
//another method to write a functional components
const Heading2=()=>{
   return( <div id="container">
    <h1 className="heading">radhe radhe</h1>
    </div>
   )
}

const title=( //react element
    <h1 className="head" tabIndex="5"
    >Namaste react</h1>
)

///component compositions 
const Title=()=>{
  return  <h1> Namaste react with jsx</h1>
};
const number=100;
const Headingcomponent=()=>(
    
    <div id="container">
        {Title()}
        {number}
        <h2>{number}</h2>
        {console.log(number)}
        {/* {number} //inside this cerly-braces we write any js expression in it */}
        <Title/>
        <h1>namste componenent compositions </h1>
    </div>
)
root.render(<Headingcomponent/>);
