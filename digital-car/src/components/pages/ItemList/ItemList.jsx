import "./ItemList.css";
import SearchAppBar from "../../common/Search/SearchAppBar";
import ProductCard from "../../common/ProductCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <>
      <div>
        <SearchAppBar />
      </div>
      <div className="cards-container">
        {items.map((element) => {
          return <ProductCard key={element.id} element={element} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
