import React from "react";
import { useState } from "react";

const Exercise4 = () => {

    const [count,setCount] = useState(0);

    return (
        <div className="Exercise4">
        <div className="ex4Description">
            <h2> Exercise 4</h2>
            <p>This exercise is simple, and is a very common React tutorial out there. Use the useState React hook to track how many times a button is clicked, and display the number.</p>
        </div>
        <div className="ex4Body">
            <p> 
                The button has been clicked: { count} times.          
            </p>
            <button className="ex4Button" onClick={() => { setCount(count + 1)}}> Click Me </button>
        </div>
</div>
    );
};

export default Exercise4;