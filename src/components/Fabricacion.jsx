import React from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


import ejemplo from '../images/fab/ejemplo.svg'
const Fabricacion = () => {
    return (
        <div className="container">
            <div className="primer-elem">
                <h1>Fabricación de Canceles y ventanas de aluminio y vidrio</h1>
            </div>
            <div >
                <h2>Tecnologías que utilizamos:</h2>
                <CardDeck >
                    <Card className="tarjeta2">
                        <Card.Img variant="top" src={ejemplo} />
                        <Card.Body>
                        <Card.Title>Trozadora</Card.Title>
                        <Card.Text>
                            Descripción muy motivadora
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">La letra pequeña (precio o fecha)</small>
                        </Card.Footer>
                    </Card>
                    <Card className="tarjeta2">
                        <Card.Img variant="top" src={ejemplo} />
                        <Card.Body>
                        <Card.Title>Taladros</Card.Title>
                        <Card.Text>
                            Otra descripción muy motivadora
                        </Card.Text>
                        
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">La letra pequeña (precio o fecha)</small>
                        </Card.Footer>
                    </Card>
                    <Card className="tarjeta2">
                        <Card.Img variant="top" src={ejemplo} />
                        <Card.Body>
                        <Card.Title>Fresadoras</Card.Title>
                        <Card.Text>
                            Aquí algo de información adicional. Puede ser mucho texto o solamente
                            dos o tres palabras, es muy probable que nadie lo lea de todas formas.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">La letra pequeña (precio o fecha)</small>
                        </Card.Footer>
                    </Card>
                    <Card className="tarjeta2">
                        <Card.Img variant="top" src={ejemplo} />
                        <Card.Body>
                        <Card.Title>Software</Card.Title>
                        <Card.Text>
                            Aquí algo de información adicional. Puede ser mucho texto o solamente
                            dos o tres palabras, es muy probable que nadie lo lea de todas formas.
                            Estoy reciclando la misma imagen porque soy muy vago
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">La letra pequeña (precio o fecha)</small>
                        </Card.Footer>
                    </Card>
                    <Card className="tarjeta2">
                        <Card.Img variant="top" src={ejemplo} />
                        <Card.Body>
                        <Card.Title>Certificaciones</Card.Title>
                        <Card.Text>
                            Aquí algo de información adicional. Puede ser mucho texto o solamente
                            dos o tres palabras, es muy probable que nadie lo lea de todas formas.
                            Estoy reciclando la primera imagen porque soy muy vago
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">La letra pequeña (precio o fecha)</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
        </div>
    )
}

export default Fabricacion
