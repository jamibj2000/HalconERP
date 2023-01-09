import React from 'react'

const DetalleConvenio = () => {

    const [convenio,setConvenio] = React.useState('')
    const [descripcion,setDescripcion] = React.useState('')

    const handleSubmit = (e) => {
        console.log(convenio,descripcion);
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
  <div
    className="card-body justify-content-center"
    style={{ position: "relative" }}
  >
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Convenio</label>
            <select 
            value={convenio}
            onChange={(e) => setConvenio (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Convenio' celda
                'IdConvenios'
              </option>
            </select>
          </div>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="floatingTextarea"> Descripción </label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion (e.target.value)}
                className="form-control"
                id="floatingTextarea"
              />
            </div>
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

export { DetalleConvenio }