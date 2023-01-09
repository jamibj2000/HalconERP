import React from 'react'

const ProcesoVentana = () => {
    const [ventana, setVentana] = React.useState('')
    const [dimension, setDimension] = React.useState('')
    const [proceso, setProceso] = React.useState('')
    const [estado, setEstado] = React.useState('')
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
        style={{ width: "45%" }}
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
          </div>
          
          <div className="form-group">
            <label>Ventana</label>
            <select 
            value={ventana}
            onChange={e => setVentana (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'IdVentana' celda
                'IdCuentaPorCobrar'
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
                Obtener valor de la tabla de bases de datos 'RolDimension' celda
                'IdCuentaPorCobrar'
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Proceso</label>
            <select 
            value={proceso}
            onChange={e => setProceso (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Proceso' celda
                'IdCuentaPorCobrar'
              </option>
            </select>
          </div>

          <div className="form-group">
            <label className="d-block">Estado </label>
            <textarea 
             value={estado}
             onChange={e => setEstado (e.target.value)}
             name="" cols={30} rows={2} />
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

export { ProcesoVentana }