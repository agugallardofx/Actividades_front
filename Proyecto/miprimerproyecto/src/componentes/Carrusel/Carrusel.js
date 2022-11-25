import Carousel from 'react-bootstrap/Carousel';
import Imagen1  from './carrusel 1.webp'
import Imagen2 from './carrusel 2.webp'
import Imagen3 from './carrusel 3.webp'
function Carrusel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Imagen1}
                    alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Imagen2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Imagen3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;