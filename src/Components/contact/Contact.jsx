import { useState } from "react";
import "./contact.scss";

const About = () => {
  const [form, setForm] = useState({});
  //const validarEmail = email => ((/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)));

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    //alert("inicio");
    //alert(e.correo);
    console.log(form);
    //validarEmail(e.target.correo) ? alert("correo correcto") : alert("correo incorrecto");
    //e.submit();
    //alert("fin");
  };

  /*  Regex email
  ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
   */

  return (
    <section id="contact" className="contact">
      <div className="contact__heading">
        <h2>Contactanos</h2>
      </div>
      
      <form  className="contact__form" 
      action="https://formspree.io/f/mgejpdkp" method="POST">
        <div className="contact__form-input">
              <input className="contact__form-input-name" name="nombre" type="text" placeholder="Nombre" onChange={handleChange}/>
              <input className="contact__form-input-email" name="correo" type="email" placeholder="Correo" onChange={handleChange}/>
              <input className="contact__form-input-telf" name="telefono" type="number" placeholder="Telefono" onChange={handleChange}/>
        </div>
        <textarea name="asunto" /* type="text" */
              onChange={handleChange}
              className="contact__form-subject"
              placeholder="Cuentanos que sucede..."
              >
        </textarea>
        <button type="submit" className="contact__form-button"
          /* onClick={handleSubmit} */
        >
          Enviar
        </button>
      </form>
    </section>
  )
}

export default About