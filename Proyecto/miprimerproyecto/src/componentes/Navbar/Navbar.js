import React from "react";

export default function Navbar({tituloPagina}) {
    return(
    <nav style={{backgroundColor: "green"}}>
        <h2>{tituloPagina}</h2>
        <ul>
            <li>
                <a href='#'>contacto</a>
            </li>
            <li>
                <a href='#'>contacto</a>
            </li>
            <li>
                <a href='#'>contacto</a>
            </li>
        </ul>

        </nav>
    )
}
 