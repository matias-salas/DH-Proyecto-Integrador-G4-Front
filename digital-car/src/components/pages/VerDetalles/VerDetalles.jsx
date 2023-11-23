import { useState, useEffect } from "react";
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
  const { productSelected } = useFetchID({}, products);
  const [mainImage, setMainImage] = useState("placeholder.jpg"); // Usa una imagen de placeholder

  useEffect(() => {
    if (productSelected.img) {
      setMainImage(productSelected.img);
    }
  }, [productSelected.img]);

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const Dates = [dayjs('2023-11-17'), dayjs('2023-11-18'), dayjs('2023-11-19'), 
                 dayjs('2023-11-20'), dayjs('2023-11-21'), dayjs('2023-11-22'),
                 dayjs('2023-11-23'), dayjs('2023-11-24'), dayjs('2023-11-25'),
                 dayjs('2023-11-29'), dayjs('2023-11-30'), dayjs('2023-12-01'),
                 dayjs('2023-12-02'), dayjs('2023-12-03'), dayjs('2023-12-10'),
                 dayjs('2023-12-05'), dayjs('2023-12-06'), dayjs('2023-12-07'),
                 dayjs('2023-12-11'), dayjs('2023-12-12'), dayjs('2023-12-13'),
                 dayjs('2023-12-14'), dayjs('2023-12-15'), dayjs('2023-12-16'),
                 dayjs('2023-12-17'), dayjs('2023-12-18'), dayjs('2023-12-19'),
                 dayjs('2023-12-26'), dayjs('2023-12-27'), dayjs('2023-12-28'),
                 dayjs('2023-12-29'), dayjs('2023-12-30'), dayjs('2023-12-31')];

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
                <h1 className='tittle-year'>{productSelected.title}</h1>
                <h1 className='price'>$ {productSelected.price}</h1>

                <div className='descripcion'>
                  <h2>Descripción</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                  <Button variant="contained" style={{ zIndex: 1 }}>Ver disponibilidad</Button>
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
            <div className="calendario-contenedor">
              <DateCalendarValue availableDates={Dates} />
            </div>
            </Grid>
            <Grid item xs={12} s={12}  md={6}>
              <div className="reserva-descripcion">
                <h3>Detalles de la Reserva</h3>
                <p>Aquí puedes confirmar las fechas de tu reserva.</p>
                <Button variant="contained" color="primary">Confirmar Reserva</Button>
              </div>
            </Grid>
          </Grid>
          </div>

      </div>

    </>
  )
}

export default VerDetalles