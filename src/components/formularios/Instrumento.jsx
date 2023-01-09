import React from 'react'

const Instrumento = () => {
    const [perfil, setPerfil] = React.useState('')
    const [curso, setCurso] = React.useState('')
    const [dimension, setDimension] = React.useState('')
    const [fecha, setFecha] = React.useState('')
    const handleSubmit = (e) => {
      console.log(perfil,curso,dimension,fecha);
      e.preventDefault()
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
            <label>Perfil</label>
            <select 
            value={perfil}
            onChange={(e) => setPerfil (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'Instrument' celda
                'IdPersona'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Curso</label>
            <select 
            value={curso}
            onChange={(e) => setCurso (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'Instrument' celda
                'IdCurso'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Dimensión</label>
            <select 
            value={dimension}
            onChange={(e) => setDimension (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'Instrument' celda
                'IdDimension'
              </option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="status"
                id="id_Status"
              />
              <label className="form-check-label" htmlFor="id_Status">
                Obtener valor de la tabla de base de datos 'Instrument' celda
                'FlagEducativo'
              </label>
            </div>
          </div>
          <div className="form-group">
            <label> Fecha </label>
            <input 
            value={fecha}
            onChange={(e) => setFecha (e.target.value)}
            type="date" className="form-control" />
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
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export { Instrumento }