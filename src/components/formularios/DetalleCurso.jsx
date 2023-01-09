import React from 'react'

const DetalleCurso = () => {

    const [nombre,setNombre] = React.useState('')
    const [formato,setFormato] = React.useState('')
    const [documento,setDocumento] = React.useState('')

    const handleSubmit = (e) => {
        console.log(nombre,formato,documento);
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
              <label> Nombre </label>
              <input 
               value={nombre}
               onChange={(e) => setNombre (e.target.value)}
               type="text" className="form-control" />
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
              <label> Documento de grado </label>
              <select 
              value={documento}
              onChange={(e) => setDocumento (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={1}>
                  Obtener valor de la tabla de base de datos 'CursosDocumentos'
                  celda 'IdDocumentoGrado'
                </option>
              </select>
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
</div>

    </>
  )
}

export { DetalleCurso }