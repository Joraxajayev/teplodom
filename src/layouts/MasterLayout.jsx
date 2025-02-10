import React from 'react'
import Navbar from '../components/Header/components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const MasterLayout = () => {
    return (
        <>
           <Navbar/> 
           <Outlet/>
           <Footer/>
        </>
    )
}

export default MasterLayout
