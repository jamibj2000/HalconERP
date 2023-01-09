import React from 'react'

const GradoEmision = () => {

    const [curso, setCurso] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [señal, setSeñal] = React.useState('')
    const [emision, setEmision] = React.useState('')
    const [pagado, setPagado] = React.useState('')

    const handleSubmit = (e) => {
      console.log(curso,descripcion,señal,emision,pagado);
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
        style={{ width: "25%" }}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label> Curso de documentos </label>
              <select 
              value={curso} 
              onChange={(e) => setCurso (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de base de datos 'CursosFirmas'
                  celda 'IdCursosDocumentos'
                </option>
              </select>
            </div>
            <div className="form-group">
              <label className="d-block"> Descripción </label>
              <textarea 
              value={descripcion}
              onChange={(e) => setDescripcion (e.target.value)}
              name="" id="" cols={30} rows={2} />
            </div>
            <div className="form-group">
              <label className="d-block"> Señal electrónica </label>
              <input 
              value={señal}
              onChange={(e) => setSeñal (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="d-block"> Emisión </label>
              <input 
              value={emision}
              onChange={(e) => setEmision (e.target.value)}
              type="number" className="form-control" />
            </div>
            <div className="form-group">
              <label className="d-block">Pagado</label>
              <div
                className="form-check form-check-inline"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input
                value={pagado}
                onChange={(e) => setPagado (e.target.value)}
                  type="checkbox"
                  className="form-check-input"
                  id="btn-checkstatus"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="text-left pr-1">
                    <a href="coursesSign.html" className="btn btn-secondary">
                      Anterior
                    </a>
                  </div>
                </div>
                <div className="text-right">
                  <button className="btn buttonSend">
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

export { GradoEmision }