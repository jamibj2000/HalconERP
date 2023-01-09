import React from 'react'

const DetalleFaseCandidato = () => {

    const [fase,setFase] = React.useState('')
    const [estado,setEstado] = React.useState('')
    const [deposito,setDeposito] = React.useState('')
    const [descripcion,setDescripcion] = React.useState('')

    const handleSubmit = (e) => {
        console.log(fase,estado,deposito,descripcion);
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
          <div className="form-group">
            <label>Fase</label>
            <select 
            value={fase}
            onChange={(e) => setFase (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'DetalleAspirante'
                celda 'IdAspiranteFase'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label className="d-block">Depósito:</label>
            <input 
            value={deposito}
            onChange={(e) => setDeposito (e.target.value)}
            type="file" className="form-control" />
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
                Obtener valor de la tabla de bases de datos 'AspiranteFase'
                celda 'Estado'
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="block" htmlFor="floatingTextarea">
              {" "}
              Descripción:{" "}
            </label>
            <div
              className="form-check form-check-inline"
              role="group"
              aria-label="Basic checkbox toggle button group"
            >
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion (e.target.value)}
                className="form-control"
                name=""
                cols={30}
                rows={10}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="text-left pr-1">
                  <a href="candidatePhase.html" className="btn btn-secondary">
                    Atrás
                  </a>
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

export { DetalleFaseCandidato }