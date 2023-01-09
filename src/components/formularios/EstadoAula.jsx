import React from 'react'

const EstadoAula = () => {

    const [aula,setAula] = React.useState('')
    const [inicio,setInicio] = React.useState('')
    const [fin,setFin] = React.useState('')
    const [estado,setEstado] = React.useState('')

    const handleSubmit = (e) => {
        console.log(aula,inicio,fin,estado);
        e.preventDefault();
    }
  return (
    <>
    <div className="card">
  <div className="card">
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
          <div className="col-md-12">
            <div className="form-group">
              <label> Aula </label>
              <select 
                value={aula}
                onChange={(e) => setAula (e.target.value)}
                className="form-control">
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de bases de datos 'AulasEstado'
                  celda 'IdAula'
                </option>
              </select>
            </div>
            <div className="form-group">
              <label> Fecha de inicio </label>
              <input
                value={inicio}
                onChange={(e) => setInicio (e.target.value)}
                type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label> Fecha de finalización </label>
              <input 
              value={fin}
              onChange={(e) => setFin (e.target.value)}
              type="date" className="form-control" />
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
                  Obtener valor de la tabla de bases de datos 'AulasEstado'
                  celda 'Estado'
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
</div>

    </>
  )
}

export { EstadoAula }