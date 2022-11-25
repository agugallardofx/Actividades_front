import React from "react";
import "./Home.css";
import Intro from "../Intro/Intro";
import Carrusel from "../Carrusel/Carrusel";

const Home = () => {
    return(
    <header><section><Carrusel/></section>
    <h3>Header</h3>
    <Intro titulo="Titulo"/>
    
    
    </header>
);}

export default Home;