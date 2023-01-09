import React from 'react'

const FaseCandidatos = () => {
    const [candidato,setCandidato] = React.useState('')
    const [anuncio,setAnuncio] = React.useState('')
    const [aprovado,setAprovado] = React.useState('')
    const [estado,setEstado] = React.useState('')
    const [calificacion,setCalificacion] = React.useState('')
        
    const handleSubmit = (e) => {
        console.log(candidato,anuncio,aprovado,estado,calificacion);
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
        style={{ width: "25%" }}
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
            <label>Candidato</label>
            <select 
            value={candidato}
            onChange={(e) => setCandidato (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'Aspirante' celda
                'IdAspirante'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Fase de anuncio</label>
            <select 
            value={anuncio}
            onChange={(e) => setAnuncio (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'Aspirante' celda
                'IdConvocatoriaFase'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label className="d-block">Aprobado:</label>
            <div
              className="form-check form-check-inline"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <input
                value={aprovado}
                onChange={(e) => setAprovado (e.target.value)}
                type="checkbox"
                className="form-check-input"
                id="btn-checkaprove"
                autoComplete="off"
              />
              <label className="form-check-label" htmlFor="btn-checkaprove">
                Obtener valor de la tabla de base de datos 'AspiranteFase' celda
                'FlagApro'
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="d-block">Estado</label>
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
                Obtener valor de la tabla de bases de datos 'AspiranteFase'
                celda 'Estado'
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="floatingTextarea"> Calificación </label>
            <input
            value={calificacion}
            onChange={(e) => setCalificacion (e.target.value)}
            type="number" className="form-control" />
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
                <button
                  className="btn btn-primary"
                >
                  Enviar
                </button>
              </div>
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

export { FaseCandidatos }