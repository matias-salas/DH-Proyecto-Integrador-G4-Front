import "./ItemList.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import CategoryCard from "../../common/CategoryCard/CategoryCard";
import { categories } from "../../../categoriesMock";
import { useLocalFetch } from "../../hooks/useLocalFetch";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DateRangeComp from "../../daterangepicker/DateRange";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotFound from "../../common/NotFound/NotFound";


const ItemList = ({ prod }) => {
  const { categoryName } = useParams();
  const [showBackButtonLocal, setShowBackButtonLocal] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  // const [productos, setProductos] = useState(prod);
  const navigate = useNavigate();
  const { items } = useLocalFetch([], categories);
  const handleClick = () => {
    setShowBackButtonLocal(true);
  };
  const handleBack = () => {
    setShowBackButtonLocal(false);
    navigate(-1);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filteredItems(e.target.value);
  };
  // const filtrar = (terminoBusqueda) => {
  //   let resultadosBusqueda = prod.filter((e)=>{
  //     if(e.marca.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || e.type.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || e.price.toString().toLowerCase().includes(terminoBusqueda) || e.year.toString().toLowerCase().includes(terminoBusqueda))
  //     return e;
  //   })
  //   setProductos(resultadosBusqueda)
  //   console.log(productos);
  // }
  const filteredItems = prod.filter((item) => {
    
    return (
      (categoryName ? item.type === categoryName : true) &&
      (item.marca.toLowerCase().includes(busqueda.toLowerCase()) ||
        item.type.toLowerCase().includes(busqueda.toLowerCase()) ||
        item.price.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
        item.year.toString().toLowerCase().includes(busqueda.toLowerCase()))
    );
  });

  return (
    <div className="container-menu">
      <div className="barrabusqueda">
        <input
          type="text"
          value={busqueda}
          placeholder="Buscar por marca, modelo, año..."
          onChange={handleChange}
        />
      </div>
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
            <button onClick={handleBack} className="back-cat">
              Volver
            </button>
          )}
          <div className="category-container">
            {items.map((element) => {
              return (
                <div key={element.id} onClick={handleClick}>
                  <CategoryCard element={element} />
                </div>
              );
            })}
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
