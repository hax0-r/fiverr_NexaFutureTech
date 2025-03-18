import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

interface WrapperProps {
    children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Wrapper