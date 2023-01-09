import { Link } from "react-router-dom"
function NavbarHome(){
return(<>
 {/* <img alt="fondo inicio" id="inicio-bg" src='./img/bg-bottom.png' /> */}
<nav className="navbar inicio navbar-light bg-light d-flex justify-content-between">
  <Link to={''} className="navbar-brand">
   <img src="./img/halconLOGO.png" alt="halcon App Dev" id="inicio-logo" />
  </Link>
  <form className="form-inline">
  <ul className="nav items-menu">
              <li className="menu-opcion scroll-to-section d-flex justify-content-center align-items-center">
                <Link to={"Inscritos"} className="active">Inicio</Link>
              </li>
              <li className="menu-opcion scroll-to-section d-flex justify-content-center align-items-center">
                <Link to={"inicio"}>Ofertas</Link>
              </li>
              <li className="menu-opcion scroll-to-section d-flex justify-content-center align-items-center">
                <Link to={"../perfil-aspirante"}>Consultar aspirante</Link>
              </li>
    {/* https://oferta-academica-cea.com/ */}
    <li>
    <Link className="btn inicio btn-outline-success my-2 my-sm-0" to={'../login'}>Iniciar sesión</Link>
    </li>
            </ul>
  </form>
</nav>
</>)
}
export {NavbarHome}