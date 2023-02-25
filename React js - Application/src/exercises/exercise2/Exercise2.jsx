import React from "react";

const Exercise2 = () => {
    
    const ClickConfirmation = () => {
        alert('Clicked!');
    }

    return (
        <div className="Exercise2">
            <div className="ex2Description">
                <h2> Exercise 2</h2>
                <p>Using the native HTML button tag, capture the click event and alert the message, "Clicked!".</p>
            </div>
            <div className="ex2Body">
                <button className="ex2Button" onClick={ClickConfirmation}> <p>Confirm</p> </button>
            </div>
        </div>
    );    
} 

export default Exercise2;