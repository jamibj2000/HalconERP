import React from 'react'

const Cobrar = () => {

    const [unico,setUnico] = React.useState('')
    const [credito,setCredito] = React.useState('')
    const [debito,setDebito] = React.useState('')
    const [proceso,setProceso] = React.useState('')
    const [estado,setEstado] = React.useState('')

    const handleSubmit = (e) => {
        console.log(unico,credito,debito,proceso,estado);
        e.preventDefault();
    }
  return (
    <>
    <div className="card">
  <div className="card-header">
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "65%" }}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  </div>
  <div className="card-body">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label> Único </label>
            <select 
            value={unico}
            onChange={(e) => setUnico (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'CuentasPorCobrar'
                celda 'IdUnico'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label> Crédito </label>
            <input 
            value={credito}
            onChange={(e) => setCredito (e.target.value)}
            type="number" className="form-control" />
          </div>
          <div className="form-group">
            <label> Débito </label>
            <input 
            value={debito}
            onChange={(e) => setDebito (e.target.value)}
            type="number" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label> Proceso </label>
            <select 
            value={proceso}
            onChange={(e) => setProceso (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'CuentasPorCobrar'
                celda 'IdProceso'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label className="d-block"> Estado </label>
            <div className="form-check form-check-inline">
              <input
                value={estado}
                onChange={(e) => setEstado (e.target.value)}
                className="form-check-input"
                type="checkbox"
                name="status"
                id="id_Status"
              />
              <label className="form-check-label" htmlFor="id_Status">
                Obtener valor de la tabla de base de datos 'CuentasPorCobrar'
                celda 'Estado'
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="text-left pr-1">
              <button className="btn btn-secondary">
                Atrás
              </button>
            </div>
          </div>
          <div className="text-right">
            <button className="btn btn-primary">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export { Cobrar }