import React from 'react'

const ObservacionesBienestar = () => {

    const [detalle, setDetalle] = React.useState('')
    const [soporte, setsSporte] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const handleSubmit = (e) => {
      console.log(detalle,soporte,descripcion);
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
            <label>Detalles de bienestar</label>
            <select 
            value={detalle}
            onChange={(e) => setDetalle (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos
                'BienestarObservaciones' celda 'IdBienestarDetalle
              </option>
            </select>
          </div>
          <div className="form-group">
            <label> Soportes </label>
            <input
              value={soporte}
              onChange={(e) => setsSporte (e.target.value)}
              type="number"
              className="form-control"
              disabled=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="d-block"> Descripción</label>
            <textarea 
            value={descripcion}
            onChange={(e) => setDescripcion (e.target.value)}
            name="" cols={30} rows={2} />
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

export { ObservacionesBienestar }