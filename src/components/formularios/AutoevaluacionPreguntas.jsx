import React from 'react'

const Candidato= () => {

    const [identificacion, setIdentificacion] =  React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [apellido2, setApellido2] = React.useState('')
    const [nombre, setNombre] = React.useState('')
    const [nombre2, setNombre2] = React.useState('')
    const [telefono, setTelefono] = React.useState('')
    const [direccion, setDireccion] = React.useState('')
    const [especialidad, setEspecialidad] = React.useState('')
    const [archivos, setArchivos] = React.useState('')
    const [actividades, setActividades] = React.useState('')
    const [perfil, setPerfil] = React.useState('')
    const [programa, setPrograma] = React.useState('')
    const [proceso, setProceso] = React.useState('')
    const [observacion, setObservacion] = React.useState('')
    const [pais, setPais] = React.useState('')
    const [perfil1, setPerfil1] = React.useState('')
    const [tipo, setTipo] = React.useState('')
    const [calificacion, setCalificacion] = React.useState('')
    const [deposito, setDeposito] = React.useState('')
    const [url, setUrl] = React.useState('')
    const [codigo, setCodigo] = React.useState('')
    const handleSubmit = (e) => {
        console.log();
        e.preventDefault();	
    }
  return (

      <><div className="card">
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
                <label> Tarjeta de identificación </label>
                <input 
                	 value={identificacion} 
                   onChange={e => setIdentificacion(e.target.value)}
                type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label> Apellido</label>
                <input 
                	 value={apellido} 
                   onChange={e => setApellido(e.target.value)}
                type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label> Segundo apellido </label>
                <input 
                value={apellido2} 
                onChange={e => setApellido2(e.target.value)}
                type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label> Nombre </label>
                <input 
                value={nombre} 
                onChange={e => setNombre(e.target.value)}
                type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label> Segundo nombre </label>
                <input 
                value={nombre2} 
                onChange={e => setNombre2(e.target.value)}
                type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label> Teléfono </label>
                <input 
                value={telefono} 
                onChange={e => setTelefono(e.target.value)}
                type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label> Dirección </label>
                <input 
                value={direccion} 
                onChange={e => setDireccion(e.target.value)}
                type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Especialidad</label>
                <input 
                value={especialidad} 
                onChange={e => setEspecialidad(e.target.value)}
                type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Archivos del repositorio</label>
                <input 
                value={archivos} 
                onChange={e => setArchivos(e.target.value)}
                type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label className="d-block">Person:</label>
                <div
                  className="form-check form-check-inline"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <input
                  value={perfil} 
                  onChange={e => setPerfil(e.target.value)}
                    type="checkbox"
                    className="form-check-input"
                    id="btn-checkoffer"
                    autoComplete="off"
                  />
                  <label className="form-check-label" htmlFor="btn-checkoffer">
                    Obtener valor de la tabla de base de datos « cell 'IdPersona'
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label> Actividades</label>
                <select 
                value={actividades} 
                onChange={e => setActividades(e.target.value)}
                className="select">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'IdActividades'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label> Programa de estudios</label>
                <select 
                value={programa} 
                onChange={e => setPrograma(e.target.value)}
                className="select">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'IdPlandeEstudio'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label> Proceso del curso</label>
                <select 
                value={proceso} 
                onChange={e => setProceso(e.target.value)}
                className="select">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de base de datos 'IdProceso'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="floatingTextarea"> Observaciones </label>
                <textarea
                value={observacion} 
                onChange={e => setObservacion(e.target.value)}
                  className="form-control"
                  id="floatingTextarea"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label> País </label>
                <select 
                value={pais} 
                onChange={e => setPais(e.target.value)}
                className="select">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de base de datos 'Aspirantes' celda
                    'IdCountry'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label>Person</label>
                <select 
                value={perfil1} 
                onChange={e => setPerfil1(e.target.value)}
                className="select">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de base de datos ’IdPersona'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label>Tipo de estado</label>
                <select 
                value={tipo} 
                onChange={e => setTipo(e.target.value)}
                className="select">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'IdTipoEstadoCurso'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label className="d-block">Calificación:</label>
                <div
                  className="form-check form-check-inline"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <input
                  value={calificacion} 
                  onChange={e => setCalificacion(e.target.value)}
                    type="checkbox"
                    className="form-check-input"
                    id="btn-checkcalification"
                    autoComplete="off"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="btn-checkcalification"
                  >
                    Obtener valor de la tabla de bases de datos 'FlagCalificacion'
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Tipo de mecanismo</label>
                <select 
                 value={tipo} 
                 onChange={e => setTipo(e.target.value)}
                 className="select">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'IdTipoMecanismo'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label> Depósito </label>
                <input
                value={deposito} 
                onChange={e => setDeposito(e.target.value)}
                  type="file"
                  className="form-control"
                  defaultValue="https://..."
                />
              </div>
              <div className="form-group">
                <label> Url </label>
                <input
                value={url} 
                onChange={e => setUrl(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="https://..."
                />
              </div>
              <div className="form-group">
                <label> Código </label>
                <input 
                value={codigo} 
                onChange={e => setCodigo(e.target.value)}
                type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="text-right">
            <button />
            <button className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
    
   </>
  )
}

export { AutoevaluacionPreguntas }
