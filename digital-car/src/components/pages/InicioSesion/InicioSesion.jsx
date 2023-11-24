import React, { useState, useEffect, useContext } from 'react';
import { Formik } from "formik";
import { useNavigate, Link } from 'react-router-dom';
import "./InicioSesion.css";
import { UserContext } from '../../../context/UserContext';

const InicioSesion = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {  setCurrentUser } = useContext(UserContext);

    let usuario = 'matiasalas.e@gmail.com';
    let contraseña = 'matie3012';

    const validarCredenciales = (correo, password) => {
        if (correo === usuario && password === contraseña) {
            const obj = {
                correo: correo,
                password: password,
            }
            localStorage.setItem('user', JSON.stringify(obj));
            setCurrentUser(obj);
        }
        return correo === usuario && password === contraseña;
    };

    return (
        <>
            <Formik
                initialValues={{ direccionCorreo: "", contraseña: "" }}
                validate={(valores) => {
                    let errores = {};


                    // Validación para el correo
                    if (!valores.direccionCorreo) {
                        errores.direccionCorreo = "Por favor ingresa una dirección de correo electrónico";
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.direccionCorreo)) {
                        errores.direccionCorreo = "El correo solo puede contener letras, números, guiones y guión bajo.";
                    }

                    // Validación para la contraseña
                    if (!valores.contraseña) {
                        errores.contraseña = "Por favor ingresa una contraseña";
                    } else if (!/^(?=\S*?[A-Za-z])(?=\S*?[0-9])\S{8,}$/.test(valores.contraseña)) {
                        errores.contraseña = "La contraseña debe tener mínimo 8 caracteres sin espacios, debe tener al menos números y letras";
                    }

                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    if (validarCredenciales(valores.direccionCorreo, valores.contraseña, valores.nombre)) {
                        resetForm();
                        navigate('/'); // Redirigir a la ruta del home
                    } else {
                        setError("Credenciales incorrectas");
                    }
                }}>
                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <body className='is'>
                        <div className="contenedoris">
                            <form className="formulariois" onSubmit={handleSubmit}>
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

                                {error && <div className="error">{error}</div>}

                                <button type='submit'>Ingresar</button>
                            </form>
                            
                            <div className='div-botonis'>
                                <p className='texto'>¿Nuevo en nuestra comunidad?</p>
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
