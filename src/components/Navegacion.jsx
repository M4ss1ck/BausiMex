import React from 'react'
import {
    Navbar,
    Nav
  } from 'react-bootstrap'
import logo from '../images/bausimex.svg';
// import { FaAlignRight } from 'react-icons/fa';

const Navegacion = () => {

    

    return (
        <div>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <img 
                src={logo}
                alt='BausiMex'
                height='8rem'
                className="d-inline-block align-top logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto w-100 flextoy">
                <Nav.Link href='/contacto'>Contacto</Nav.Link>
                <Nav.Link href='/fab'>Fabricación</Nav.Link>
                <Nav.Link href='/mon'>Montaje</Nav.Link>
                <Nav.Link href='/dis'>Diseño</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            
        </div>
    )
}

export default Navegacion
