import React from 'react'

const CaracteristicasAuto = () => {

    const [caracteristica,setCaracteristica] = React.useState('') 
    const [tamaño,setTamaño] = React.useState('') 
    const [activo,setActivo] = React.useState('') 
    const [descripcion,setDescripcion] = React.useState('') 
    const [mb,setMb] = React.useState('') 
  

    const handleSubmit = (e) => {
        console.log(caracteristica,tamaño,activo,descripcion,mb);
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
            <label>Características</label>
            <select 
            value={caracteristica}
            onChange={(e) => setCaracteristica (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>
                Obtener valor de la tabla de bases de datos
                'MatrizCaracteristicasAuto' celda 'IdMatrizAuto'
              </option>
            </select>
          </div>
          <div className="form-group">
            <label className="d-block"> Tamaño </label>
            <input
              value={tamaño}
              onChange={(e) => setTamaño (e.target.value)}
              type="number"
              className="form-control col-md-2 d-inline"
            />
            <label 
            value={mb}
            onChange={(e) => setMb (e.target.value)}
            className="col-md-6 d-inline">mb</label>
          </div>
          <div className="form-group">
            <label className="d-block"> Activo </label>
            <div className="form-check form-check-inline">
              <input
              value={activo}
              onChange={(e) => setActivo (e.target.value)}
                className="form-check-input"
                type="checkbox"
                name="status"
                id="id_Status"
              />
              <label className="form-check-label" htmlFor="id_Status">
                Obtener valor de la tabla de bases de datos 'MatrizAuto' celda
                'FlagSize'
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="d-block"> Descripción </label>
            <textarea 
            value={descripcion}
            onChange={(e) => setDescripcion (e.target.value)}
            name="" cols={30} rows={10}  />
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

export { CaracteristicasAuto }