import React from 'react'

const Autoevaluacion = () => {
  const [tamaño, setTamaño] = React.useState('')
  const [activo, setActivo] = React.useState('')
  const [descripcion, setDescripcion] = React.useState('')
  const [estado, setEstado] = React.useState('')

  const handleSubmit = (e) => {
    console.log(tamaño, activo, descripcion, estado);
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
    <form  onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="d-block"> Tamaño </label>
            <input
            value={tamaño}
            onChange={(e) => setTamaño (e.target.value)}
              type="number"
              className="form-control col-md-2 d-inline"
            />
            <label className="col-md-6 d-inline">mb</label>
          </div>
          <div className="form-group">
            <label className="d-block"> Activo </label>
            <div className="form-check form-check-inline">
              <input
              value={activo}
              onChange={(e) => setActivo (e.target.value)}
                className="form-check-input"
                type="checkbox"
                name="status"
                id="id_Status"
              />
              <label className="form-check-label" htmlFor="id_Status">
                Obtener valor de la tabla de bases de dato 'MatrizAuto' celda
                'FlagSize'
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="d-block"> Descripción </label>
            <textarea 
            value={descripcion}
            onChange={(e) => setDescripcion (e.target.value)}
            name="" cols={30} rows={2} />
          </div>
          <div className="form-group">
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
                Obtener valor de la tabla de bases de dato 'MatrizAuto' celda
                'Estado'
              </label>
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

export { Autoevaluacion }