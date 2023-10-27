import "./VerDetalles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretLeft, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Slider from "react-slick";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

  const navegate = useNavigate ()


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
            <h1 className='tittle-year'>Toyota Prius 2021 </h1> 
            <h1 className='price'> $ 30000</h1>
            <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkyMzcwODI1MzM5LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=" alt="carroPrincipal" className='img-carro' 
            
            />
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
         
         <div className='descripcion'>
          <p>Descripción</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit aut debitis exercitationem doloremque, quis obcaecati! Perspiciatis, facilis quos quaerat officia exercitationem necessitatibus error nobis delectus deleniti porro praesentium enim omnis.</p>
          <button className="btn-ver-mas" onClick={handleOpen}>Ver mas</button>
         </div>
          

      </div>
    
    </div>
    
    </>
  )
}

export default VerDetalles