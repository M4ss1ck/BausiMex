import React from 'react'
import Presentacion from './more/Presentacion'
import tropical from '../images/travelpalmtreesymbol.svg'
import edificio from '../images/buildng.svg'
import Plx from 'react-plx'

const Inicio = () => {
    const parallaxData = [
        {
          start: 0,
          end: 300,
          properties: [
            {
              startValue: 1,
              endValue: 0.1,
              property: 'opacity',
            },
          ],
        },
        {
            start: 300,
            end: 500,
            properties: [
              {
                startValue: 0.1,
                endValue: 1,
                property: 'opacity',
              },
              {
                startValue: "#3cb99c",
                endValue: "rgba(50,50,200,0.8)",
                property: "backgroundColor"
              }
            ],
          },
        {
            start: 250,
            end: 500,
            properties: [
              {
                startValue: "rgba(50,50,200,0.8)",
                endValue: "transparent",
                property: "backgroundColor"
              },
            ],
          }
      ];
    
    return (
        <Plx
        className='MyAwesomeParallax'
        parallaxData={ parallaxData } // your parallax effects, see beneath
      >
        
            <Presentacion id="top"/>
            <h1 >Página principal</h1>
            <br/>
            <p>Algo de texto</p>
            <figure>
                <img
                src={tropical}
                alt="playa y palmeras"
                width="300"
                />
                <figcaption>Una imagen para relajarse</figcaption>
            </figure>
            <p>Opiniones de algunos usuarios (Todas muy favorables)</p>
            <p>Alguna tabla, formulario o algo así (o nada de eso)</p>
            <figure>
                <img
                src={edificio}
                alt="edificio"
                width="500"
                />
                <figcaption>Otra imagen. Esta vez un edificio</figcaption>
            </figure>
            <div className="btn-subir">
              <a href="#top">Ir al inicio</a>
            </div>
      </Plx>
        
    )
}

export default Inicio
