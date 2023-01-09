import React from 'react'

const AdmisionDetalle = () => {
    const [admision, setAdmision] = React.useState("");
  const [convocatoria, setConvocatoria] = React.useState("");
  const [aspirante, setAspirante] = React.useState("");
  const [proceso, setProceso] = React.useState("");
  const [tipo, setTipo] = React.useState("");
  const [admitido, setAdmitido] = React.useState("");
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
              <label> Admisión Detalle</label>
              <input
              value={admision}
              onChange={(e) => setAdmision(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <label> Admisión </label>
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
                  <label>Aspirante</label>
                  <select
                    value={aspirante}
                    onChange={(e) => setAspirante(e.target.value)}
                    className="form-control"
                  >
                    <option>Seleccionar</option>
                    <option value={1}>
                      Obtener valor de la tabla de bases de datos
                      'IdAspirante'
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Tipo vinculación</label>
                  <select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className="form-control"
                  >
                    <option>Seleccionar</option>
                    <option value={1}>
                      Obtener valor de la tabla de bases de datos
                      'IdAspirante'
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Tipo admisión matrícula</label>
                  <select
                    value={admision}
                    onChange={(e) => setAdmision(e.target.value)}
                    className="form-control"
                  >
                    <option>Seleccionar</option>
                    <option value={1}>
                      Obtener valor de la tabla de bases de datos
                      'IdAspirante'
                    </option>
                  </select>
                </div>
                
                
                <div className="form-group">
                  <label>Proceso</label>
                  <select
                    value={proceso}
                    onChange={(e) => setProceso(e.target.value)}
                    className="form-control"
                  >
                    <option>Seleccionar</option>
                    <option value={1}>
                      Obtener valor de la tabla de bases de datos
                      'IdAspirante'
                    </option>
                  </select>
                </div>


                <div className="form-group">
                  <label>Derechos Pecuniarios</label>
                  <select
                    value={convocatoria}
                    onChange={(e) => setConvocatoria(e.target.value)}
                    className="form-control"
                  >
                    <option>Seleccionar</option>
                    <option value={1}>
                      Obtener valor de la tabla de bases de datos
                      'IdDerechosPecuniarios'
                    </option>
                  </select>
                </div>
             
                <div className="form-group">
            <label> Flag Admitido</label>
            <input 
            value={admitido}
            onChange={e => setAdmitido (e.target.value)}
            type="text" className="form-control" />
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
  )
}

export { AdmisionDetalle }