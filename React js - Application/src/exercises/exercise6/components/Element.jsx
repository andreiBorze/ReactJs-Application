import React from "react";

const Element = (props) => {

    // const [id, name, emoji] = props;

    return (
        <div className="ItemExercise6">
                <p className="ex6Emoji"> {props.emoji} {props.name} </p>
        </div>);
}

export default Element;