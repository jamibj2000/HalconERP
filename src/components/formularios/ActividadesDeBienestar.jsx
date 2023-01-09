import React from 'react'

const ActividadesBienestar = () => {

  const [descripcion, setDescripcion] = React.useState('')
  const [aprendizaje, setAprendizaje] = React.useState('')
  const [estado, setEstado] = React.useState('')

  const handleSubmit = (e) => {
    console.log(descripcion, aprendizaje, estado);
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
        style={{ width: "35%" }}
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
            <label className="d-block"> Descripción </label>
            <textarea 
            value={descripcion}
            onChange={(e) => setDescripcion (e.target.value)}
            name="" id="" cols={30} rows={2} />
          </div>
          <div className="form-group">
            <label className="d-block"> Tipo de aprendizaje </label>
            <input 
             value={aprendizaje}
             onChange={(e) => setAprendizaje (e.target.value)}
            type="text" className="form-control" />
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
               onChange={(e) => setEstado(e.target.value)}
                type="checkbox"
                className="form-check-input"
                id="btn-checkstatus"
                autoComplete="off"
              />
              <label className="form-check-label" htmlFor="btn-checkstatus">
                Obtener valor de la tabla de bases de datos 'Asignatura celda
                'Estado'
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right">
        <button  className="btn btn-primary">
          Enviar
        </button>
      </div>
    </form>
  </div>
</div>
</>


  );
}

export { ActividadesBienestar }
	