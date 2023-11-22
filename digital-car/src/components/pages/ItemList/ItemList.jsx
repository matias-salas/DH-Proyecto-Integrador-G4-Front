import "./ItemList.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import CategoryCard from "../../common/CategoryCard/CategoryCard";
import { categories } from "../../../categoriesMock";
import { useLocalFetch } from "../../hooks/useLocalFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div>
        <h4>Buscar por tipo de vehículo</h4>
        {showBackButtonLocal && (
          <button onClick={handleBack}>Volver atrás</button>
        )}
        <div className="category-container" onClick={handleClick}>
          {items.map((element) => {
            return <CategoryCard key={element.id} element={element} />;
          })}
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
