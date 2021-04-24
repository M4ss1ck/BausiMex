import React from 'react'


const Presentacion = () => {
    const estilo ={
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        flexDirection: 'column',
        width: '100%'
    }
    
    

    return (
        <div className="promo-img">
            <div style = {estilo} >
                <div className = "w-100"   >
                    
                    <p className="eslogan" > La excelencia en Aluminio </p>

                    <div className="cita"  >
                        <blockquote  ><p>Somos una empresa especializada en el diseño, fabricación y montaje de cancelaría de Aluminio y Vidrio, con amplia experiencia en el sector gracias a la capacitación de nuestros asociados. Nuestra dedicación y compromiso con el cliente nos posiciona como la opción evidente si se busca calidad y tiempos competitivos en la terminación de cualquier obra."</p></blockquote>
                    </div>
                </div>
                
            </div>
                <div className="w-100"  style = {{position: "absolute", bottom: "0"}} >
                    <div className="d-flex justify-content-around btn-group-cover" >
                        <a href="/dis" className="btn btn-cover" >Diseño</a>
                        <a href="/fab" className="btn btn-cover" >Fabricación</a>
                        <a href="/mon" className="btn btn-cover" >Montaje</a>
                    </div>
                </div>
            
            
        </div>
    )
}

export default Presentacion
