import React from 'react'

const DetalleCorreo = () => {
    const [gestion, setGestion] = React.useState('')
    const [correo, setCorreo] = React.useState('')
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
              <label>Detalle de gestión de correos</label>
              <select 
              value={gestion}
              onChange={e => setGestion (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de bases de datos 'IdGestionCorreosDetalle'
                  celda 'IdProceso'
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Gestión de correos</label>
              <select 
              value={correo}
              onChange={e => setCorreo (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
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

export { DetalleCorreo }