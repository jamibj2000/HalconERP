import React from 'react'

const AutoEvaluacion = () => {

    const [pregunta, setPregunta] = React.useState('')
    const [factor, setFactor]= React.useState('')
    const [respuesta, setRespuesta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
   
    
    const handleSubmit = (e) => {
        console.log(pregunta ,factor,respuesta,descripcion);
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
            <label> Preguntas </label>
            <select 
            value={pregunta}
            onChange={(e) => setPregunta (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos
                'MatrizPreguntasResPadre' celda 'IdMatrizPreguntas'
              </option>
              </select>
              <label> Factor </label>
            <input 
            value={factor}
            onChange={(e) => setFactor (e.target.value)}
            type="number" className="form-control" />
          </div>
          <div className="form-group">
            <label> Respuesta </label>
            <input 
            value={respuesta}
            onChange={(e) => setRespuesta (e.target.value)}
            type="text" className="form-control" />
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
                Obtener valor de la tabla de bases de datos 'FlagRpta' celda
                'Estado'
              </label>
            </div>
          </div>
          <div className="form-group">
            <label className="d-block"> Descripción </label>
            <textarea 
            value={descripcion}
            onChange={(e) => setDescripcion (e.target.value)}
            name="" cols={65} rows={10}  />
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

export { AutoEvaluacion }

