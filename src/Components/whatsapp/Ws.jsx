import "./wsbutton.scss";

const Ws = () => {
  return (
    <>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
      <a href="https://api.whatsapp.com/send?phone=0000000&amp;text=Hola%21%20Quisiera%20solicitar%20tus%20servicios%20por%20favor%21"
      className="float" 
      target="_blank"
      rel='noreferrer'
      >
         <i className="fa fa-whatsapp my-float"></i>
      </a>
    </>
  )
}

export default Ws