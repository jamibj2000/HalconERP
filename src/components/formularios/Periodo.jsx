import React from 'react'

const Periodo = () => {

    const [ejercicio, setEjercicio] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [estado, setEstado] = React.useState('')

    const handleSubmit = (e) => {
    console.log(ejercicio,descripcion,estado);
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
            <label>Ejercicio</label>
            <select 
            value={ejercicio}
            onChange={e => setEjercicio(e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Periodo' celda
                'IdEjercicio'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label className="d-block">Estado </label>
            <div className="form-check form-check-inline">
              <input
              value={estado}
              onChange={e => setEstado(e.target.value)}
                className="form-check-input"
                type="checkbox"
                name="status"
                id="id_Status"
              />
              <label className="form-check-label" htmlFor="id_Status">
                Obtener valor de la tabla de bases de datos 'Periodo' celda
                'Estado'
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="d-block"> Descripción </label>
            <textarea 
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            name="" cols={30} rows={2} />
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="text-left pr-1">
              <button className="btn butoonSend">
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

export { Periodo }