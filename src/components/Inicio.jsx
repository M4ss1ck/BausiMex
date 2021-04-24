import React from 'react'
import Presentacion from './more/Presentacion'
import Plx from 'react-plx'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import useWindowDimensions from '../hooks/useWindowDimension'

import fab from '../images/fab/ejemplo.svg'
import dis from '../images/dis/diseño1.svg'
import mon from '../images/mon/muestra1.svg'

const Inicio = () => {

  const { height } = useWindowDimensions();
  
    const parallaxData = [
        {
          start: 0,
          end: height,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: 'opacity',
            },
          ],
        },
        
        // {
        //     start: 300,
        //     end: 500,
        //     properties: [
        //       {
        //         startValue: 0.1,
        //         endValue: 1,
        //         property: 'opacity',
        //       },
        //       {
        //         startValue: "#3cb99c",
        //         endValue: "rgba(50,50,200,0.8)",
        //         property: "backgroundColor"
        //       }
        //     ],
        //   },
        // {
        //     start: 250,
        //     end: 500,
        //     properties: [
        //       {
        //         startValue: "rgba(50,50,200,0.8)",
        //         endValue: "#FFF",
        //         property: "backgroundColor"
        //       },
        //     ],
        //   }
      ];
    
    return (
        <div className="otra-cosa">
          <Plx
            className='MyAwesomeParallax'
            parallaxData={ parallaxData } // your parallax effects, see beneath
            >
          
              <Presentacion id="top" />

          </Plx>

          
          <hr />
          <div className="w-100 text-center" style = {{minHeight: '50vh'}} >

            <CardDeck className="w-100 tarjetas" >

              <Card className = "indivCard" >
                <a href="/dis"><Card.Img variant = "top" src= {dis} /></a>
                <a href="/dis" className = "btn btn-outline-dark"><Card.Title>Diseño</Card.Title></a>
              </Card>

              <Card className = "indivCard">
                <a href="/fab"><Card.Img variant = "top" src= {fab} /></a>
                <a href="/fab" className = "btn btn-outline-dark"><Card.Title>Fabricación</Card.Title></a>
              </Card>

              <Card className = "indivCard">
                <a href="/mon"><Card.Img variant = "top" src={mon}/></a>
                <a href="/mon" className = "btn btn-outline-dark"><Card.Title>Montaje</Card.Title></a>
              </Card>

            </CardDeck>

          </div>

          <div className="btn-subir">
            <a href="#top">Ir al inicio</a>
          </div>

        </div>
        
    )
}

export default Inicio
