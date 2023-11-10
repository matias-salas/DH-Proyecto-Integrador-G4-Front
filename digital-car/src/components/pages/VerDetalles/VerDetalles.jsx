import "./VerDetalles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretLeft, faAngleLeft, faAngleRight, faUser, faCar, faShieldHalved, faSuitcase, faSnowflake, faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Slider from "react-slick";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetchID from "../../hooks/useFetchID";
import { products } from "../../../productsMock";


const Arrow = (props) => {
  const { direction, onClick } = props;

  return (
      <button className={`arrow arrow-${direction}`} onClick={onClick}>
          <FontAwesomeIcon icon={direction === 'prev' ? faAngleLeft : faAngleRight} size="2x" />
      </button>
  );
};

const ImageCarousel = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <Arrow direction="next" />,
      prevArrow: <Arrow direction="prev" />,
      centerMode: true,
      centerPadding: "60px"
  };
  
  return (
    <Slider {...settings} className='carousel-container'>
          <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLXBpbG90U2lkZS0xNjkyMzcyNjA0NjkxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=" alt="carroAdentro1"  className='carroAdentro1'/>
          <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0lOVEVSSU9SLWZseWVyLTE2OTIzNzIzMDI1MjAuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODEwLCJoZWlnaHQiOjQ2NX19fQ==" alt="carroAdentro2" />
          <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0lOVEVSSU9SLWxldmVyLTE2OTIzNzI0Nzc1MjUuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODEwLCJoZWlnaHQiOjQ2NX19fQ==" alt="arroAdentro3" />
          <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWJhY2stMTY5MjM3MDY1MTA2Ny5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MTAsImhlaWdodCI6NDY1fX19" alt="arroAdentro4" />
    </Slider>
  );
}




const VerDetalles = () => {
  const [open, setOpen] = useState(false);
  const { productSelected } = useFetchID({}, products);


  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    
    <>
    
    <div className='body-container-details'>
    
      <div className='container-details'>
        
        <Link to={"/"}><FontAwesomeIcon icon={faCaretLeft} className='icono-atras'  /></Link>
      
        <div className='contenedor-principal'>

          <div className='caracteristicas'>
            <h1 className='tittle-year'>{productSelected.title}</h1> 
            <h1 className='price'> {productSelected.price}</h1>
            <img src={productSelected.img}  alt="carroPrincipal" className='img-carro' />

            <div className='descripcion'>
             <h2>Descripción</h2>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
             <button className="btn-ver-mas" onClick={handleOpen}>Ver mas</button>
           </div>

           

            
          </div>

          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Slide}
          >
            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close" className="carousel-close-button">
              <CloseIcon />
            </IconButton>
            <ImageCarousel />
          </Dialog>

          <div className='container-imagenes'>
            <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLXBpbG90U2lkZS0xNjkyMzcyNjA0NjkxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=" alt="carroAdentro1"  className='carroAdentro1'/>
            <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0lOVEVSSU9SLWZseWVyLTE2OTIzNzIzMDI1MjAuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODEwLCJoZWlnaHQiOjQ2NX19fQ==" alt="carroAdentro2" />
            <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0lOVEVSSU9SLWxldmVyLTE2OTIzNzI0Nzc1MjUuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODEwLCJoZWlnaHQiOjQ2NX19fQ==" alt="arroAdentro3" />
            <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWJhY2stMTY5MjM3MDY1MTA2Ny5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MTAsImhlaWdodCI6NDY1fX19" alt="arroAdentro4" />
          </div>

       </div>
         
         

      <div className='caracteristicas-extra'>
        <h3>QUE OFRECE ESTE AUTO?</h3>

        <hr />

        <div className='bloque1'>
        <div className="icon">
        <i className="fa-solid fa-user">
        <FontAwesomeIcon icon={faUser}  />
        </i>
      <h4> cantidad de personas: </h4>
      <h5 className="atributo">5</h5>
        </div>
        <div className="icon">
        <i className="fa-solid fa-user">
        <FontAwesomeIcon icon={faCar}  />
        </i>
      <h4> caja de cambios: </h4>
      <h5 className="atributo">Automatico</h5>
        </div>
        <div className="icon">
        <i className="fa-solid fa-user">
        <FontAwesomeIcon icon={faShieldHalved}  />
        </i>
      <h4> airbag: </h4>
      <h5 className="atributo">Si</h5>
        </div>
        </div>

        <div className='bloque2'>
        <div className="icon">
        <i className="fa-solid fa-user">
        <FontAwesomeIcon icon={faSuitcase}  />
        </i>
      <h4> cantidad de valijas: </h4>
      <h5 className="atributo">3</h5>
        </div>
        <div className="icon">
        <i className="fa-solid fa-user">
        <FontAwesomeIcon icon={faSnowflake}  />
        </i>
      <h4> aire acondicionado: </h4>
      <h5 className="atributo">Si</h5>
        </div>
        <div className="icon">
        <i className="fa-solid fa-user">
        <FontAwesomeIcon icon={faGear}  />
        </i>
      <h4> frenos ABS: </h4>
      <h5 className="atributo">Si</h5>
        </div>
        </div>

      </div>
      
      
      </div>
    </div>
    
    </>
  )
}

export default VerDetalles