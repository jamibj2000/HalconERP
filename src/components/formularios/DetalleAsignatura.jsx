import React from 'react'

const DetalleAsignatura = () => {

    const [tipo,setTipo] = React.useState('')
    const [concepto,setConcepto] = React.useState('')
    const [uvt,setUvt] = React.useState('')
    const [codigo,setCodigo] = React.useState('')

    const handleSubmit = (e) => {
        console.log(tipo,concepto,uvt,codigo);
        e.preventDefault();
    }
  return (
    <>
    <div className="card">
  <div className="card-header">
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
            <div className="col-md-6">
              <div className="form-group">
                <label> Tipo Pecuniario </label>
                <select 
                value={tipo}
                onChange={(e) => setTipo (e.target.value)}
                className="form-control">
                  <option>Selecionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos
                    'DerechoPecuniario' celda 'IdTipoDerechoPecuniario'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label> Concepto </label>
                <textarea
                  value={concepto}
                  onChange={(e) => setConcepto (e.target.value)}
                  name=""
                  className="form-control"
                  cols={30}
                  rows={10}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label> Uvt</label>
                <input 
                value={uvt}
                onChange={(e) => setUvt (e.target.value)}
                type="number" className="form-control" />
              </div>
              <div className="form-group">
                <label> Código </label>
                <input 
                value={codigo}
                onChange={(e) => setCodigo (e.target.value)}
                type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export { DetalleAsignatura }