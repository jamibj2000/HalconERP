import React from 'react'

const ProgramaEstudio = () => {

    const [nombrePrograma, setNombrePrograma] = React.useState('')
    const [observaciones, setObservaciones] = React.useState('')
    const [tipoEstudio, setTipoEstudio] = React.useState('')
    const [horario, setHorario] = React.useState('')
    const [estado, setEstado] = React.useState('')

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
          style={{ width: "63%" }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  </div>
  <div
    className="card-body justify-content-center"
    style={{ position: "relative" }}
  >
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <div className="form-group">
              <label>Nombre del programa de estudio</label>
              <input 
               value={nombrePrograma}
               onChange={e => setNombrePrograma (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Tipo de estudio</label>
              <select 
               value={tipoEstudio}
               onChange={e => setTipoEstudio (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de bases de datos 'IdTipoEstudio'
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="floatingTextarea"> Observaciones </label>
            <textarea
             value={observaciones}
             onChange={e => setObservaciones (e.target.value)}
              className="form-control"
              id="floatingTextarea"
            />
          </div>
          <div className="form-group">
            <label>Intensidad horaria</label>
            <input 
             value={horario}
             onChange={e => setHorario (e.target.value)}
            type="text" className="form-coHtrol" />
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
               onChange={e => setEstado (e.target.value)}
                type="checkbox"
                className="form-check-input"
                id="btn-checkoffer"
                autoComplete="off"
              />
              <label className="form-check-label" htmlFor="btn-checkoffer">
                Obtener valor de la tabla de bases de datos 'Estado'
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="text-left pr-1">
              <button type="submit" className="btn btn-success">
                Nuevo
              </button>
            </div>
            <div className="text-left">
              <button type="submit" className="btn btn-secondary">
                Editar
              </button>
            </div>
          </div>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div className="text-right">
                <button className="btn buttonSend">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</>

   
  )
}

export { ProgramaEstudio }