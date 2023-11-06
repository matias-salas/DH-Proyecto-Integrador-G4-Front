import React from 'react';
import "./VerDetalles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';





const VerDetalles = () => {

  const navegate = useNavigate ()
  return (
    
    <>
    
    <div className='body-container-details'>
    
      <div className='container-details'>
        
        <Link to={"/"}><FontAwesomeIcon icon={faCaretLeft} className='icono-atras'  /></Link>
      
        <div className='contenedor-principal'>

          <div className='caracteristicas'>
            <h1 className='tittle-year'>Toyota Prius 2021 </h1> 
            <h1 className='price'> $ 30000</h1>
            <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNjkyMzcwODI1MzM5LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=" alt="carroPrincipal" className='img-carro' />
          </div>

          <div className='container-imagenes'>
            <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLXBpbG90U2lkZS0xNjkyMzcyNjA0NjkxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=" alt="carroAdentro1"  className='carroAdentro1'/>
            <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0lOVEVSSU9SLWZseWVyLTE2OTIzNzIzMDI1MjAuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODEwLCJoZWlnaHQiOjQ2NX19fQ==" alt="carroAdentro2" />
            <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0lOVEVSSU9SLWxldmVyLTE2OTIzNzI0Nzc1MjUuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODEwLCJoZWlnaHQiOjQ2NX19fQ==" alt="arroAdentro3" />
            <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWJhY2stMTY5MjM3MDY1MTA2Ny5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MTAsImhlaWdodCI6NDY1fX19" alt="arroAdentro4" />
          </div>

       </div>
         
         <div className='descripcion'>
          <h3>Descripción</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit aut debitis exercitationem doloremque, quis obcaecati! Perspiciatis, facilis quos quaerat officia exercitationem necessitatibus error nobis delectus deleniti porro praesentium enim omnis.</p>
         </div>

      <div className='caracteristicas-extra'>
        <h3>QUE OFRECE ESTE AUTO?</h3>

        <hr />

        <div className='bloque1'>
        <div>
        <i class="fa-solid fa-user"></i>
      <h4> cantidad de personas: </h4>
        </div>
        <div>
      <h4> caja de cambios: </h4>
        </div>
        <div>
      <h4> airbag: </h4>
        </div>
        </div>

        <div className='bloque2'>
        <div>
      <h4> cantidad de valijas: </h4>
        </div>
        <div>
      <h4> aire acondicionado: </h4>
        </div>
        <div>
      <h4> frenos ABS: </h4>
        </div>
        </div>



      </div>
      
      
      </div>
    </div>
    
    </>
  )
}

export default VerDetalles