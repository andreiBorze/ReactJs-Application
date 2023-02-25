import React from "react";

const Button = (props) => {

    const ClickConfirmation = () => {
        alert("You clicked on: " + props.buttonName);
    }

    return (
        <div>
            <button onClick={ClickConfirmation} className="ex3Button"> {props.buttonName} </button>
        </div>
    );
};

export default Button;