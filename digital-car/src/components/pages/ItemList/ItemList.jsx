import "./ItemList.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import CategoryCard from "../../common/CategoryCard/CategoryCard";
import { categories } from "../../../categoriesMock";
import { useLocalFetch } from "../../hooks/useLocalFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateRangeComp from "../../daterangepicker/DateRange";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemList = ({ prod }) => {
  const [showBackButtonLocal, setShowBackButtonLocal] = useState(false);
  const navigate = useNavigate();

  const { items } = useLocalFetch([], categories);
  const handleClick = () => {
    setShowBackButtonLocal(true);
  };
  const handleBack = () => {
    setShowBackButtonLocal(false);
    navigate(-1);
  };

  return (
    <div className="container-menu">
      <div className="App">
        <h4 className="h4">Fecha Retiro/Devolucion</h4>
        <i className="calendar">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </i>
        <DateRangeComp />
      </div>
      <div>
        <div className="cards-cat">
          

          {showBackButtonLocal && (
            <button onClick={handleBack} className="back-cat">Volver</button>
          )}
          <div className="category-container" onClick={handleClick}>
            {items.map((element) => {
              return <CategoryCard key={element.id} element={element} /> ;
            })}
          </div>
          <br />
        </div>

        <div className="cards-container">
          {prod.map((element) => {
            return <ProductCard key={element.id} element={element} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
