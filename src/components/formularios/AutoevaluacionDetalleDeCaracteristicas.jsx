import React from 'react'

const Detalle= () => {

    const [numero, setNumero] = React.useState('')
    const [caracteristica, setCaracteristica]= React.useState('')
    const [indicador, setIndicador] = React.useState('')
    const [detalle, setDetalle] = React.useState('')
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
             <label className="d-block"> Número </label>
             <input
              value={numero}
              onChange={(e) => setNumero (e.target.value)}
               type="number"
               className="form-control col-md-2 d-inline"
               
             />
           </div>
           <div className="form-group">
             <label>Detalle de características</label>
             <select 
              value={caracteristica}
              onChange={(e) => setCaracteristica (e.target.value)}
             className="form-control">
               <option>Seleccionar</option>
               <option value={1}>
                 Obtener valor de la tabla de bases de datos 'MatrizCaracDetalle'
                 celda 'IdMatrizCaracteristicasAuto'
               </option>
             </select>
           </div>
           <div className="form-group">
             <label>Indicador</label>
             <input 
              value={indicador}
              onChange={(e) => setIndicador (e.target.value)}
             type="number" className="form-control col-md-2 d-inline" />
           </div>
         </div>
         <div className="col-md-6">
           <div className="form-group">
             <label className="d-block"> Detalles </label>
             <textarea 
              value={detalle}
              onChange={(e) => setDetalle (e.target.value)}
             name="" cols={30} rows={10} />
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
  );
}

export { Detalle }

