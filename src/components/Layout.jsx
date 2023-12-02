import React from 'react'
import { Outlet } from 'react-router-dom'; // Outlet is used to render child routes
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = () => {
  return (
    <div>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout