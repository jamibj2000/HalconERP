import React from 'react'

const InstrumentoDetalle = () => {
    const [preguntas, setPreguntas] = React.useState('')
    const [instrumento, setInstrumento] = React.useState('')

    const handleSubmit = (e) => {
      console.log(preguntas,instrumento);
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
            <label>Preguntas</label>
            <select 
            value={preguntas}
            onChange={(e) => setPreguntas (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'InstrumentoDetalle'
                celda 'IdMatrizPregruntas'
              </option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Instrumento</label>
            <select 
            value={instrumento}
            onChange={(e) => setInstrumento (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'InstrumentoDetalle'
                celda 'IdInstrument'
              </option>
            </select>
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

export { InstrumentoDetalle }