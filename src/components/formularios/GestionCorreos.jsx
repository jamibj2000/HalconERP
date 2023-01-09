import React from 'react'

const GestionCorreos = () => {
    const [gestion, setGestion] = React.useState('')
    const [de, setDe] = React.useState('')
    const [para, setPara] = React.useState('')
    const [asunto, setAsunto] = React.useState('')
    const [proceso, setProceso] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const handleSubmit = (e) => {
    console.log();
	e.preventDefault();	
}
  return (
<>
<div className="card h-100">
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
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
          <div className="form-group">
              <label>Gestión de correos</label>
              <select 
              value={gestion}
              onChange={e => setGestion (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de bases de datos 'IdGestionCorreos'
                  celda 'IdProceso'
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>De</label>
              <input 
                 value={de}
                 onChange={e => setDe (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Para</label>
              <input 
                 value={para}
                 onChange={e => setPara (e.target.value)}
              type="text" className="form-control" />
            </div>
            </div>
            <div className="col-md-6">
            <div className="form-group">
              <label>Asunto</label>
              <input 
                 value={asunto}
                 onChange={e => setAsunto (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Proceso</label>
              <select 
              value={proceso}
              onChange={e => setProceso (e.target.value)}
              className="form-control">
P            <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de bases de datos 'IdGestionCorreos'
                  celda 'IdProceso'
                </option>
              </select>
            </div>
            <div className="form-group">
            <label className="d-block"> Descripción </label>
            <textarea 
            value={descripcion}
            onChange={e => setDescripcion (e.target.value)}
            name="" cols={30} rows={2}/>
          </div>
          </div>
          
        </div>
        <div className="text-right">
          <button type="submit" className="btn buttonSend">
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</>
  )
}

export { GestionCorreos }