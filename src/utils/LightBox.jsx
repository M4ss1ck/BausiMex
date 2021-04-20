import React, { Component } from 'react'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import muestra1 from '../images/mon/muestra1.svg'
import muestra2 from '../images/mon/muestra2.svg'
import muestra3 from '../images/mon/muestra3.svg'
import muestra4 from '../images/mon/muestra4.svg'
import muestra5 from '../images/mon/muestra5.svg'

const images = [
    muestra1,
    muestra2, 
    muestra3, 
    muestra4, 
    muestra5 
    
];

const galeria = {
  marginBottom: '2rem',
  marginTop: '2rem'
}
const figura ={
  display: 'inline-block'
}

const foto = {
  borderRadius: '10%',
  boxShadow: '1rem 1rem 1rem #212529'
}

export default class LightBox extends Component {
    state = {
          photoIndex: 0,
          isOpen: false,
    }
     
      render() {
        const { photoIndex, isOpen } = this.state;
     
        return (
          <div>
            <div style={galeria}>
              {images.map((image, index) => (
                <figure style={figura} type="button" onClick={() => this.setState({ isOpen: true, photoIndex: index })}>
                <img 
                  style={foto}
                  src={image}
                  alt=""
                  width="250px"
                />
              </figure>))}
              
            </div>
     
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </div>
        );
      }
    }
