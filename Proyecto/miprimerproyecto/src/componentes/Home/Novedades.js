import React from "react";
import "./Home.css"

const Imagenes = require.context("../Imagenes", true);
const Novedades = () => {
    return (
        <>
            <h1 className="title">Novedades</h1>
            <div className="productos">
                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                            <img src={Imagenes("./Caso Christie.jpg")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>CASO CHRISTIE</h1>
                        <p className="precio">$3499</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>
                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./Cabezas.png")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>CABEZAS</h1>
                        <p className="precio">$1199</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./ocultos.jpg")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>OCULTOS</h1>
                        <p className="precio">$719</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./las-tumbas.jpg")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>LAS TUMBAS</h1>
                        <p className="precio">$2592</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./Petalos.jpg")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>PETALOS DE PAPEL</h1>
                        <p className="precio">$4499</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./Diario-de-viaje.png")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>DIARIO DE VIAJE</h1>
                        <p className="precio">$1199</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./Peter-Pan.webp")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>PETER PAN</h1>
                        <p className="precio">$2689</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="title">Recomendados</h1>

            <div className="productos">
            <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./diario de un escritor.png")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>DIARIO DE UN ESCRITOR</h1>
                        <p className="precio">$1319</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./Todo Diego.jpg")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>TODO DIEGO ES POLITICO</h1>
                        <p className="precio">$2900</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./el club.jpg")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>EL CLUB DE LAS 5AM</h1>
                        <p className="precio">$5449</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./puerta de hierro.png")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>PUERTA DE HIERRO</h1>
                        <p className="precio">$744</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./primer imagen.png")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>EFICACIA Y LEGITIMIVIDAD EN LAS PRACTICAS CIENTIFICAS</h1>
                        <p className="precio">$1200</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./Rebeldia.jpg")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>¿LA REBELDIA SE VOLVIO DERECHA?</h1>
                        <p className="precio">$3890</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto-img">
                        <img src={Imagenes("./billu summers.jpg")} />
                        </div>
                    </a>
                    <div className="producto-footer">
                        <h1>BILLY SUMMERS</h1>
                        <p className="precio">$7649</p>
                    </div>
                    <div className="button">
                        <button className="btn">Añadir al carrito</button>

                        <div>
                            <a href="#" className="btn">
                                Vista
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Novedades;