import React from 'react'

import Carrusel from '../utils/Carrusel'
import LightBox from '../utils/LightBox'

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
            <Carrusel images= {images} />

            <hr/>
            <h2>Esto es un lightbox, al hacer clic en una imagen la puedes ver a pantalla completa y desplazarte por las demás</h2>
            <LightBox  />

            
        </div>
    )
}

export default Montaje
