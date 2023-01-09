import React from 'react'

const FaseAnuncio = () => {

    const [curso,setCurso] = React.useState('')
    const [tipoAnuncio,setTipoAnuncio] = React.useState('')
    const [vacantes,setVacantes] = React.useState('')
    const [convenio,setConvenio] = React.useState('')
    const [publico,setPublico] = React.useState('')
    const [estado,setEstado] = React.useState('')
        
    const handleSubmit = (e) => {
        console.log(curso,tipoAnuncio,vacantes,publico,estado);
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
        style={{ width: "8%" }}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  </div>
  <div className="card-body">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label> Curso</label>
            <select 
            value={curso}
            onChange={(e) => setCurso (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Convocatoria' celda
                'IdCurso'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Tipo de anuncio</label>
            <select 
            value={tipoAnuncio}
            onChange={(e) => setTipoAnuncio (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'Convocatoria' celda
                'IdTipoConvocatoria'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label> Vacantes </label>
            <input
              value={vacantes}
                onChange={(e) => setVacantes (e.target.value)}
              type="number"
              className="form-control"
              disabled=""
            />
          </div>
          <div className="form-group">
            <label> Convenio </label>
            <select 
            value={convenio}
            onChange={(e) => setConvenio (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Convocatoria' celda
                'IdConvenio'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label className="d-block">Público:</label>
            <div
              className="form-check form-check-inline"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
              value={publico}
                onChange={(e) => setPublico (e.target.value)}
                type="checkbox"
                className="form-check-input"
                id="btn-checkpublic"
                autoComplete="off"
              />
              <label className="form-check-label" htmlFor="btn-checkpublic">
                Obtener valor de la tabla de base de datos 'Convocatoria' celda
                'IdPublico'
              </label>
            </div>
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
                Obtener valor de la tabla de base de datos 'Convocatoria' celda
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
              <div type="submit" className="btn btn-success">
                Nuevo
              </div>
            </div>
            <div className="text-left">
              <div type="submit" className="btn btn-secondary">
                Editar
              </div>
            </div>
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-primary">
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

export { FaseAnuncio }