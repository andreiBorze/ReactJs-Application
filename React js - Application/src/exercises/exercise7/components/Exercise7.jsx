import React from "react";

const Exercise7 = class Exercise7 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {name1: "", lastname: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        const {name, lastname} =  this.state;
        event.preventDefault();
        alert(`Hello ${name} ${lastname}`);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
        event.preventDefault();
    }
    render() {
        return (
            <div className="Exercise7">
                <div className="ex7Description">
                    <h2> Exercise 7</h2>
                </div>
                <div className="ex7Body">
                    <form onSubmit={this.handleSubmit}>
                        <div><label> First Name </label>
                        <input className="InputText" name="name" type="text" placeholder="First name" value={this.state.name} onChange={this.handleChange}/></div>
                        <div><label> Last Name </label>
                        <input className="InputText" name="lastname" type="text" placeholder="Last name" value={this.state.lastname} onChange={this.handleChange}/></div>
                        <button className="SubmitButton">Greet Me</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default Exercise7; 