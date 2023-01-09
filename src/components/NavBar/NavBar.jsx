import { Link } from 'react-router-dom';

export const Navbar =()=>{

  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to={" "} >Halcón||</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to={"form/1"} >Logout</Link>
      <Link className="nav-item nav-link"to={"form/x"} >form x</Link>
      <Link className="nav-item nav-link disabled" to={"profile"} >Profile</Link>
    </div>
  </div>
</nav>
  </>
}