import "./contact.scss";

const About = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__heading">
        <h2>Contactanos</h2>
      </div>
      
      <form action="" className="contact__form">
        <div className="contact__form-input">
          <input className="contact__form-input-name" name="nombre" type="text" placeholder="Nombre"/>
          <input className="contact__form-input-email" name="correo" type="text" placeholder="Correo"/>
        </div>
        <textarea name="asunto"
               cols="30" rows="5"
               className="contact__form-subject"
               placeholder="Cuentanos que sucede...">
        </textarea>
        <button className="contact__form-button">Enviar</button>
      </form>
    </section>
  )
}

export default About