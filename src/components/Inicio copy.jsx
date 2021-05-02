import React from 'react'
import Presentacion from './more/Presentacion'
import Plx from 'react-plx'

import useWindowDimensions from '../hooks/useWindowDimension'



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

          <br />
          
          <div className="page-2">
            <div className="d-flex justify-content-around tarjetas">
              
              <div className="indivCard">
                <a href="/dis">
                  <h1 className="btn btn-cover2">Diseño</h1>
                </a>
                <div className="card-1">
                <div className="fondo-blanco">
                    <p className="text-center"  >Con nuestros diseñadores e ingenieros, adaptamos las líneas de cancelaría al concepto del inmueble, y garantizamos la calidad de nuestro servicio utilizando materiales de excelencia, proveídos por las reconocidas empresas de Cuprum y Extrusiones Metálicas</p>
                  </div>
                </div>
              </div>

              <div className="indivCard">
                <a href="/fab">
                  <h1 className="btn btn-cover2">Fabricación</h1>
                </a>
                <div className="card-2">
                <div className="fondo-blanco">
                    <p className="text-center"  >Fabricamos la cancelaría de Aluminio y Vidrio empleando tecnología de avanzada que garantiza la estética y funcionalidad de cada cancel elaborado</p>
                  </div>
                </div>
              </div>

              <div className="indivCard">
                <a href="/mon">
                  <h1 className="btn btn-cover2" >Montaje</h1>
                </a>
                <div className="card-3">
                  <div className="fondo-blanco">
                    <p className="text-center"  >Garantizamos la estética y técnica de nuestro servicio de montaje ya que poseemos la capacidad para montajes de alto riesgo y empleamos materiales de gama premium para la realización de anclajes y sellos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          {/* <div className="btn-subir">
            <a href="#top">Ir al inicio</a>
          </div> */}

        </div>
        
    )
}

export default Inicio
