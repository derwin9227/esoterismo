import "./services.scss";
import amarreSexual from "../../images/Amarre-sexual.png";
import union from "../../images/sol.png";
import amarreAmor from "../../images/reloj-arena.png";

const Services = () => {
  return (
    <section id='services' className="services">
        <div className="services__item">
            <img className="services__item-img" src={amarreSexual} alt="amarre-sexual" />
            <h3 className="services__item-heading">Amarres Sexuales</h3>
            <p className="services__item-paragraph">
            La ayuda y asesoría espiritual puede hacer mucho más por tu pareja que sentarte a lamentar lo que pudo haber sido y no fue. A través de un servicio único, personalizado y discreto vas a confirmar que sí es posible llamar la atención de ese amor no correspondido.
            </p>
        </div>
        <div className="services__item">
            <img className="services__item-img" src={union} alt="union" />
            <h3 className="services__item-heading">Union de Parejas</h3>
            <p className="services__item-paragraph">
            La unión de parejas hará que el ser amado sienta la necesidad de arreglar la situación difícil por la que están pasando, dejando de lado el orgullo, la indiferencia y la intolerancia, este proceso mental-espiritual muy positivo y sobre todo blanco, si aún existe voluntad por una de las partes, esto significa querer salvar el matrimonio, el hogar, la relación y luchar por el amor junto a esa persona tan importante en tu vida.
            </p>
        </div>
        <div className="services__item">
            <img className="services__item-img" src={amarreAmor} alt="amarre-amor" />
            <h3 className="services__item-heading">Amarres de Amor</h3>
            <p className="services__item-paragraph">
            Los amarres de amor son Garantizados y efectivos para que recuperes tu pareja sin que le tengas que rogar, no importa el tiempo ni la distancia. El amarre de amor Influye que él o ella te busque, te llame, quiera estar contigo y nada ni nadie lo aleje de tu lado.
            </p>
        </div>
    </section>
  )
}

export default Services