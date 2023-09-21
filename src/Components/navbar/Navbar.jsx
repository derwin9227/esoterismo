import "./navbar.scss";

const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <li className="navbar__item"><a className="navbar__item-link" href="#services">Servicios</a></li>
            <li className="navbar__item"><a className="navbar__item-link" href="#histories">Historias</a></li>
            <li className="navbar__item"><a className="navbar__item-link" href="#contact">Nosotros</a></li>
        </nav>
    </>
  )
}

export default Navbar;