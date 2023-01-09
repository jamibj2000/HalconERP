import React from 'react'

const GestionAcademica = () => {
  
    const [gestion, setGestion] = React.useState('')
    const [sucursal, setSucursal] = React.useState('')
    const [dimension, setDimension] = React.useState('')
    const [periodo, setPeriodo] = React.useState('')
 
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
        style={{ width: "65%" }}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
          <div className="form-group">
              <label>Gestión académica</label>
              <select 
              value={gestion}
              onChange={e => setGestion (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de bases de datos 'IdGestionAcademica'
                  celda 'IdProceso'
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
                  Obtener valor de la tabla de bases de datos 'IdSucursal'
                  celda 'IdProceso'
                </option>
              </select>
            </div>

             <div className="form-group">
              <label>Dimensión</label>
              <select 
              value={dimension}
              onChange={e => setDimension (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de bases de datos 'IdDimension'
                  celda 'IdProceso'
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
                  Obtener valor de la tabla de bases de datos 'IdPeriodo'
                  celda 'IdProceso'
                </option>
              </select>
              </div>
              </div>
        </div>
        <div className="text-right">
          <button type="submit" className="btn buttonSend">
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export { GestionAcademica }