import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import HomeIcon from '@material-ui/icons/Home';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <footer >
            <Row className="footer-row">
                <Col xs="2" className="footer-icon">
                    <WhatsAppIcon />
                </Col>
                <Col xs="10">
                    <a href="https://wa.me/529984855623">+52 (998) 485 5623</a>
                </Col>
            </Row>

            <Row className="footer-row">
                <Col className="footer-icon">
                    <EmailIcon />
                </Col>
                <Col xs="10">
                    <a href="mailto:bausic.mx@gmail.com">bausic.mx@gmail.com</a>
                </Col>
            </Row>

            <Row className="footer-row">
                <Col className="footer-icon">
                    <RoomIcon />
                </Col>
                <Col xs="10">
                    <p>Bodegas lagos Local 1-A, SM-306, MZ-199. Calle Bélgica, Poblado de Alfredo V. Bonfil, Municipio Benito Juárez, Estado Quintana Roo, CP. 77560</p>
                </Col>
            </Row>

            <div className="footer-end">
                <a href="/">
                    <HomeIcon style={{color: "black", fontSize: 40, margin: "1rem"}}/>
                </a>
                <FacebookIcon style={{color: "black", fontSize: 40, margin: "1rem"}}/>
                <LinkedInIcon style={{color: "black", fontSize: 40, margin: "1rem"}}/>
                <TwitterIcon style={{color: "black", fontSize: 40, margin: "1rem"}}/>
                <InstagramIcon style={{color: "black", fontSize: 40, margin: "1rem"}}/>
            </div>
        </footer>
    )
}

export default Footer
