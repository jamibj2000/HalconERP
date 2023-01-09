import React from 'react'

const Calificacion = () => {

    const [estudiante,setEstudiante] = React.useState('')
    const [calificacion,setCalificacion] = React.useState('')
    const [estado,setEstado] = React.useState('')

    const handleSubmit = (e) => {
        console.log(estudiante,calificacion,estado);
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
        <div className="col-md-12">
          <div className="form-group col-md-6">
            <label>Estudiante</label>
            <select
            value={estudiante}
            onChange={(e) => setEstudiante (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Notas' celda
                'IdEstudiante'
              </option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label>Cualificación</label>
            <input 
            value={calificacion}
            onChange={(e) => setCalificacion (e.target.value)}
            type="number" className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label className="d-block">Estado</label>
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
                Obtener valor de la tabla de bases de datos 'Notas' celda
                'Estado'
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="text-left pr-1">
                  <button
                    className="btn btn-secondary"
                  >
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
        </div>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export { Calificacion }