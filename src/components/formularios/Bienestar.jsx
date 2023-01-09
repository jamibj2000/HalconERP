import React from 'react'

const Bienestar= () => {

    const [actividades, setActividades] = React.useState('')
    const [periodo, setPeriodo] = React.useState('')
    const [soporte, setSoporte] = React.useState('')
    const [bienestar, setBienestar] = React.useState('')
    const [beneficiario, setBeneficiario] = React.useState('')

    const handleSubmit = (e) => {
        console.log(actividades,periodo,soporte,bienestar,beneficiario);
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
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Actividades</label>
                <select 
                  value={actividades}
            onChange={(e) => setActividades (e.target.value)}
                className="form-control">
                  <option>Select</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'Bienestar'
                    celda 'IdActividades'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label>Periodo</label>
                <select 
                value={periodo}
                onChange={(e)=> setPeriodo (e.target.value)}
                className="form-control">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'Bienestar'
                    celda 'IdPeriodo'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label>Soporte</label>
                <select 
                value={soporte}
                onChange={(e) => setSoporte (e.target.value)}
                className="form-control">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'Bienestar'
                    celda 'Soporte'
                  </option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Bienestar</label>
                <select 
                value={bienestar}
                onChange={(e) => setBienestar (e.target.value)}
                className="form-control">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'Bienestar'
                    celda 'IdBienestarTipo'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label>Tipo de beneficiario</label>
                <select 
                value={beneficiario}
            onChange={(e) => setBeneficiario (e.target.value)}
            className="form-control">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'Bienestar'
                    celda 'IdTipoBeneficiario'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label className="d-block"> Descripción</label>
                <textarea name="" cols={64} rows={10} defaultValue={""} />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="text-left pr-1">
                  <button href="#" className="btn btn-secondary">
                    Atrás
                  </button>
                </div>
              </div>
              <div className="text-right">
                <button href="#" className="btn btn-primary">
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

export { Bienestar }
