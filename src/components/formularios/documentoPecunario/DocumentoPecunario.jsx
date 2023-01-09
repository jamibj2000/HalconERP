import React from 'react'

const DocumentoPecunario = () => {
    const [usuario, setUsuario] = React.useState('')
    const [nombre, setNombre] = React.useState('')
    const [contraseña, setContraseña] = React.useState('')
    const [correo, setCorreo] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const handleSubmit = (e) => {
    console.log();
	e.preventDefault();	

    }

  return (
    <>
    <div className="card h-100">
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
           
             </div>
             
   
             <div className="form-group">
               <label>Usuario</label>
               <select 
               value={usuario}
               onChange={e => setUsuario (e.target.value)}
               className="form-control">
                 <option>Seleccionar</option>
                 <option value={1}>
                   Obtener valor de la tabla de bases de datos 'IdUsuario' celda
                   'IdCuentaPorCobrar'
                 </option>
               </select>
             </div>
   
             
   
             <div className="form-group">
               <label>Nombre de usuario</label>
               <select 
               value={nombre}
               onChange={e => setNombre (e.target.value)}
               className="form-control">
                 <option>Seleccionar</option>
                 <option value={1}>
                   Obtener valor de la tabla de bases de datos 'Usuario' celda
                   'IdCuentaPorCobrar'
                 </option>
               </select>
             </div>
   
             <div className="form-group">
              <label>Contraseña</label>
              <input 
               value={contraseña}
               onChange={e => setContraseña (e.target.value)}
              type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Correo</label>
              <input 
               value={correo}
               onChange={e => setCorreo (e.target.value)}
              type="text" className="form-control" />
            </div>
   
             <div className="form-group">
               <label className="d-block">Estado </label>
               <textarea 
                value={estado}
                onChange={e => setEstado (e.target.value)}
                name="" cols={30} rows={2} />
             </div>
           </div>
       
         <div className="form-group">
           <div className="d-flex justify-content-between">
             <div className="d-flex">
               <div className="text-left pr-1">
                 <button className="btn btn-secondary">
                   Atràs
                 </button>
               </div>
             </div>
             <div className="text-right">
               <button className="btn buttonSend">
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

export { DocumentoPecunario }