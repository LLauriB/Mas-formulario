import { Component } from "react";

const Person = (props) =>  {
    return(
        <> 
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Email: {props.email}</p>
        <p>Password:{props.password}</p>
        <p>Confirm Password: {props.confirm}</p>
        </>
    );
}

export default Person;