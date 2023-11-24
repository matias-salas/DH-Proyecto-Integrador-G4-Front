import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <img
        src="https://images.kavak.services/ar/assets/images/catalogue/svg/search-results-all.svg"
        alt="nofound"
        className="notfoundimg"
      />

      <h3 className="notfoundh3">No encontramos resultados para tu búsqueda</h3>

      <Link to={"/"}>
        <button className="back-cat">Volver</button>
      </Link>
    </div>
  );
};

export default NotFound;
