import React from "react";

const ActaGestionCompromisos = () => {
  const [acta, setActa] = React.useState("");
  const [repositorio, setRepositorio] = React.useState("");
  const [area, setArea] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [fecha, setFecha] = React.useState("");
  const [observacion, setObservacion] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
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
                  <label>Acta Gestión Compromisos</label>
                  <select
                    value={acta}
                    onChange={(e) => setActa(e.target.value)}
                    className="form-control"
                  >
                    <option>Seleccionar</option>
                    <option value={1}>
                      Obtener valor de la tabla de bases de datos
                      'IdActaGestiónAcadémicaCompromiso' celda
                      'IdActaGestiónAcadémicaCompromiso'
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Acta Compromisos</label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="form-control"
              >
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de bases de datos 'IdAreaCompromiso'
                  celda 'IdAreaCompromiso'
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Acta Gestión Repositorio</label>
              <select
                value={repositorio}
                onChange={(e) => setRepositorio(e.target.value)}
                className="form-control"
              >
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de bases de datos
                  'IdAreaGestiónRepositorio' celda 'IdCuentaPorCobrar'
                </option>
              </select>
            </div>

            <div className="form-group">
              <div className="form-group">
                <label htmlFor="floatingTextarea">Fecha </label>
                <input
                  type="date"
                  className="form-control"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label> Observaciones</label>
              <input
                value={observacion}
                onChange={(e) => setObservacion(e.target.value)}
                type="text"
                className="form-control"
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

export { ActaGestionCompromisos }
