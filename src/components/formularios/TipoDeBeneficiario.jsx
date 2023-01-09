import React from 'react'

const TipoBeneficiario = () => {

    const [situacion, setSituacion] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
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
        style={{ width: "50%" }}
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
            <label className="d-block"> Situación</label>
            <div className="form-check form-check-inline">
              <input
                 value={situacion}
                 onChange={e => setSituacion (e.target.value)}
                className="form-check-input"
                type="checkbox"
                name="status"
                id="id_Status"
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="id_Status">
                Obtener valor de la tabla de bases de datos 'TipoBeneficiario'
                celda 'Estado'
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="d-block"> Descripción </label>
            <textarea 
            value={descripcion}
            onChange={e => setDescripcion (e.target.value)}
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

export { TipoBeneficiario }