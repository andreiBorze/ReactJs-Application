import React from "react";
import data from './data';
import JokeComponent from './JokeComponent';
const Exercise8 = () => {
    return(
        <div className="Exercise8">
            <div className="ex8Description">
                <h2> Exercise 8</h2>
                <p>Most of the time, the structure of the data we're working with in real-world applications aren't simple lists like 'dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'. </p>                                                                                                                        
                <p>A lot of data is stored in JSON format. This is especially true when you're fetching data from a database.</p>
                <p> SON stands for JavaScript Object Notation, a type of format for data interchange.</p>
            </div>
            <div className="ex8Body">
            {
                data.map((item) => { return <JokeComponent key = {item.id}  setup = {item.setup} punchline = {item.punchline}/>})             
            }
            </div>
        </div>
        );
};

export default Exercise8;