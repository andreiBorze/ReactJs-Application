import React from "react";

const Exercise5 = () => {

    const list = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

    let listOfAnimals = list.map((item) => (
        <li key={item.toString()}> {item} </li>)
    );
    return(
    <div className="Exercise5">
        <div className="ex5Description">
            <h2> Exercise 5</h2>
            <p>In this exercise, instead of manually and "imperatively" coding the render of each item in a list, use the map function to "declare" how React should render the list.</p>
        </div>
        <div className="ex5Body">
            <p>
                <ul>The list content is: {listOfAnimals}</ul>
            </p>
        </div>
    </div>);
};

export default Exercise5;