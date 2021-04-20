import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import muestra1 from '../images/mon/muestra1.svg'
import muestra2 from '../images/mon/muestra2.svg'
import muestra3 from '../images/mon/muestra3.svg'
import muestra4 from '../images/mon/muestra4.svg'
import muestra5 from '../images/mon/muestra5.svg'
import LightBox from '../utils/LightBox'

const Montaje = () => {
    return (
        <div className="container">
            <div className="primer-elem">
                <h1>Servicio de montaje</h1>
            </div>
            <div className="cita">
                <blockquote><p>Garantizamos la estética y técnica de nuestro servicio de montaje</p></blockquote>
            </div>
            <h2>Esto es un Carrusel, las imágenes cambian automáticamente y también puede ser controlado por gestos y botones</h2>
            <div className="carrusel">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={muestra1}
                        alt="Primera muestra"
                        />
                        <Carousel.Caption>
                            <h3>Etiqueta de la imagen</h3>
                            <p>Texto opcional</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={muestra2}
                        alt="Segunda muestra"
                        />
                        <Carousel.Caption>
                            <h3>Etiqueta de la imagen</h3>
                            <p>Texto opcional</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={muestra3}
                        alt="Tercera muestra"
                        />
                        {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={muestra4}
                        alt="Cuarta muestra"
                        />
                        {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={muestra5}
                        alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
            <hr/>
            <h2>Esto es un lightbox, al hacer clic en una imagen la puedes ver a pantalla completa y desplazarte por las demás</h2>
            <LightBox />
        </div>
    )
}

export default Montaje
