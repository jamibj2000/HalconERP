import React from 'react'

const Perfil = () => {
    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [grupoSanguineo, setGrupoSanguineo] = React.useState('')
    const [masculino, setMasculino] = React.useState('')	
    const [femenino, setFemenino] = React.useState('')
    const [usuario, setUsuario] = React.useState('')
    const [correo, setCorreo] = React.useState('')
    const [contrasena, setContrasena] = React.useState('')
    const [repitaContrasena, setRepitaContrasena] = React.useState('')
    const [direccion1, setDireccion1] = React.useState('')
    const [direccion2, setDireccion2] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const [ciudad, setCiudad] = React.useState('')
    const [pais, setPais] = React.useState('')
    const [codigoPostal, setCodigoPostal] = React.useState('')

    const handleSubmit = (e) => {
      console.log(nombre,apellido,grupoSanguineo,masculino,femenino,usuario,correo,contrasena,repitaContrasena,direccion1,direccion2,estado,ciudad,pais,codigoPostal);
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
    </div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Nombre</label>
              <input 
              value={nombre}
              onChange={(e) => setNombre (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Apellido</label>
              <input 
              value={apellido}
              onChange={(e) => setApellido (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Grupo sanguíneo</label>
              <select 
              value={grupoSanguineo}
             onChange={(e) => setGrupoSanguineo (e.target.value)}
              className="form-control">
                <option>Select</option>
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
              <label className="d-block">Género:</label>
              <div className="form-check form-check-inline">
                <input
                value={masculino}
                onChange={(e) => setMasculino(e.target.value)}
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
                  value={femenino}
                  onChange={(e) => setFemenino (e.target.value)}
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
              <label>Usuario</label>
              <input 
              value={usuario}
              onChange={(e) => setUsuario (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Correo electrónico</label>
              <input 
              value={correo}
              onChange={(e) => setCorreo (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input 
              value={contrasena}
              onChange={(e) => setContrasena (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Repita contraseña</label>
              <input 
              value={repitaContrasena}
              onChange={(e) => setRepitaContrasena (e.target.value)}
              type="text" className="form-control" />
            </div>
          </div>
        </div>
        <h4 className="card-title">Dirrección postal</h4>
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
              <label>Estado</label>
              <input 
              value={estado}
              onChange={(e) => setEstado (e.target.value)}
              type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Ciudad</label>
              <input 
              value={ciudad}
              onChange={(e) => setCiudad (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>País</label>
              <input 
              value={pais}
             onChange={(e) => setPais (e.target.value)}
              type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Código postal</label>
              <input type="text" className="form-control" />
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

export { Perfil }