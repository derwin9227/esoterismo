import Card from "./Card";
import "./histories.scss";
import hombre from "../../images/hombre.png";
import mujer from "../../images/mujer.png";

let carla = "Mi matrimonio de apenas unos 5 años se estaría desgastando sin razón aparente. El deseo se estaría perdiendo y no entendía por qué. Mi marido no tenía explicación para lo que nos estaría ocurriendo, por lo que llegamos a encontrarnos muy preocupados al respecto. Sin más soluciones en la mesa, recurrí a estos servicios gracias a las referencias que mis amistades me habían comentado. Luego de probar mi primer amarre de amor, mi marido encontró en sí los deseos que por mucho tiempo habían desaparecido. Desde hace cuatro meses somos una pareja feliz y con deseos de tener hijos.",
            alexis ="Gracias a los métodos del servicio de amarres, la relación de mis sueños se hizo posible. Finalmente logré estar con Andrea. Y hoy, a nuestro primer año de noviazgo, no puedo estar más agradecido con los amarres de amor. Cuando escuché mi primer testimonio de amor no podía creer la efectividad de este método hasta que pude comprobarlo por mi propia cuenta.",
            alejandra ="Como parte de los testimonios de amor, jamás pensé que estos métodos llegasen a ser efectivos. Sin embargo, mi relación de ya dos meses me ha demostrado que estos recursos mágicos pueden ser verdaderamente poderosos y capaces de cambiar la vida para siempre.",
            luis = "Tengo que destacar la importante labor que estas personas han logrado en mi vida sentimental. He logrado enamorar a todas las mujeres que encuentro atractivas con el menor esfuerzo posible. Recomiendo mucho sus servicios ya que he visitado muchos lugares, sin embargo ninguno como este. Además, la asesoría que ofrecen es invaluable. Me siento afortunado de haber encontrado este lugar.";

const Histories = () => {
  return (
    <section id="histories" className="histories">
        <Card user={carla} img={mujer}/>
        <Card user={alejandra} img={hombre}/>
        <Card user={alexis} img={mujer}/>
        <Card user={luis} img={hombre}/>
    </section>
  )
}

export default Histories