import React from 'react'


import dis1 from '../images/dis/diseño1.svg'
import dis2 from '../images/dis/diseño2.svg'
import dis3 from '../images/dis/diseño3.svg'
import Tarjetas from '../utils/Tarjetas';

const cards = [
    {
        src: dis1,
        srcbig: dis1,
        class: "tarjeta",
        alt: "Nombre del primer diseño",
        text: "Descripción muy motivadora",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: dis2,
        srcbig: dis2,
        class: "tarjeta",
        alt: "Otro diseño de calidad superior",
        text: "Otra descripción muy motivadora",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: dis3,
        srcbig: dis3,
        class: "tarjeta",
        alt: "Diseño número 3",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas.",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: dis1,
        srcbig: dis1,
        class: "tarjeta",
        alt: "Un cuarto diseño",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas. Estoy reciclando la primera imagen porque soy muy vago",
        footer: "La letra pequeña (precio o fecha)"
    }
]

const Diseno = () => {
    return (
        <div className="container">
            <div className="primer-elem">
                <h1>Diseño de interiores adaptando las líneas de cancelaría al concepto del inmueble</h1>
                <p>(Aquí va una buena imagen de fondo)</p>
            </div>
            <div >
                <h2>Las líneas que trabajamos son:</h2>
                <Tarjetas lista = {cards}/>
                
            </div>
        </div>
    )
}

export default Diseno
