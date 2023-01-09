import React from 'react'

const Cuenta = () => {

    const [nombre,setNombre] = React.useState('')
    const [numero,setNumero] = React.useState('')
    const [sucursal,setSucursal] = React.useState('')
    const [tipo,setTipo] = React.useState('')


    const handleSubmit = (e) => {
        console.log(nombre,numero,sucursal,tipo);
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
        style={{ width: "75%" }}
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
            <label> Nombre de la cuenta </label>
            <input 
            value={nombre}
            onChange={(e) => setNombre (e.target.value)}
            type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label> Número de cuenta</label>
            <input 
            value={numero}
            onChange={(e) => setNumero (e.target.value)}
            type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label> Sucursal </label>
            <select 
            value={sucursal}
            onChange={(e) => setSucursal (e.target.value)}
            className="select form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'Cuenta' celda
                'IdSucursal'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label> Tipo de cuenta </label>
            <select 
            value={tipo}
            onChange={(e) => setTipo (e.target.value)}
            className="select form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de base de datos 'Cuenta' celda
                'IdTipoCuenta'
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="text-left pr-1">
              <button   className="btn btn-secondary">
                Antrás
              </button>
            </div>
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
  )
}

export { Cuenta }