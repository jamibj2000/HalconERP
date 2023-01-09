import React from 'react'

const AcademicaCalendarioDetalleObs = () => {
  const [calendario, setCalendario] = React.useState("");
  const [gestion, setGestion] = React.useState("");
  const [usuario, setUsuario] = React.useState("");
  const [descripcion, setDescripcion] = React.useState('')

  const handleSubmit = (e) => {
    console.log();
    e.preventDefault();
  };
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
          <div
            className="card-body justify-content-center"
            style={{ position: "relative" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Calendario Académico Detalle</label>
                    <select
                      value={calendario}
                      onChange={(e) => setCalendario(e.target.value)}
                      className="form-control"
                    >
                      <option>Seleccionar</option>
                      <option value={1}>
                        Obtener valor de la tabla de bases de datos
                        'IdGestionAcademicoCalendarioDetalle'
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Calendario Académico Detalle Obs</label>
                    <select
                      value={gestion}
                      onChange={(e) => setGestion(e.target.value)}
                      className="form-control"
                    >
                      <option>Seleccionar</option>
                      <option value={1}>
                        Obtener valor de la tabla de bases de datos
                        'IdCalendarioAcadémicoDetalleObs'
                      </option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                    <label>Usuario</label>
                    <select
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      className="form-control"
                    >
                      <option>Seleccionar</option>
                      <option value={1}>
                        Obtener valor de la tabla de bases de datos
                        'IdUsuario'
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
            <label className="d-block"> Descripción </label>
            <textarea 
             value={descripcion}
             onChange={e => setDescripcion (e.target.value)}
             name="" cols={30} rows={2} />
          </div>
                </div>

                <div className="form-group">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div className="text-left pr-1">
                        <button type="submit" className="btn btn-success">
                          Nuevo
                        </button>
                      </div>
                      <div className="text-left">
                        <button type="submit" className="btn btn-secondary">
                          Editar
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <button type="submit" className="btn buttonSend">
                        Enviar
                      </button>
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

export { AcademicaCalendarioDetalleObs }