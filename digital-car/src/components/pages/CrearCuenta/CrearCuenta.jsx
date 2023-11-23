
import "./CrearCuenta.css";
import React, { useState } from "react";
import { Formik } from "formik";


const CrearCuenta = () => {
    const [creacionCuenta, cambiarCreacionCuenta] = useState(false);
    return (

        <>

            <Formik

                //inicialización de valores del formulario
                initialValues={
                    {
                        nombres: "",
                        apellidos: "",
                        direccionCorreo: "",
                        telefono: "",
                        contraseña: ""
                    }


                }
                validate={(valores) => {
                    let errores = {};

                    //Validación para el nombre 
                    if (!valores.nombres) {
                        errores.nombres = "Por favor igresa tu nombre"
                    } else if (!/^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,}){0,2}$/.test(valores.nombres)) {
                        errores.nombres = "El nombre debe tener mínimo 3 dígitos y solo puede contener letras y espacios. "
                    }


                    //Validación para el apellido 
                    if (!valores.apellidos) {
                        errores.apellidos = "Por favor igresa tu apellido"
                    } else if (!/^[a-zA-Z]{3,}(?:\s[a-zA-Z]{3,}){0,2}$/.test(valores.apellidos)) {
                        errores.nombres = "El apellido debe tener mínimo 3 dígitos y solo puede contener letras y espacios. "
                    }

                    //Validación para el correo
                    if (!valores.direccionCorreo) {
                        errores.direccionCorreo = "Por favor ingresa una dirección de correo electrónico"
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.direccionCorreo)) {
                        errores.direccionCorreo = "El correo solo puede cntener letras, números, guiones y quión bajo. "
                    }

                    //Validacion para el teléfono
                    if (!valores.telefono) {
                        errores.telefono = "Por favor ingresa un número de teléfono"
                    } else if (!/^\d{10}$/.test(valores.telefono)) {
                        errores.telefono = "El número de teléfono no debe contener letras, espacios ni caracteres especiales, debe contener al menos 10 caracteres "
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
                    cambiarCreacionCuenta(true);
                    console.log("Formulario enviado");
                    //<Link to="./"></Link>   Pendiente

                }}>

                {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
                    <body>
                        <div className="contenedor">
                            <img src="digital-car\public\images\logotipo-dc-sinFondo.png" alt="Logo DC Sin fondo" />
                            <form action="" className="formulario" onSubmit={handleSubmit}>

                                <p>Crear Cuenta</p>


                                <div className="nombreCompleto" >
                                    <div className="contenedorinputEspecifico">
                                        <label htmlFor="nombres">Nombres</label>
                                        <input
                                            type="text"
                                            id='nombres'
                                            name='nombres'
                                            placeholder='Sandra Carolina'
                                            value={values.nombres}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />


                                        {touched.nombres && errors.nombres && <div className="textoError">{errors.nombres}</div>}


                                    </div>
                                    <div className="contenedorinputEspecifico" >
                                        <label htmlFor="apellidos">Apellidos</label>
                                        <input
                                            type="text"
                                            id='apellidos'
                                            name='apellidos'
                                            placeholder='Gómez Neira'
                                            value={values.apellidos}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.apellidos && errors.apellidos && <div className="textoError">{errors.apellidos}</div>}

                                    </div>
                                </div>
                                <div className="contenedorinput" >
                                    <label htmlFor="direccionCorreo">Direccion de correo</label>
                                    <input
                                        type="email"
                                        id='direccionCorreo'
                                        name='direccionCorreo'
                                        placeholder='carolina@gmail.com'
                                        value={values.direccionCorreo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.direccionCorreo && errors.direccionCorreo && <div className="textoError">{errors.direccionCorreo}</div>}

                                </div>
                                <div className="contenedorinput" >
                                    <label htmlFor="telefono">Número de teléfono</label>
                                    <input
                                        type="tel"
                                        id='telefono'
                                        name='telefono'
                                        placeholder='3194431159'
                                        value={values.telefono}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.telefono && errors.telefono && <div className="textoError">{errors.telefono}</div>}
                                </div>
                                <div className="contenedorinput" >
                                    <label htmlFor="contraseña">Contraseña</label>
                                    <input
                                        type="password"
                                        id='contraseña'
                                        name='contraseña'
                                        placeholder='carolina123'
                                        value={values.contraseña}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.contraseña && errors.contraseña && <div className="textoError">{errors.contraseña}</div>}
                                </div>
                                <button type='submit' >Crear Cuenta</button>
                            </form>
                        </div>

                    </body>

                )}

            </Formik>



        </>


    )
}

export default CrearCuenta