import { Outlet } from "react-router-dom"
import Navbar from "./Header/Navbar/Navbar"
import Footer from "./Footer/Footer"
import './Layout.css'
import VerDetalles from "../pages/VerDetalles/VerDetalles"


const Layout = () => {
  return (
    <div className="body-container">
        <Navbar />
        <Outlet />
        <Footer />
        
        
    </div>
  )
}

export default Layout