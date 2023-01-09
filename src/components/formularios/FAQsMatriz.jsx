import React from 'react'

const FAQsMatriz = () => {

        const [detalle,setDetalle] = React.useState('')
        const [factor,setFactor] = React.useState('')
        const [descripcion,setDescripcion] = React.useState('')
        
        const handleSubmit = (e) => {
            console.log(detalle,factor,descripcion);
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
          <div className="form-group">
            <label>Detalles del instrumento</label>
            <select 
            value={detalle}
            onChange={(e) => setDetalle (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'MatrizPreguntasRes'
                celda 'IdInstrumentoDetalle'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label> Factor </label>
            <input
            value={factor}
            onChange={(e) => setFactor (e.target.value)}
              type="number"
              className="form-control"
              disabled=""
            />
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
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="id_Status">
                Obtener valor de la tabla de base de datos 'MatrizPreguntasRes'
                celda 'FlagRpta'
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="d-block"> Descripción </label>
            <textarea 
            value={descripcion}
            onChange={(e) => setDescripcion (e.target.value)}
            name="" cols={30} rows={10} defaultValue={""} />
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
            <button className="btn btn-primary">
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

export { FAQsMatriz }