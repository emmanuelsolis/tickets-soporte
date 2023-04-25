//import React from "react";
import { Container, Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "semantic-ui-css/semantic.min.css";
//import emailjs from 'emailjs/brocom';

function Formulario() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),

      apellido: Yup.string().required("El apellido es obligatorio"),

      email: Yup.string()
        .email("eMail no es válido")
        .required("El eMail es obligatorio"),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Los correos electrónicos no coinciden')
        .required('Debes confirmar el correo electrónico'),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 caracteres")
        .required("La contraseña es requerida"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
        // El primer argumento de oneOf es un array con los posibles valores permitidos.
        // En este caso, solo aceptamos el valor del campo "password" o null (en caso de que esté vacío).
        .required("Debes confirmar la contraseña")
    }),

    onSubmit: (formData) => {
      console.log(formData);
      /*
      emailjs.sendForm("service_7t8xbj8","template_m7abbmb",{
        name: formData.name,
        email: formData.email,
        asunto: formData.asunto,
        });
        */
      alert("En breve, un asesor se pondra en contacto. Gracias");
    }
  });

  return (
    <Container
      style={{
        //height: "100vh",
        height: "100%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white"
      }}
    >
      <h1
        style={{
          color: "black"
        }}
      >
        Ingresa tus datos para registrarte
      </h1>
      <Form style={{ width: "30%" }} onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Nombre"
          name="name"
          onChange={formik.handleChange}
          error={formik.errors.name}
          value={formik.values.name}
        />
        <Form.Input
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={formik.handleChange}
          error={formik.errors.apellido}
          value={formik.values.apellido}
        />
        <Form.Input
          type="text"
          placeholder="Correo electrónico"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email}
          value={formik.values.email}
        />
        <Form.Input
          type="text"
          placeholder="Confirma tu Correo electrónico"
          name="confirmEmail"
          onChange={formik.handleChange}
          error={formik.errors.confirmEmail}
          value={formik.values.confrimEmail}
        />
        <Form.Input
          type="text"
          placeholder="Contraseña"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
          value={formik.values.password}
        />
        <Form.Input
          type="text"
          placeholder="Confirma tu Contraseña"
          name="confirmPassword"
          onChange={formik.handleChange}
          error={formik.errors.confirmPassword}
          value={formik.values.confirmPassword}
        />

        <Button type="submit">Enviar</Button>
        <Button type="button" onClick={formik.handleReset}>
          Limpiar formulario
        </Button>
      </Form>
    </Container>
  );
}

export default Formulario;
