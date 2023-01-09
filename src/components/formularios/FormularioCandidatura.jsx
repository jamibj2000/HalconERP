import React from 'react'

const FormularioCandidatura = () => {
    const [tipoDocumento, setTipoDocumento] = React.useState('')
    const [tarjetaIdentificacion, setTarjetaIdentificacion] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [segundoApellido,setSegundoApellido] = React.useState('')
    const [nombre, setNombre] = React.useState('')
    const [segundoNombre, setSegundoNombre] = React.useState('')
    const [fechaNacimiento, setFechaNacimiento] = React.useState('')
    const [genero, setGenero] = React.useState('')
    const [masculino, setMasculino] = React.useState('')
    const [femenino, setFemenino] = React.useState('')
    const [correo, setCorreo] = React.useState('')
    const [estadoCivil, setEstadoCivil] = React.useState('')
    const [grupoSanguineo, setGrupoSanguineo] = React.useState('')
    const [grupoEtnico, setGrupoEtnico] = React.useState('')
    const [especialidad, setEspecialidad] = React.useState('')
    const [profesional, setProfesional] = React.useState('')
    const [acuerdo, setAcuerdo] = React.useState('')
    const [direccion1, setDireccion1] = React.useState('')
    const [direccion2, setDireccion2] = React.useState('')
    const [estrato, setEstrato] = React.useState('')
    const [pais, setPais] = React.useState('')
    const [departamento, setDepartamento] = React.useState('')
    const [municipio, setMunicipio] = React.useState('')


    const handleSubmit = (e) => {
      console.log(tipoDocumento,tarjetaIdentificacion,apellido,segundoApellido,nombre,segundoNombre,fechaNacimiento,genero,masculino,femenino,correo,estadoCivil,grupoSanguineo,setGrupoEtnico,especialidad,profesional,acuerdo,direccion1,direccion2,estrato,pais,departamento,municipio);
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
        style={{ width: "35%" }}
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
              <label> Tipo de documento</label>
              <select 
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento (e.target.value)}
                className="form-control">
                <option>Seleccionar</option>
                <option value={1}>Tarjeta de identificación</option>
                <option value={2}>
                  Documento de identificación anticipado
                </option>
                {/* Docuemnto de Identidad Extrangera */}
                <option value={3}>Tarjeta de identificación anticipada</option>
                {/* Cedula de Extrangeria */}
                <option value={4}>Documento de identidad</option>
                {/* Tarjeta de Identidad */}
                <option value={5}>Pasaporte</option>
              </select>
            </div>
            <div className="form-group">
              <label> Tarjeta de identificación</label>
              <input 
              value={tarjetaIdentificacion}
              onChange={(e) => setTarjetaIdentificacion (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label> Apellido</label>
              <input 
              value={apellido}
              onChange={(e) => setApellido (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label> Segundo apellido</label>
              <input 
              value={segundoApellido}
              onChange={(e) => setSegundoApellido (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label> Nombre</label>
              <input 
              value={nombre}
              onChange={(e) => setNombre (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label> Segundo nombre</label>
              <input 
              value={segundoNombre}
              onChange={(e) => setSegundoNombre (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Fecha de nacimiento</label>
              <input 
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento (e.target.value)}
              type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label className="d-block">Género:</label>
              <div className="form-check form-check-inline">
                <input
                  value={genero}
                  onChange={(e) => setGenero (e.target.value)}
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender_male"
                />
                <label className="form-check-label" htmlFor="gender_male">
                  Masculino
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                value={masculino}
                onChange={(e) => setMasculino (e.target.value)}
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="gender_female"
                />
                <label className="form-check-label" htmlFor="gender_female">
                  Femenino
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label> Correo electrónico</label>
              <input 
              value={correo}
              onChange={(e) => setCorreo (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Estado civil</label>
              <select 
              value={estadoCivil}
             onChange={(e) => setEstadoCivil (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={1}>Soltero</option>
                <option value={2}>Casado</option>
                <option value={3}>Divorciado</option>
                <option value={4}>Viudo</option>
              </select>
            </div>
            <div className="form-group">
              <label>Grupo sanguíneo</label>
              <select 
              value={grupoSanguineo}
              onChange={(e) => setGrupoSanguineo (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={1}>A+</option>
                <option value={1}>A-</option>
                <option value={2}>O+</option>
                <option value={2}>O-</option>
                <option value={3}>B+</option>
                <option value={3}>B-</option>
                <option value={4}>AB+</option>
                <option value={4}>AB-</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                {" "}
                <div className="form-group">
                  <label>Grupo étnico</label>
                  <select 
                  value={grupoEtnico}
                  onChange={(e) => setGrupoEtnico (e.target.value)}
                  className="form-control">
                    <option>Seleccionar grupo étnico</option>
                    <option value={1}>No responde</option>
                    <option value={2}>Poblaciones indígenas</option>
                    <option value={3}>Personas de raza negra</option>
                    <option value={4}>Rrom people</option>
                    <option value={4}>No pertenece</option>
                  </select>
                </div>
              </label>
              <select className="form-control">
                <option>Seleccionar</option>
                <option value={1}>A+</option>
                <option value={1}>A-</option>
                <option value={2}>O+</option>
                <option value={2}>O-</option>
                <option value={3}>B+</option>
                <option value={3}>B-</option>
                <option value={4}>AB+</option>
                <option value={4}>AB-</option>
              </select>
            </div>
            <div className="form-group">
              <label>Especialidad</label>
              <input 
              value={especialidad}
             onChange={(e) => setEspecialidad (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Profesional</label>
              <input 
              value={profesional}
              onChange={(e) => setProfesional (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Acuerdo</label>
              <input 
              value={acuerdo}
             onChange={(e) => setAcuerdo (e.target.value)}
              ype="text" className="form-control" />
            </div>
          </div>
        </div>
        <h4 className="card-title">Dirección postal</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Línea de direcciones 1</label>
              <input 
              value={direccion1}
              onChange={(e) => setDireccion1 (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Línea de direcciones 2</label>
              <input 
              value={direccion2}
              onChange={(e) => setDireccion2 (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Estrato</label>
              <select 
              value={estrato}
              onChange={(e) => setEstrato (e.target.value)}
              className="form-control">
                <option>Seleccionar</option>
                <option value={0}>No responde</option>
                <option value={1}>Estrato 1</option>
                <option value={2}>Estrato 2</option>
                <option value={3}>Estrato 3</option>
                <option value={4}>Estrato 4</option>
                <option value={5}>Estrato 5</option>
                <option value={6}>Estrato 6</option>
                <option value={7}>Sin estrato</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>País</label>
              <select 
              value={pais}
              onChange={(e) => setPais (e.target.value)}
              className="form-control">
                <option>Seleccionar datos del país de la tabla </option>
                <option value={170}>Colombia</option>
              </select>
            </div>
            <div className="form-group">
              <label>Departamento</label>
              <select 
              value={departamento}
              onChange={(e) => setDepartamento (e.target.value)}
              className="form-control">
                <option>Seleccionar datos del departamento de la tabla</option>
                <option value={1}>Bogota</option>
              </select>
            </div>
            <div className="form-group">
              <label>Municipio</label>
              <select 
              value={municipio}
              onChange={(e) => setMunicipio (e.target.value)}
              className="form-control">
                <option>Seleccionar datos de la ciudad de la tabla</option>
                <option value={1}>Bogota</option>
              </select>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="btn buttonSend">
            Enviar
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

   </>
  )
}

export { FormularioCandidatura }