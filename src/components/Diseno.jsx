import React from 'react'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

import dis1 from '../images/dis/diseño1.svg'
import dis2 from '../images/dis/diseño2.svg'
import dis3 from '../images/dis/diseño3.svg'

const Diseno = () => {
    return (
        <div className="container">
            <div className="primer-elem">
                <h1>Diseño de interiores adaptando las líneas de cancelaría al concepto del inmueble</h1>
                <p>(Aquí va una buena imagen de fondo)</p>
            </div>
            <div >
                <h2>Las líneas que trabajamos son:</h2>
                <CardDeck >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dis1} />
                        <Card.Body>
                        <Card.Title>Nombre del primer diseño</Card.Title>
                        <Card.Text>
                            Aquí algo de información adicional. Puede ser mucho texto o solamente
                            dos o tres palabras, es muy probable que nadie lo lea de todas formas.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">La letra pequeña (precio o fecha)</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dis2} />
                        <Card.Body>
                        <Card.Title>Otro diseño de calidad superior</Card.Title>
                        <Card.Text>
                            Esta tarjeta incluye un botón para hacer algo que no he implementado.
                            Mala mía.{' '}
                        </Card.Text>
                        <Button variant="primary">Hacer un pedido</Button>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">La letra pequeña (precio o fecha)</small>
                        </Card.Footer>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={dis3} />
                        <Card.Body>
                        <Card.Title>Diseño número 3</Card.Title>
                        <Card.Text>
                            Aquí algo de información adicional. Puede ser mucho texto o solamente
                            dos o tres palabras, es muy probable que nadie lo lea de todas formas.
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

export default Diseno
