import React from 'react'

const Inventario = () => {
    const [inventario, setInventario] = React.useState('')
    const [sucursal, setSucursal] = React.useState('')
    const [periodo, setPeriodo] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
   
    const handleSubmit = (e) => {
    console.log();
	e.preventDefault();	
}
  return (
   <>
   
 <div className="card h-100">
  <div className="card-header">
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "35%" }}
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
            <label>Inventario</label>
            <select 
            value={inventario}
            onChange={e => setInventario (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'IdInventario' celda
                'IdCuentaPorCobrar'
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Sucursal</label>
            <select 
            value={sucursal}
            onChange={e => setSucursal (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'IdSucursal' celda
                'IdCuentaPorCobrar'
              </option>
            </select>
          </div>

        <div className="form-group">
            <label>Período</label>
            <select 
            value={periodo}
            onChange={e => setPeriodo (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'IdPeriodo' celda
                'IdCuentaPorCobrar'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label className="d-block">Estado:</label>
            <div
              className="form-check form-check-inline"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
              value={estado}
              onChange={(e) => setEstado (e.target.value)}
                type="checkbox"
                className="form-check-input"
                id="btn-checkstatus"
                autoComplete="off"
              />
              <label className="form-check-label" htmlFor="btn-checkstatus">
                Obtener valor de la tabla de base de datos 'Aulas' celda
                'Estado'
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
                Atràs
              </button>
            </div>
          </div>
          <div className="text-right">
            <button className="btn buttonSend">
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

export { Inventario }