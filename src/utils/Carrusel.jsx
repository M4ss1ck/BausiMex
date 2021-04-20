import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import muestra1 from '../images/mon/muestra1.svg'
import muestra2 from '../images/mon/muestra2.svg'
import muestra3 from '../images/mon/muestra3.svg'
import muestra4 from '../images/mon/muestra4.svg'
import muestra5 from '../images/mon/muestra5.svg'

const images = [
    {src: muestra1,
    alt: "Muestra 1",
    class: "d-block w-100",
    tiempo: 1000
  },
    {src: muestra2}, 
    {src: muestra3}, 
    {src: muestra4}, 
    {src: muestra5} 
    
];

const carrusel = {
    backgroundColor: '#212529'
}

export default class Carrusel extends Component {

    
    render() {

        

        return (
            <div style={carrusel}>
                <Carousel>

                    {images.map((image) => (
                    <Carousel.Item interval={image.tiempo ? image.tiempo : 1000}>
                        <img
                        className={image.class}
                        src={image.src}
                        alt={image.alt}
                        />
                        <Carousel.Caption>
                            <h3>Etiqueta de la imagen</h3>
                            <p>Texto opcional</p>
                        </Carousel.Caption>
                    </Carousel.Item>))}
                    
                </Carousel>
            </div>
        )
    }
}
