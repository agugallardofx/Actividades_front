import React from "react";
import "./Home.css";
import Carrusel from "../Carrusel/Carrusel";
import Novedades from "./Novedades"


const Home = () => {
    return(
    <main><section><Carrusel/></section>
            <section>
                <Novedades/>
            </section>
    </main>
);}

export default Home;