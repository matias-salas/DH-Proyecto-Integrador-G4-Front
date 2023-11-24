import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="notfound">
      <img
        src="https://images.kavak.services/ar/assets/images/catalogue/svg/search-results-all.svg"
        alt="nofound"
        className="notfoundimg"
      />

      <h3 className="notfoundh3">No encontramos resultados para tu búsqueda</h3>

      <button className="back-cat" onClick={handleBack}>
        Volver
      </button>
    </div>
  );
};

export default NotFound;
