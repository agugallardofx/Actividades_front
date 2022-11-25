import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer = () => {
    return(
        <footer className="text-bg-dark p-3">
        <div>
        <aside className="aside-footer">
            <h2>BOLETIN DE NOVEDADES
                <span></span>
            </h2>
            <div className="notificacion">
                <input type="email" name="email"
                    placeholder="Ingresa tu email para recibir nuestro boletin de novedades"/>
                <input class="bg-danger" type="button" name="suscribe" value="SUSCRIBIRME"/>
            </div>
        </aside>
    </div>
    <div className="corporacion-footer">
        <p>
            Copyright © 2022- Libreria Criolla - Todos los derechos reservados
        </p>
    </div>
    </footer>
    );}

export default Footer;