import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DateRangeComp from "../../daterangepicker/DateRange";
import NotFound from "../../common/NotFound/NotFound";
import ProductCard from "../../common/ProductCard/ProductCard";
import CategoryCard from "../../common/CategoryCard/CategoryCard";
import { useLocalFetch } from "../../hooks/useLocalFetch";
import { categories } from "../../../categoriesMock";
import "./ItemList.css";
import { UserContext } from "../../../context/UserContext";

const ItemList = ({ prod }) => {
  const { categoryName } = useParams();
  const [showBackButtonLocal, setShowBackButtonLocal] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [confirmedDateRange, setConfirmedDateRange] = useState({ startDate: null, endDate: null });
  const navigate = useNavigate();
  const { items } = useLocalFetch([], categories);
  const [filteredItems, setFilteredItems] = useState([]);

  const { currentUser } = useContext(UserContext);
  console.log(currentUser)
  const handleClick = () => {
    setShowBackButtonLocal(true);
  };

  const handleBack = () => {
    setShowBackButtonLocal(false);
    navigate(-1);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleDateConfirm = (startDate, endDate) => {
    setConfirmedDateRange({ startDate, endDate });
  };

  useEffect(() => {
    const filtered = prod.filter((item) => {
      // Comprobar si alguna fecha del ítem está dentro del rango seleccionado
      const isDateWithinRange = (date) => {
        const itemDate = new Date(date);
        return (!confirmedDateRange.startDate || itemDate >= confirmedDateRange.startDate) &&
               (!confirmedDateRange.endDate || itemDate <= confirmedDateRange.endDate);
      };
  
      const hasDateWithinRange = item.availableDates.some(isDateWithinRange);
  
      return (!categoryName || item.type === categoryName) &&
             (item.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
              item.type.toLowerCase().includes(busqueda.toLowerCase()) ||
              item.price.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
              item.year.toString().toLowerCase().includes(busqueda.toLowerCase())) &&
             hasDateWithinRange;
    });
    setFilteredItems(filtered);
  }, [busqueda, categoryName, prod, confirmedDateRange]);
  
  
  return (
    <div className="container-menu">
      <div className="barrabusqueda">
        <input
          type="text"
          value={busqueda}
          placeholder="Buscar por marca, modelo, año, precio..."
          onChange={handleChange}
          className="input-barra"
        />

        <div className="DateText">
          <span>Buscar: Desde/Hasta </span>
          <DateRangeComp onConfirm={handleDateConfirm} />

        </div>
      </div>

      <div>
        <div className="cards-cat">
          {showBackButtonLocal && (
            <button onClick={handleBack} className="back-cat">
              Volver
            </button>
          )}
          <div className="category-container">
            {items.map((element) => (
              <div key={element.id} onClick={handleClick}>
                <CategoryCard element={element} />
              </div>
            ))}
          </div>
          <br />
        </div>
            
        <div className="cards-container">
          {filteredItems.length > 0 ? (
            filteredItems.map((element) => (
              <ProductCard key={element.id} element={element} />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
