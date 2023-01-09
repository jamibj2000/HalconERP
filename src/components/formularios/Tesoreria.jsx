  import React from 'react'

const Tesoreria = () => {
    const [metodoPago, setMetodoPago] = React.useState('')
    const [sucursal, setSucursal] = React.useState('')
    const [fecha, setFecha] = React.useState('')
    const [cuentaBancaria, setCuentaBancaria] = React.useState('')
    const [cuenta, setCuenta] = React.useState('')
    const handleSubmit = (e) => {
    console.log();
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
  </div>
  <div className="card-body">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Método de pago</label>
            <select 
            value={metodoPago}
            onChange={e => setMetodoPago (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Treasury' celda
                'IdMedioPago'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Sucursal</label>
            <select 
            value={sucursal}
            onChange={e => setSucursal (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Treasury' celda
                'IdSucursal
              </option>
            </select>
          </div>
          <div className="form-group">
            <label> Fecha </label>
            <input 
            value={fecha}
            onChange={e => setFecha (e.target.value)}
            type="date" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Cuenta bancaria</label>
            <select 
            value={cuentaBancaria}
            onChange={e => setCuentaBancaria (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Treasury' celda
                'IdCuentaBancaria'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Cuenta por cobrar</label>
            <select 
            value={cuenta}
            onChange={e => setCuenta (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Treasury' celda
                'IdCuentaPorCobrar'
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

export { Tesoreria }