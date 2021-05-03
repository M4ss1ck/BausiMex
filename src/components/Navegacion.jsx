import React from 'react'
import {
    Navbar,
    Nav
  } from 'react-bootstrap'
import logo from '../images/bausimex.svg';
// import { FaAlignRight } from 'react-icons/fa';

const Navegacion = () => {

  // fixed="top"

    return (
        <div >
            <Navbar collapseOnSelect  expand="lg"   style={{color: "#112f3e", backgroundColor: "#ffffffd0"}}>
            <Navbar.Brand href="/">
              <div className="logo">
                <img
                  src={logo}
                  alt='BausiMex'
                  // height='4rem'
                
                  className="d-inline-block align-top"
                  />
                  <p className="logo" style={{color: "#112f3e"}}> La excelencia en Aluminio </p>
              </div>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto w-100 flextoy">
                <Nav.Link href='/dis'><h2>Diseño</h2></Nav.Link>
                
                <Nav.Link href='/fab'><h2>Fabricación</h2></Nav.Link>
                <Nav.Link href='/mon'><h2>Montaje</h2></Nav.Link>
                <Nav.Link href='/contacto'><h2>Contacto</h2></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            
        </div>
    )
}

export default Navegacion
