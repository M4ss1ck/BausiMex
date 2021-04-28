import React from 'react'

import SlickPlus from '../utils/SlickPlus'

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
        <div className="container" style = {{paddingTop: "6rem"}}>
            {/* <div className="primer-elem" style = {{height: "100vh"}} >
                <h1>Servicio de montaje</h1>
            </div> */}
            {/* <div className="cita">
                <blockquote><p>Garantizamos la estética y técnica de nuestro servicio de montaje</p></blockquote>
            </div> */}
            

            <div className="container" style = {{paddingTop: "2rem"}}>
                <SlickPlus images = {images}/>
            </div>
        </div>
    )
}

export default Montaje
