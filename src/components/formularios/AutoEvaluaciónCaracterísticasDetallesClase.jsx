import React from 'react'

const Caracteristicas = () => {

    const [detalle, setDetalle] = React.useState('')
    const [proceso, setProceso] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const handleSubmit = (e) => {
        console.log(detalle,proceso,descripcion);
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
            <label> Detalle de características </label>
            <select 
             value={detalle}
             onChange={(e) => setDetalle (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'MatrizPoblacion'
                celda 'IdMatrizCaracDetalle'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label> Proceso </label>
            <select 
             value={proceso}
             onChange={(e) => setProceso (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'MatrizPoblacion'
                celda 'IdProceso'
              </option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="d-block">Label </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className="d-block"> Descripción </label>
            <textarea 
            value={descripcion}
            onChange={(e) => setDescripcion (e.target.value)}
            name="" 
            cols={30} rows={10} />
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
  );
}

export { Caracteristicas }
