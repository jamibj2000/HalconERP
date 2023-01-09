import React from 'react'

const DocumentoGrado = () => {

    const [descripcion,setDescripcion] = React.useState('')
    const [estado,setEstado] = React.useState('')
    const [leyes,setLeyes] = React.useState('')
    const [formato,setFormato] = React.useState('')

    const handleSubmit = (e) => {
        console.log(descripcion,estado,leyes,formato);
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
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label className="d-block"> Descripción </label>
              <textarea 
              value={descripcion}
              onChange={(e) => setDescripcion (e.target.value)}
              name="" id="" cols={30} rows={10}/>
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
                  Obtener valor de la tabla de base de datos 'DocumentoGrado'
                  celda 'Estado'
                </label>
              </div>
            </div>
            <div className="form-group">
              <label> Leyes pecuniarias </label>
              <select 
              value={leyes}
              onChange={(e) => setLeyes (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de base de datos 'DocumentoGrado'
                  celda 'IdDerechosPecuniarios'
                </option>
              </select>
            </div>
            <div className="form-group">
              <label> Formato </label>
              <select 
               value={formato}
               onChange={(e) => setFormato (e.target.value)}
               className="form-control">
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de base de datos 'CursosDocumentos'
                  celda 'IdFormat'
                </option>
              </select>
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
</div>

    </>
  )
}

export { DocumentoGrado }