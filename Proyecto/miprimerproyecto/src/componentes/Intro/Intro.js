import React from "react";
import "./Intro.css"
import Imagen from "./facebook.svg"
import Button from "../Button/Button";

const Intro = ({titulo}) => {
    return(
        <div> <img src={Imagen} className="App-logo" alt="" /> 
        <h1>{titulo}</h1>
        <Button className="customButton"/>
        <Button/>
</div>
    );
}

export default Intro;