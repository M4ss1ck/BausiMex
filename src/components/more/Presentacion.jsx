import React from 'react'

import logo from '../../images/bausimex.svg';

const Presentacion = () => {
    const estilo ={
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    }
    const imagen = {
        marginRight: 'auto',
        maxWidth: '70%'
    }
    const frase = {
        marginLeft: 'auto',
        textAlign: 'right'
    }

    return (
        <div className="promo-img">
            <div style = {estilo} >
                <div style ={{width: '50%', marginLeft: 'auto', marginRight: 'auto' }} >
                    <img
                        src = {logo}
                        alt = "Logo de la empresa"
                        style = {imagen}
                    />
                    <h2 style = {frase} > La excelencia en Aluminio </h2>
                </div>
            </div>
        </div>
    )
}

export default Presentacion
