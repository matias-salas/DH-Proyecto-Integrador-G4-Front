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
      </div>
    </div>
  );
};

export default ProductCard;
