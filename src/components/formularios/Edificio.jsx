import React from 'react'

const Edificio = () => {

    const [oficina,setOficina] = React.useState('')
    const [descripcion,setDescripcion] = React.useState('')
    const [edificios,setEdificios] = React.useState('')
    const [estado,setEstado] = React.useState('')

    const handleSubmit = (e) => {
        console.log(oficina,descripcion,edificios,estado);
        e.preventDefault();
    }
  return (
    <>
    <div className="form-animado col-md-11 h-75 ">
    <div className="card">
  <div className="card-header">
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "45%" }}
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
            name="" id="" cols={30} rows={10} />
          </div>
          <div className="form-group">
            <label> Oficina sucursal</label>
            <select 
            value={oficina}
            onChange={(e) => setOficina (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Edificio' celda
                'IdSucursal'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label> Edificios activos</label>
            <select 
            value={edificios}
            onChange={(e) => setEdificios (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'Edificio' celda
                'IdActivos'
              </option>
            </select>
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
        </div>
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-primary">
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

export { Edificio }