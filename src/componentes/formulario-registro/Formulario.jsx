
 

//import React from "react";
import { Container, Form, Button } from "semantic-ui-react";
import { useFormik } from 'formik';
import * as Yup from "yup";
import 'semantic-ui-css/semantic.min.css'
//import emailjs from 'emailjs/brocom';


function Formulario() {
      const formik = useFormik({
      initialValues: {
        name: "",
        phone: "",
        email: "",
        asunto: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),

      phone: Yup.number()
      .required("El telefono es obligatorio")
      .oneOf([Yup.ref("phone")],"El número de telefono debe ser de 10 digitos"),
      
      email: Yup.string().email("eMail no es válido")
      .required("El eMail es obligatorio"),

      asunto: Yup.string().required("El asunto es obligatorio"),
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
   
    },
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
        backgroundColor: "white",
      }}
      >
      <h1
       style={{
        color: "black",
      }}
      >Formulario de Contacto</h1>
      <Form style={{ width:"30%" }} onSubmit={formik.handleSubmit}>
          <Form.Input 
          type="text" 
          placeholder="Nombre" 
          name="name" 
          onChange ={ formik.handleChange } 
          error = {formik.errors.name}
          value={formik.values.name}
        />
         <Form.Input 
          type="tel" 
          placeholder="Teléfono" 
          name="phone" 
          onChange ={ formik.handleChange } 
          error = {formik.errors.phone}
          value={formik.values.phone}
        />
          <Form.Input 
          type="text" 
          placeholder="Correo electrónico" 
          name="email" 
          onChange={formik.handleChange} 
          error = {formik.errors.email}
          value={formik.values.email}
          />
          <Form.TextArea
          type="text"
           placeholder="Mensaje / Asunto" 
           name="asunto" 
           onChange={formik.handleChange}
           error = {formik.errors.asunto}
           value={formik.values.asunto}
          />
            <Button type="submit">Enviar</Button>
      <Button type="button" onClick={formik.handleReset}>Limpiar formulario</Button>
      
      </Form>

    </Container>
  );
}

export default ContactForm;
