import React from 'react'


import dis1 from '../images/dis/diseño1.svg'
import dis2 from '../images/dis/diseño2.svg'
import dis3 from '../images/dis/diseño3.svg'
import Slick from '../utils/Slick';

import fot1 from '../images/7.jpg'
import fot2 from '../images/fondo.jpg'
import fot3 from '../images/puerta.jpg'
import fot4 from '../images/dis/fondoDiseño.jpg'
import fot5 from '../images/hanna.png'
import fot6 from '../images/fab/fondoFab.jpg'

const ventanas = [
    {
        src: fot1,
        alt: ""
    },
    {
        src: fot2,
        alt: ""
    },
    {
        src: fot3,
        alt: ""
    },
    {
        src: fot4,
        alt: ""
    },
    {
        src: fot5,
        alt: ""
    },
    {
        src: fot6,
        alt: ""
    }
]

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
    },
    {
        src: dis1,
        srcbig: dis1,
        class: "tarjeta",
        alt: "Un cuarto diseño",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas. Estoy reciclando la primera imagen porque soy muy vago",
        footer: "La letra pequeña (precio o fecha)"
    },
    {
        src: dis1,
        srcbig: dis1,
        class: "tarjeta",
        alt: "Un cuarto diseño",
        text: "Aquí algo de información adicional. Puede ser mucho texto o solamente dos o tres palabras, es muy probable que nadie lo lea de todas formas. Estoy reciclando la primera imagen porque soy muy vago",
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

 const estilo = {
     width: "100%",
     backgroundColor: "#002e4070",
     color: "white",
     paddingLeft: "1rem",
     paddingTop: "0.5rem",
     paddingBottom: "0.5rem"
 }       

const Diseno = () => {
    return (
        <div className="container" style = {{paddingTop: "6rem"}} >
            <h1>Diseños</h1>

            <h2 style={estilo} >Ventanas</h2>
            <div className="container"  style = {{paddingBottom: "4rem"}} >
                <Slick images = {ventanas} />
            </div>

            <h2 style={estilo} >Puertas</h2>
            <div className = "container"  style = {{paddingBottom: "4rem"}} >
                <Slick images = {ventanas} />
            </div>

            <h2 style={estilo} >Canceles</h2>
            <div className = "container"  style = {{paddingBottom: "4rem"}} >
                <Slick images = {cards} />
            </div>

            <h2 style={estilo} >Barandales</h2>
            <div className = "container"  style = {{paddingBottom: "4rem"}} >
                <Slick images = {cards} />
            </div>

            <h2 style={estilo} >Muro Cortina</h2>
            <div className = "container"  style = {{paddingBottom: "4rem"}} >
                <Slick images = {cards} />
            </div>

            <h2 style={estilo} >Louvers</h2>
            <div className = "container"  style = {{paddingBottom: "4rem"}} >
                <Slick images = {cards} />
            </div>
            
        </div>
    )
}

export default Diseno
