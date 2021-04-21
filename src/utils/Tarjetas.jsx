import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ModalImage from "react-modal-image";

const deck ={
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'space-between'
}

export default class Tarjetas extends Component {
    
    render() {
        return (
            <div>
                <CardDeck style={deck}>

                    {this.props.lista.map((cards) => (
                    <Card className={cards.class}>
                        {/* <Card.Img variant="top" src={ejemplo} /> */}
                        <ModalImage 
                            small={cards.src}
                            large={cards.srcbig}
                            alt={cards.alt}
                            imageBackgroundColor="null"
                        />
                        <Card.Body>
                        <Card.Title>{cards.alt}</Card.Title>
                        <Card.Text>
                            {cards.text}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{cards.footer}</small>
                        </Card.Footer>
                    </Card>))}

                </CardDeck>
            </div>
        )
    }
}
