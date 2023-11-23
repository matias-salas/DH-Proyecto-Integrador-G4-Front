import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ element }) => {
  return (
    <Link
      to={`/type/${element.type}`}
      style={{ textDecoration: "none", color: "inherit" }}
      
    >
      <div className="cat-card">
        <img src={element.img} alt="category" className="cat-img" />
        <div className="cat-infor">
          <p>{element.type}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
