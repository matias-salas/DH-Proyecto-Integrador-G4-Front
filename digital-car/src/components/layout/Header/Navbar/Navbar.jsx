import { Link } from 'react-router-dom';
import SearchAppBar from "../../../common/Search/SearchAppBar";
import "./Navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="left-content">
          <Link to="/" className="logo-link">
            <img src="/images/logoDC.png" alt="Logo" className="logo-image" /> 
            <span className="company-slogan">Tu viaje, tu auto, tu libertad!</span>
          </Link>
        </div>
        <div className="right-content">
          <button className="nav-button">Crear cuenta</button>
          <button className="nav-button">Iniciar sesión</button>
        </div>
        <div className='user'>
        <i className="fa-solid fa-user">
        <FontAwesomeIcon icon={faUser}  />
        </i>
        </div>
      </div>
      <SearchAppBar />
    </header>
  );
};

export default Navbar;
