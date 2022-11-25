import React from "react";
import "./Button.css";

const Button = () => {
    return (
        <div><button className="customButton" onClick={() => {alert("Hola abi")}}> Click</button></div>
    )
}

export default Button;