import React from 'react'

import Carrusel from '../utils/Carrusel'
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
            <Carrusel />

            <hr/>
            <h2>Esto es un lightbox, al hacer clic en una imagen la puedes ver a pantalla completa y desplazarte por las demás</h2>
            <LightBox />

            
        </div>
    )
}

export default Montaje
