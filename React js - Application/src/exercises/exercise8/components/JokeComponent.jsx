import React from "react";

const JokeComponent = (props) => {

    const {id, setup, punchline} = props;

    return (
        <div className="ItemExercise8">
                <h3> {setup} </h3>
                <p> {punchline} </p>
        </div>);
};

export default JokeComponent;