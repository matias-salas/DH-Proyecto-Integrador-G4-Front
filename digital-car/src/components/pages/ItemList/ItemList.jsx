import "./ItemList.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import CategoryCard from "../../common/CategoryCard/CategoryCard";
import { categories } from "../../../categoriesMock";
import { useLocalFetch } from "../../hooks/useLocalFetch";

const ItemList = ({ prod }) => {
  
  const { items }  = useLocalFetch([], categories);

  return (
    <>
      <div className="container-menu">
        <div>
          <h4>Buscar por tipo de vehículo</h4>
          <div className="category-container">
            {items.map((element) => {
              return <CategoryCard key={element.id} element={element} />;
            })}
          </div>
        </div>
        <div className="cards-container">
          {prod.map((element) => {
            return <ProductCard key={element.id} element={element} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ItemList;
