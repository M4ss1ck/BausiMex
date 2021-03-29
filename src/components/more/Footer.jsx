import React from 'react'
import logo from '../../images/bausimex.svg'

const Footer = () => {
    return (
        <div className="footer">
            <p>Hecho con <span role="img">&#128151;</span></p>
            <img 
              src={logo}
              alt="Bausimex"
              
              height="50"
              />
            <h3>&#169; 2021</h3>
        </div>
    )
}

export default Footer
