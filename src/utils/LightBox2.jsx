import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LightBox2 = props => {
    const [imageState, setImageState] = useState({
        images: [
            {src: muestra1,
            alt: "Muestra 1"
          },
            {src: muestra2}, 
            {src: muestra3}, 
            {src: muestra4}, 
            {src: muestra5} 
            
        ]
    }
    )

    return (
        <div>
            <div style={galeria}>
              {imageState.map((image, index) => (
                <figure style={figura} type="button" onClick={() => this.setState({ isOpen: true, photoIndex: index })}>
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
                mainSrc={images[photoIndex].src}
                nextSrc={images[(photoIndex + 1) % images.length].src}
                prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
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
                imageCaption={images[photoIndex].alt}
                
              />
            )}
        </div>
    )
}

export default LightBox2