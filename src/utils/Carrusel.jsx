import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'



const carrusel = {
    backgroundColor: '#212529'
}

export default class Carrusel extends Component {

    
    render() {

        

        return (
            <div style={carrusel}>
                <Carousel>

                    {this.props.images.map((image) => (
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
