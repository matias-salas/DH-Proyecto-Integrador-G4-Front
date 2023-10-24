import "./ItemList.css";
import ProductCard from "../../common/ProductCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="cards-container">
        {items.map((element) => {
          return <ProductCard key={element.id} element={element} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
