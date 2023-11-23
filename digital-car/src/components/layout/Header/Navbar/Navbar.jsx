import { Link } from 'react-router-dom';
import SearchAppBar from "../../../common/Search/SearchAppBar";
import "./Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css"


const Navbar = () => {

  return (
    <header className="navbar-container" style={{ zIndex: 1000 }}>
      <div className="navbar">
        <div className="left-content">
          <Link to="/" className="logo-link">
            <img src="/images/logoDC.png" alt="Logo" className="logo-image" /> 
            <span className="company-slogan">Tu viaje, tu auto, tu libertad!</span>
          </Link>
        </div>
        <div className="right-content">
          <Link to={"/crearCuenta"}><button className="nav-button">Crear cuenta</button></Link>
          
          <button className="nav-button">Iniciar sesión</button>
        </div>
        <div className='user'>
        <i className="fa-solid fa-user">
        <FontAwesomeIcon icon={faUser}  />
        </i>
        </div>
      </div>
      <SearchAppBar />
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
