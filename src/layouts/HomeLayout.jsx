import React from 'react'
import Navbar from '../components/Header/components/Navbar'
import Banner from '../pages/Homepage/components/banner/Banner'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const HomeLayout = () => {
    return (
        <>
           <Navbar/> 
           <Banner/>
           <Outlet/>
           <Footer/>
        </>
    )
}

export default HomeLayout
