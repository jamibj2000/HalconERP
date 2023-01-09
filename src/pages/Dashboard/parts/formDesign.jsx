import React from 'react'
import { Link } from 'react-router-dom'
const FormDesign = () => {
  return (
<div className="form-animado col-md-10 h-75">
  <div className="card" style={{ height: "80%", boxShadow: "black 3px 3px 10px"}}>
    <div className="card-header">
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "75%" }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}>
          75%
        </div>
      </div>
    </div>
    <div className="card-body h-100">
      <form className="position-relative h-100">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label> Account name </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label> Account number </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label> Branch </label>
              <select className="form-control">
                <option className="form-control">Select</option>
                <option className="form-control" value={1}>
                  Ramas
                </option>
              </select>
            </div>
            <div className="form-group">
              <label> Account type </label>
              <select className="form-control">
                <option className="form-control">Select</option>
                <option className="form-control" value={1}>
                  Cuenta
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group mt-2 position-sticky top-100">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="text-left pr-1">
                <Link className="btn btn-secondary" style={{ textDecoration: 'none' }} target="blank" to={"https://campusvirtual.orgcolfuturo.com/login/index.php"}> Atrás
                </Link >
              </div>
            </div>
            <div className="text-right">
                <Link className="btn btn-primary" style={{ textDecoration: 'none' }} target="blank" to={"https://campusvirtual.orgcolfuturo.com/login/index.php"}> Continuar
                </Link >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default FormDesign