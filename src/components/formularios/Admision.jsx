import React from "react";

const Admision = () => {
  const [admision, setAdmision] = React.useState("");
  const [convocatoria, setConvocatoria] = React.useState("");
  const [periodo, setPeriodo] = React.useState("");
  const [observacion, setObservacion] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [estado, setEstado] = React.useState("");
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
              <label> Admisión</label>
              <input
              value={admision}
              onChange={(e) => setAdmision(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>

                <div className="form-group">
                  <label>Convocatoría</label>
                  <select
                    value={convocatoria}
                    onChange={(e) => setConvocatoria(e.target.value)}
                    className="form-control"
                  >
                    <option>Seleccionar</option>
                    <option value={1}>
                      Obtener valor de la tabla de bases de datos
                      'IdConvocatoia'
                    </option>
                  </select>
                </div>
              </div>
            </div>
           
             <div className="form-group">
                  <label>Período</label>
                  <select
                    value={periodo}
                    onChange={(e) => setPeriodo(e.target.value)}
                    className="form-control"
                  >
                    <option>Seleccionar</option>
                    <option value={1}>
                      Obtener valor de la tabla de bases de datos
                      'IdPeriodo'
                    </option>
                  </select>
                </div>
         
            <div className="form-group">
              <label> Observación</label>
              <input
                value={observacion}
                onChange={(e) => setObservacion(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="d-block">Descripción </label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                name=""
                cols={30}
                rows={2}
              />
            </div>

            <div className="form-group">
              <label className="d-block"> Estado </label>
              <div className="form-check form-check-inline">
                <input
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
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

            <div className="form-group">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="text-left pr-1">
                    <button className="btn btn-secondary">Atràs</button>
                  </div>
                </div>
                <div className="text-right">
                  <button className="btn buttonSend">Enviar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { Admision }
