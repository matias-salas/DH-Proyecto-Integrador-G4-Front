import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ element }) => {
  
  return (
    <div className="product-card">
      <img src={element.img} alt="product" className="product-img" />
      <div className="product-infor">
        <div>
          <p>${element.price}</p>
          <p>{element.title}</p>
        </div>
        <Link to={"/verDetalle"}>
         <button >
          Ver detalles
          </button> 
        </Link>
        
      </div>
    </div>
  );
};

export default ProductCard;
