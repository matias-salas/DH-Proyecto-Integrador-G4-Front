import React from 'react'
import "./DetallesReserva.css"
import { products } from "../../../productsMock";

const DetallesReserva = () => {
  return (
    <div className='reserva-card'>

        <h1>Detalles de la reserva</h1>

        <div className="caracteristicas">

        <div className="card-details">

        <div className='car-details'>

       <h2>nombre del auto</h2>
       <h3>modelo</h3>
       <h4>descripcion</h4>
       <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjg2ODg5L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzAwNTkwOTQ3NTEyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgxMCwiaGVpZ2h0Ijo0NjV9fX0=" alt="" />
       <h3>fecha seleccionada</h3>

        </div>

          <div className="datos-usuario">

            <h4>username:</h4>
            <h4>mail:</h4>
            <h4>cellphone:</h4>

        </div>


          </div>
         </div>

        <button>Confirmar reserva</button>
    </div>
   
  )
}

export default DetallesReserva