import "./CategoryCard.css";

const CategoryCard = ({ element }) => {
  return (
    <div className="cat-card">
      <img src={element.img} alt="category" className="cat-img" />
      <div className="cat-infor">
        <p>{element.type}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
