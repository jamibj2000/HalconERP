import React from 'react'

const DetalleBienestar = () => {

    const [bienestar,setBienestar] = React.useState('')
    const [perfil,setPerfil] = React.useState('')

    const handleSubmit = (e) => {
        console.log(bienestar,perfil);
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
            <label>Bienestar</label>
            <select 
            value={bienestar}
            onChange={(e) => setBienestar (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'BienestarDetalle'
                celda 'IdBienestar'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Perfil</label>
            <select 
            value={perfil}
            onChange={(e) => setPerfil (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos 'BienestarDetalle'
                celda 'IdPersona'
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

export { DetalleBienestar }