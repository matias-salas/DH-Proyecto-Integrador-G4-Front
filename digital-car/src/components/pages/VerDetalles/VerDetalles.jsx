import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faUser, faCar, faShieldHalved, faSuitcase, faSnowflake, faGear } from "@fortawesome/free-solid-svg-icons";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import "./VerDetalles.css";
import useFetchID from "../../hooks/useFetchID";
import { products } from "../../../productsMock";
import DateCalendarValue from "../../common/BasicDateRangeCalendar/BasicDateRangeCalendar"; // Asegúrate de usar la ruta correcta
import dayjs from 'dayjs';
import zIndex from "@mui/material/styles/zIndex";

const CarFeature = ({ icon, title, value }) => (
  <div className="feature-icon">
    <FontAwesomeIcon icon={icon} className="feature-icon-image" />
    <h4 className="feature-title">{title}</h4>
    <h5 className="feature-value">{value}</h5>
  </div>
);

const VerDetalles = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para manejar la carga
  const { productSelected } = useFetchID({}, products);
  const [mainImage, setMainImage] = useState("placeholder.jpg"); // Usa una imagen de placeholder
  console.log(productSelected)
  useEffect(() => {
    if (productSelected.img) {
      setMainImage(productSelected.img);
      setIsLoading(false); // Actualiza isLoading a false cuando los datos estén cargados
    }
  }, [productSelected.img]);

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };


  const [scrollToCalendar, setScrollToCalendar] = useState(false);
  const calendarRef = useRef(null);

  const scrollToCalendarFunc = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (scrollToCalendar) {
      scrollToCalendarFunc();
      setScrollToCalendar(false);
    }
  }, [scrollToCalendar]);
 

  if (isLoading) {
    return <div>Esperando...</div>; // Muestra esto mientras isLoading es true
  }
  return (
    <>
      <div className='body-container-details'>
        <div className='container-details'>
          <Link to={"/"} className="back-link">
            <FontAwesomeIcon icon={faCaretLeft} className='icono-atras' />
          </Link>
          <Grid container spacing={2}>

            <Grid item xs={12} md={8}>
              <div className="container-imagenes">

                <div className="imagenes-secundarias">
                <img src={productSelected.img} alt="Carro secundario 1" onClick={() => handleImageClick(productSelected.img)} />

                <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0lOVEVSSU9SLWZseWVyLTE2OTIzNzIzMDI1MjAuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODEwLCJoZWlnaHQiOjQ2NX19fQ==" alt="Carro secundario 1" onClick={() => handleImageClick("https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0lOVEVSSU9SLWZseWVyLTE2OTIzNzIzMDI1MjAuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODEwLCJoZWlnaHQiOjQ2NX19fQ==")} />
                <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0lOVEVSSU9SLWxldmVyLTE2OTIzNzI0Nzc1MjUuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODEwLCJoZWlnaHQiOjQ2NX19fQ==" alt="Carro secundario 2" onClick={() => handleImageClick("https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0lOVEVSSU9SLWxldmVyLTE2OTIzNzI0Nzc1MjUuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODEwLCJoZWlnaHQiOjQ2NX19fQ==")} />
                <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWJhY2stMTY5MjM3MDY1MTA2Ny5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MTAsImhlaWdodCI6NDY1fX19" alt="Carro secundario 3" onClick={() => handleImageClick("https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWJhY2stMTY5MjM3MDY1MTA2Ny5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MTAsImhlaWdodCI6NDY1fX19")} />
                <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWJhY2stMTY5MjM3MDY1MTA2Ny5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MTAsImhlaWdodCI6NDY1fX19" alt="Carro secundario 3" onClick={() => handleImageClick("https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWJhY2stMTY5MjM3MDY1MTA2Ny5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MTAsImhlaWdodCI6NDY1fX19")} />
                <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWJhY2stMTY5MjM3MDY1MTA2Ny5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MTAsImhlaWdodCI6NDY1fX19" alt="Carro secundario 3" onClick={() => handleImageClick("https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMjY1NDM0L0VYVEVSSU9SLWJhY2stMTY5MjM3MDY1MTA2Ny5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MTAsImhlaWdodCI6NDY1fX19")} />
                </div>
                <div className="imagen-principal">
                  <img src={mainImage} alt="Carro Principal" className='img-carro' />
                </div>
              </div>
            </Grid>


            <Grid item xs={12} s={6} md={4}>
              <div className='caracteristicas'>
                <h1 className='tittle-year'>{productSelected.title} - {productSelected.model} ({productSelected.year})</h1>
                <h2 className='type'>{productSelected.type}</h2>
                <h1 className='price'>$ {productSelected.price}</h1>

                <div className='descripcion'>
                  <h2>Descripción</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores cum numquam officiis quisquam ducimus facilis rem alias eveniet. Asperiores nulla quo est ducimus adipisci dolores aliquam neque incidunt? Maxime.</p>
                  <Button variant="contained" style={{ zIndex: 1 }} onClick={() => setScrollToCalendar(true)}>Ver disponibilidad</Button>
                </div>
              </div>
            </Grid>
          </Grid>

          <div className='caracteristicas-extra'>
            <h3>QUÉ OFRECE ESTE AUTO?</h3>
            <hr />
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4}>
                {/* Ejemplo de CarFeature */}
                <CarFeature icon={faUser} title="Pasajeros" value="5" />
              </Grid>
              <Grid item xs={6} sm={4}>
                {/* Ejemplo de CarFeature */}
                <CarFeature icon={faCar} title="Puertas" value="5" />
              </Grid>
              {/* Agregar más elementos CarFeature según sea necesario */}
              <Grid item xs={6} sm={4}>
                {/* Ejemplo de CarFeature */}
                <CarFeature icon={faShieldHalved} title="Seguro" value="Si" />
              </Grid>

              <Grid item xs={6} sm={4}>
                {/* Ejemplo de CarFeature */}
                <CarFeature icon={faSuitcase} title="Maletas" value="3" />
              </Grid>

              <Grid item xs={6} sm={4}>
                {/* Ejemplo de CarFeature */}
                <CarFeature icon={faSnowflake} title="Aire Acondicionado" value="Si" />

              </Grid>

              <Grid item xs={6} sm={4}>
                {/* Ejemplo de CarFeature */}
                <CarFeature icon={faGear} title="Transmisión" value="Automática" />
              </Grid>

            </Grid>

          </div>
          <hr />

          <Grid container spacing={2} className="calendario-reserva-container">
            <Grid item xs={12}  s={12}  md={6}>
            <div className="calendario-contenedor"  ref={calendarRef}>
              <DateCalendarValue availableDates={productSelected.availableDates} />
            </div>
            </Grid>
            <Grid item xs={12} s={12}  md={6}>
              <div className="reserva-descripcion">
                <h3>Detalles de la Reserva</h3>
                <p>Aquí puedes confirmar las fechas de tu reserva.</p>
                <Link to={"/detallesReserva"}>
                <Button variant="contained" color="primary">Confirmar Reserva</Button>
                </Link>
              </div>
            </Grid>
          </Grid>
          </div>

      </div>

    </>
  )
}

export default VerDetalles