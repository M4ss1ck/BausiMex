import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LightBox2 = props => {
    const [indexState, setIndexState] = useState({
      photoIndex: 0,
      isOpen: false
    }
    )

    const { photoIndex, isOpen } = setindexState(indexState);

    return (
        <div>
            <div style={galeria}>
              {this.props.lista.map((image, index) => (
                <figure style={figura} type="button" onClick={() => this.setIndexState({ isOpen: true, photoIndex: index })}>
                <img 
                  style={foto}
                  src={image.src}
                  alt= {image.alt? image.alt : ""}
                  width="250px"
                />
              </figure>))}
              
            </div>
     
            {isOpen && (
              <Lightbox
                mainSrc={this.props.lista[photoIndex].src}
                nextSrc={this.props.lista[(photoIndex + 1) % images.length].src}
                prevSrc={this.props.lista[(photoIndex + images.length - 1) % images.length].src}
                onCloseRequest={() => this.setIndexState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setIndexState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setIndexState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
                imageCaption={images[photoIndex].alt}
                
              />
            )}
        </div>
    )
}

export default LightBox2