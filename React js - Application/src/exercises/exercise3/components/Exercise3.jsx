import React from "react";
import Button from "./Button";

const Exercise3 = () => {
    return ( 
    <div className="Exercise3">
            <div className="ex3Description">
                <h2> Exercise 3</h2>
                <p>n the previous exercise, we used the HTML button tag. But much of the power that React provides to us developers is being able to create our own components and reuse them.</p>
            </div>
            <div className="ex3Body">
                <Button buttonName = "Button 1" />
                <Button buttonName = "Button 2" />
                <Button buttonName = "Button 3" />
            </div>
    </div>
    );
};

export default Exercise3;

