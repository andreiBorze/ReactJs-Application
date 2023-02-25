import React from "react";
import data from "./data";
import Element from "./Element";

const Exercise6 = () => {
    return(
    <div className="Exercise6">
        <div className="ex6Description">
            <h2> Exercise 6</h2>
            <p>You only created a custom button there. This time, you'll create a custom component that displays each item from exercise 5: </p>                                                                                                                        
            <p>'dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'</p>
            <p> Instead of using the ul and li HTML tags, create a custom component that accepts a list as its prop, and renders it accordingly.</p>
        </div>
        <div className="ex6Body">
        {
            data.map((item) => { return <Element key = {item.id}  emoji = {item.emoji} name = {item.name}/>})             
        }
        </div>
    </div>);
};

export default Exercise6;