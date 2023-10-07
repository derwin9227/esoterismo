import { useState } from "react";
import "./contact.scss";
import {useForm} from "react-hook-form";


const About = () => {
  const contactForm = document.getElementById("contact__form");
  const {register, formState:{errors},handleSubmit} = useForm();

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
  function enviar (){
    contactForm.setAttribute("action", "https://formspree.io/f/mgejpdkp");
    contactForm.setAttribute("method", "POST");
    contactForm.submit();
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__heading">
        <h2>Contactanos</h2>
      </div>
      
      <form id="contact__form" className="contact__form" onSubmit={handleSubmit(enviar)} 
      /* action="https://formspree.io/f/mgejpdkp" method="POST" */>
        <div className="contact__form-input">
              <input className="contact__form-input-name" name="nombre" type="text" placeholder="Nombre" onChange={handleChange}
              {...register("nombre",{required:true,minLength:2,maxLength:20})}
              />
                {
                  errors.nombre?.type==="required" && (<p className="contact__form-errors">No puede estar vacio</p>)
                }
                {
                  errors.nombre?.type==="minLength" && (<p className="contact__form-errors">Ingrese por lo menos 2 letras</p>)
                }
                {
                  errors.nombre?.type==="maxLength" && (<p className="contact__form-errors">Ingrese 20 letras como maximo</p>)
                }
              <input className="contact__form-input-email" name="correo" type="text" placeholder="Correo" onChange={handleChange}
                {...register("correo",{required:true,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i})}
              />
                {errors.correo?.type === "pattern" && (
                <p className="contact__form-errors">El formato del correo no es valido</p>
              )}
                {errors.correo?.type === "required" && (
                <p className="contact__form-errors">El correo  es requerido</p>
              )}
              <input className="contact__form-input-telf" name="telefono" type="number" placeholder="Telefono" onChange={handleChange}
              {...register("telefono",{required:true,valueAsNumber:true,minLength:8})}
              />
                {
                  errors.telefono?.type==="required" && (<p className="contact__form-errors">por favor ingrese un telefono</p>)
                }
                {/* {
                  errors.telefono?.type==="valueAsNumber" && (<p className="contact__form-errors">por favor ingrese solo numeros</p>)
                }
                {
                  errors.telefono?.type==="minLenght" && (<p className="contact__form-errors">Ingrese al menos 7 numeros</p>)
                } */}

        </div>
        <textarea name="asunto" /* type="text" */
              onChange={handleChange}
              className="contact__form-subject"
              placeholder="Cuentanos que sucede..."
        {...register("asunto",{required:true,minLength:20,maxLength:500})}
              >
        </textarea>
                {
                  errors.asunto?.type==="required" && (<p className="contact__form-errors_subject">No puede estar vacio</p>)
                }
                {
                  errors.asunto?.type==="minLength" && (<p className="contact__form-errors_subject">Indique mas detalles por favor!</p>)
                }
                {
                  errors.asunto?.type==="maxLength" && (<p className="contact__form-errors_subject">El asunto es muy largo</p>)
                }
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