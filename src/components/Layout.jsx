import React from 'react'
import Navegacion from '../components/Navegacion'
import Footer from '../components/Footer'

export default function Layout({ children }) {
    return (
        <div>
            <Navegacion />
            {children}
            <Footer />
        </div>
    )
}
