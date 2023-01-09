import React from 'react'

const TipoBienestar = () => {

    const [nombreEntidad, setNombreEntidad] = React.useState('')
    const [pais, setPais] = React.useState('')
    const [soportes, setSoportes] = React.useState('')
    const [precio, setPrecio] = React.useState('')
    const handleSubmit = (e) => {
    console.log();
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
            <label> Nombre de la entidad </label>
            <input 
            value={nombreEntidad}
            onChange={e => setNombreEntidad (e.target.value)}
            type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>País</label>
            <select 
            value={pais}
            onChange={e => setPais (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'BienestarTipo'
                celda 'IdPais'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label> Soportes </label>
            <input
            value={soportes}
            onChange={e => setSoportes (e.target.value)}
            type="number"
            className="form-control"
            disabled=""
            />
          </div>
          <div className="form-group">
            <label> Precio </label>
            <label 
            value={precio}
            onChange={e => setPrecio (e.target.value)}
            className="d-inline"> $ </label>
            <input
              type="number"
              className="form-control d-inline col-md-3"
            />
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

export { TipoBienestar }