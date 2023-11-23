import React, {useState} from 'react';
import "./InicioSesion.css";
import { Formik } from "formik";
import { Link } from 'react-router-dom';


const InicioSesion = () => {
    const [inicioSesion, cambiarInicioSesion] = useState(false);

	return (
	
        <>
        <Formik

            //inicialización de valores del formulario
            initialValues={
                {
                    direccionCorreo: "",
                    contraseña: "",
                }


            }
            validate={(valores) => {
                let errores = {};

                //Validación para el correo
                if (!valores.direccionCorreo) {
                    errores.direccionCorreo = "Por favor ingresa una dirección de correo electrónico"
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.direccionCorreo)) {
                    errores.direccionCorreo = "El correo solo puede cntener letras, números, guiones y quión bajo. "
                }

               

                //Validacion para la contraseña
                if (!valores.contraseña) {
                    errores.contraseña = "Por favor ingresa una contraseña"
                } else if (!/^(?=\S*?[A-Za-z])(?=\S*?[0-9])\S{8,}$/.test(valores.contraseña)) {
                    errores.contraseña = "La contraseña debe tener mínimo 8 caracteres sin espacios, debe tener al menos numeros y letras "
                }

                return errores;

            }}

            onSubmit={(valores, { resetForm }) => {
                resetForm(); //Resetear el formulario apenas envíe los datos
                cambiarInicioSesion(true);
                console.log("Formulario enviado");
                //<Link to="./"></Link>   Pendiente

            }}>

            {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                <body className='is'>
                    <div className="contenedoris">
                        <form action="" className="formulariois" onSubmit={handleSubmit}>

                        <p>Iniciar Sesion</p>


                            <div className="contenedorinputis" >
                                <label htmlFor="direccionCorreo">Direccion de correo</label>
                                <input
                                    type="email"
                                    id='direccionCorreo'
                                    name='direccionCorreo'
                                    placeholder='Ingresa tu correo'
                                    value={values.direccionCorreo}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.direccionCorreo && errors.direccionCorreo && <div className="textoError">{errors.direccionCorreo}</div>}

                            </div>
                        
                            <div className="contenedorinputis" >
                                <label htmlFor="contraseña">Contraseña</label>
                                <input
                                    type="password"
                                    id='contraseña'
                                    name='contraseña'
                                    placeholder='Ingresa tu contraseña'
                                    value={values.contraseña}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.contraseña && errors.contraseña && <div className="textoErroris">{errors.contraseña}</div>}
                            </div>
                            <button type='submit'  >Ingresar</button>
                        </form>

                        <p className='texto'>Nuevo en nuestra comunidad</p>
                       <div>
                       <Link to={"/crearCuenta"}><button className='botonis'>Crear cuenta</button></Link>
                       </div>
                        
                    </div>

                </body>

            )}

        </Formik>



    </>
	);
}
 
export default InicioSesion;