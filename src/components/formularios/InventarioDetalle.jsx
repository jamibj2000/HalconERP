import React from 'react'

const InventarioDetalle = () => {

    const [detalle, setDetalle] = React.useState('')
    const [inventario, setInventario] = React.useState('')
    const [activos, setActivos] = React.useState('')
    const [cantidad, setCantidad] = React.useState('')
    const [estado, setEstado] = React.useState('')
 
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
  </div>
  <div className="card-body">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
          <div className="form-group">
            <label>Inventario Detalle</label>
            <select 
            value={detalle}
            onChange={e => setDetalle (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'IdInventarioDetalle' celda
                'IdCuentaPorCobrar'
              </option>
            </select>
          </div>
          </div>
          <div className="form-group">
            <label>Inventario</label>
            <select 
            value={inventario}
            onChange={e => setInventario (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'IdInventario' celda
                'IdCuentaPorCobrar'
              </option>
            </select>
          </div>
 
          <div className="form-group">
            <label>Activos</label>
            <select 
            value={activos}
            onChange={e => setActivos (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'IdActivos' celda
                'IdCuentaPorCobrar'
              </option>
            </select>
          </div>

          <div className="form-group">
            <label> Cantidad</label>
            <input 
            value={cantidad}
            onChange={e => setCantidad (e.target.value)}
            type="number" className="form-control" />
          </div>
          
          <div className="form-group">
            <label className="d-block"> Estado </label>
            <div className="form-check form-check-inline">
              <input
               value={estado}
               onChange={e => setEstado (e.target.value)}
                className="form-check-input"
                type="checkbox"
                name="status"
                id="id_Status"
              />
              <label className="form-check-label" htmlFor="id_Status">
                Obtener valor de la tabla de bases de datos 'Estado' celda
                'Estado'
              </label>
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

export { InventarioDetalle }