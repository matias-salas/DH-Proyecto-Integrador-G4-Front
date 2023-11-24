import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from '../../../../context/UserContext';
import "./Navbar.css"
import { useContext, useState } from 'react';


const Navbar = () => {
const { currentUser, setCurrentUser } = useContext(UserContext);
const [menuVisible, setMenuVisible] = useState(false);
const navigate = useNavigate();
const toggleMenu = () => setMenuVisible(!menuVisible);

const cerrarSesion = () => {
  localStorage.removeItem('user');
  setCurrentUser(null)
  navigate('/');
  toggleMenu();
};

console.log("currentUser desde navbar", currentUser)
  return (
    <header className="navbar-container" style={{ zIndex: 1000 }}>
      <div className="navbar">
        <div className="left-content">
          <Link to="/" className="logo-link">
            <img src="/images/logoDC.png" alt="Logo" className="logo-image" /> 
            <span className="company-slogan">Tu viaje, tu auto, tu libertad!</span>
          </Link>
        </div>
        {/* <div className="right-content">
          {!currentUser && <Link to={"/crearCuenta"}><button className="nav-button">Crear cuenta</button></Link>} 
          {!currentUser ? <Link to={"/inicioSesion"}><button className="nav-button">Iniciar Sesión</button></Link> : <button className="nav-button">M S</button>}
          
          
        </div> */}
        <div className="right-content">
          {!currentUser && <Link to={"/crearCuenta"}><button className="nav-button">Crear cuenta</button></Link>} 
          {!currentUser ? (
            <Link to={"/inicioSesion"}><button className="nav-button">Iniciar Sesión</button></Link>
          ) : (
            <button className="nav-button" onClick={toggleMenu}>M S</button>
          )}

          {menuVisible && (
            <div className="menu-dropdown">
              <Link to="/configuracion" className="menu-item">Configuración</Link>
              <button onClick={cerrarSesion} className="menu-item">Cerrar Sesión</button>
            </div>
          )}
        </div>
        <div className='user'>
        <i className="fa-solid fa-user">
        <FontAwesomeIcon icon={faUser}  />
        </i>
        </div>
      </div>
      
      {/* <div className='App'>
        <h4 className='h4' >Fecha Retiro/Devolucion</h4>
        <i className="calendar">
        <FontAwesomeIcon icon={faCalendarAlt}  />
        </i>
       <DateRangeComp/>
      </div> */}
    </header>
  );
};

export default Navbar;
