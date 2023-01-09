import { Link } from "react-router-dom"


const Menu = ()=>{
  return<>
  <nav className="nav flex-column">
  <Link className="nav-link active" to={'/form/1'}>General</Link>
  <Link className="nav-link" to={'form/2'}>Cursos</Link>
  <Link className="nav-link disabled" to={'form/3'} >Disabled</Link>
</nav></>
}