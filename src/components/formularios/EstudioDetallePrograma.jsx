import React from 'react'

const DetallePrograma = () => {

    const [programa,setPrograma] = React.useState('')
    

    const handleSubmit = (e) => {
        console.log(programa);
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
        style={{ width: "63%" }}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  </div>
    <div className="card-body justify-content-center"
    style={{ position: "relative" }}>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Programa de estudio</label>
            <select 
            value={programa}
            onChange={(e) => setPrograma (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'PlanEstudioDetalle'
                cell 'IdPlanEstudio'
              </option>
            </select>
          </div>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="text-right">
                  <button className="btn btn-secondary">
                    Atrás
                  </button>
                </div>
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between">
                  <div className="text-right">
                    <button className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>


   </>
  );
}

export { DetallePrograma }