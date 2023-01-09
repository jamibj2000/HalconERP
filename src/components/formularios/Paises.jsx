import React from 'react'

const Paises = () => {

    const [codigo, setCodigo] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [alfa2, setAlfa2] = React.useState('')
    const [alfa3, setAlfa3] = React.useState('')

    const handleSubmit = (e) => {
      console.log(codigo,estado,descripcion,alfa2,alfa3);
      e.preventDefault();
    }
    const Form =()=>{
      return (<>
      <form >
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Código</label>
            <select 
            value={codigo}
            onChange={(e) => setCodigo (e.target.value)}
            className="form-control">
              <option>Seleccionar</option>
              <option value={1}>608
                {/* Obtener valor de la tabla de bases de datos 'Paises' celda
                'Codigo' */}
              </option>
              <option value={2}>
                12
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Alfa 2</label>
            <input 
            value={alfa2}
            onChange={(e) => setAlfa2 (e.target.value)}
            type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Alfa 3</label>
            <input 
            value={alfa3}
            onChange={(e) => setAlfa3 (e.target.value)}
            type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="d-block">Estado</label>
            <div className="form-check form-check-inline">
              <input
                value={estado}
                onChange={(e) => setEstado (e.target.value)}
                className="form-check-input"
                type="checkbox"
                name="status"
                id="id_Status"
              />
              <label className="form-check-label" htmlFor="id_Status">
                Obtener valor de la tabla de bases de datos 'Paises' celda
                'Estado'
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="floatingTextarea"> Descripción </label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion (e.target.value)}
                className="form-control"
                id="floatingTextarea"
                rows={2}
              />
            </div>
          </div>
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
    </form></>)
    }

  return (
   <>
   <div className="card">
  <div className="card-header">
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: "85%" }}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  </div>
  <div
    className="card-body justify-content-center"
    style={{ position: "relative" }}
  >
    
  </div>
</div>

   </>
  )
}

export { Paises }