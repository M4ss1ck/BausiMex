import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import diseño from '../images/diseño.jpg'
import fabricacion from '../images/fabricacion.jpg'
import montaje from '../images/montaje.jpg'

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

const Inicio = () => {

  
    
    return (
        <div className="otra-cosa">
          <div className="page-1">
            
              <div className="cita"  >
                <blockquote  ><p><span style = {{backgroundColor: "#ffffff20"}} >Todo lo que necesitas en cancelaría de Aluminio y Vidrio"</span></p></blockquote>
              </div>
            
          </div>
          
          <div className="page-2">

            <Row>
              <Col xs="1">

              </Col>
              <Col xs = "11"  >
                <div className="">
                  <div className="h-50">
                    <div className="cita-2">
                      <p>"Somos una empresa especializada en el diseño, fabricación y montaje de cancelaría de Aluminio y Vidrio, con amplia experiencia en el sector gracias a la capacitación de nuestros asociados."</p>
                    </div>
                  </div>
                  <div className="h-50">
                    <Row>
                      <Col sm>
                        <img
                          src={diseño}
                          alt=""
                          className="redondo"
                        />
                        <h2>Diseño</h2>
                      </Col>
                      <Col sm>
                        <img
                          src={fabricacion}
                          alt=""
                          className="redondo"
                        />
                        <h2>Fabricación</h2>
                      </Col>
                      <Col sm>
                        <img
                          src={montaje}
                          alt=""
                          className="redondo"
                        />
                        <h2>Montaje</h2>
                      </Col>
                    </Row>

                  </div>

                  <div className="h-80">
                    <Row>
                      <Col sm>
                        <div className="card-1">
                          <p >Con nuestros diseñadores e ingenieros, adaptamos las líneas de cancelaría al concepto del inmueble, y garantizamos la calidad de nuestro servicio utilizando materiales de excelencia, proveídos por las reconocidas empresas de Cuprum y Extrusiones Metálicas</p>
                        </div>
                      </Col>
                      <Col sm>
                        <div className="card-2">
                          <p >Fabricamos la cancelaría de Aluminio y Vidrio empleando tecnología de avanzada que garantiza la estética y funcionalidad de cada cancel elaborado</p>
                        </div>
                      </Col>
                      <Col sm>
                      <div className="card-3">
                        <p >Fabricamos la cancelaría de Aluminio y Vidrio empleando tecnología de avanzada que garantiza la estética y funcionalidad de cada cancel elaborado</p>
                      </div>
                      </Col>
                    </Row>
                  </div>


                </div>
                  
                    <div className="w-100">
                      <a href="/galeria" className="btn d-block">
                         <h2><PhotoLibraryIcon style={{color: "aliceblue", fontSize: 40, margin: "1rem"}}/>Galería de Muestra</h2>
                      </a>
                    </div>
                  
              </Col>
            </Row>

            
            
          </div>

          
          

          {/* <div className="btn-subir">
            <a href="#top">Ir al inicio</a>
          </div> */}

        </div>
        
    )
}

export default Inicio
