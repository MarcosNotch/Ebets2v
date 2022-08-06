import "./Navbar.css"

const Navbar = () => {

    return (

        <header className="header-fixed header-sombra">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="images/E-Bets2.png" className="logo" alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src="images/MenuHamburgesa3.png" className="menu-hamburguesa" alt="logo"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 margin-izquierda">
                <li><a className="link-nav " href="index.html">Inicio</a></li>
                <li><a className="link-nav seleccionado" href="partidos.html">Partidos</a></li>
                <li><a className="link-nav" href="posiciones.html">Posiciones</a></li>
                <li><a className="link-nav" href="noticias.html">Noticias</a></li>
                
              </ul>
              <form className="d-flex borde">
                <div>
                  <a className="link-iniciarSesion" href="iniciarSesion.html">Iniciar sesión</a>
                  <input type="button" className="botonInicio" value="Registrarse"/>
                </div>
              </form>
            </div>
          </div>
        </nav>
    </header>


    )



}


export default Navbar;






