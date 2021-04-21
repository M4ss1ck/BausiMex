import React from 'react'

import ejemplo from '../images/fab/ejemplo.svg'
import Tarjetas from '../utils/Tarjetas';

const cards = [
    {
        src: ejemplo,
        srcbig: ejemplo,
        class: "tarjeta2",
        alt: "Trozadora",
        text: "Descripción muy motivadora",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: ejemplo,
        srcbig: ejemplo,
        class: "tarjeta2",
        alt: "Taladros",
        text: "Otra descripción muy motivadora",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: ejemplo,
        srcbig: ejemplo,
        class: "tarjeta2",
        alt: "Fresadora",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas.",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: ejemplo,
        srcbig: ejemplo,
        class: "tarjeta2",
        alt: "Software",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas. Estoy reciclando la misma imagen porque soy muy vago",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: ejemplo,
        srcbig: ejemplo,
        class: "tarjeta2",
        alt: "Certificaciones",
        text: "Descripción muy motivadora",
        footer: "La letra pequeña (precio o fecha)"
    }
]


const Fabricacion = () => {
    return (
        <div className="container">
            <div className="primer-elem">
                <h1>Fabricación de Canceles y ventanas de aluminio y vidrio</h1>
            </div>
            <div >
                <h2>Tecnologías que utilizamos:</h2>
                
                <Tarjetas lista = {cards}/>
            </div>
            
        </div>
    )
}

export default Fabricacion
