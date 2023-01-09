import React from 'react';
import { FormContainer } from './componentsForm/formContainer/FormContainer'
import { Modal } from '../modal/Modal'

import ApiCrud from '../../services/api/forms/ApiCrud'

export default class Usuarios extends React.Component{
    constructor(props){
      super(props)
      this.state={
        "path":"usuario",
        "modalCrear":false,
        "modalEditar":false,
        "modalEliminar":false,
        "itemActual":[],
        // personalizados
        
      }
    }

    // metodo inicia automatico
    componentDidMount(){
     this.obtenerRegistros()
    }

    obtenerRegistros= async ()=>{
        const apiCrud = new ApiCrud()
        const data = await apiCrud.obtenerRegistros(this.state.path)
        this.setState({
          "registros":data
        })
    }

    abrirModalEditar(){
      this.setState({"modalEditar":true})
    }

    abrirModalEliminar(item){
      this.setState({
        "modalEliminar":true,
        "itemActual":item
      })
    }
    eliminarRegistro= async ()=>{
      const apiCrud = new ApiCrud()
      const data = await apiCrud.eliminarRegistro(this.state.path,)
      this.obtenerRegistros()
    }

render(){
  return (
    <>
    <FormContainer progress='33'>
      <button type="button" class="btn btn-outline-primary" 
      onClick={()=>{ this.setState({"modalCrear":true})}}>Añadir Ventana
      </button>    
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Descripción</th>
            <th scope="col">Fecha de Creación</th>
            <th scope="col">Eliminar</th>
            <th scope="col">Actualizar</th>
          </tr>
        </thead>
      <tbody>
  
    {!!this.state.registros && this.state.registros.map((item,index)=>{
      return(<>
        <tr key={index}>
          <td scope="row">{item.IdUsuario}</td>
          <td>{item.NombreUsuario}</td>
          <td>{item.email}</td>
          <td>{item.Descripcion}</td>
          <td>{item.FechaCreacion}</td>
          {/* botones para actualziar y eliminar */}
          <td>
            <button  type="button" class="btn btn-success"
            onClick={()=>this.abrirModalEliminar(item)}>Actualizar</button>
          </td>
          <td>
            <button type="button" className="btn btn-danger"
            onClick={()=>this.abrirModalEliminar(item)}>Eliminar</button>
          </td>
          {/* ...botones */}
        </tr>
      </>)
    })}
    {/* modal para crear registro */}
    <Modal isOpen={ this.state.modalCrear } close={()=>{this.setState({"modalCrear":false})}}>
      {/* { FormCreate() } */}
    </Modal>
    {/* modal para editar registro */}
    <Modal isOpen={ this.state.modalCrear } close={()=>{this.setState({"modalCrear":false})}}>
      {/* { FormCreate() } */}
    </Modal>
    {/* modal para eliminar registro */}
    <Modal isOpen={this.state.modalEliminar} close={()=>{this.setState({"modalEliminar":false})}}>
        <h1>Estas seguro que deseas eliminar  {this.state.itemActual.NombreUsuario || ''} ?</h1>
        <button onClick={()=>{this.eliminarRegistro()}} className="btn btn-danger">Si</button>
        <button onClick={()=>{this.setState({"modalEliminar":false})}} className="btn btn-secondary">No</button>
    </Modal> 
  </tbody>
</table>
</FormContainer>
      {/* <div className="card h-100">
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
      <div
        className="card-body justify-content-center"
        style={{ position: "relative" }}
      >
        <form onSubmit={handleSubmit} >
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Proceso Ventana</label>
                <select 
         value={ventana} 
         onChange={e => setVentana(e.target.value)}
         className="form-control">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'Ventana'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label>Modulo</label>
                <select 
          value={modulo}
          onChange={(e) => setModulo(e.target.value)}
          className="form-control">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'Modulo'
                  </option>
                </select>
              </div>
            </div>
            
              <div className="form-group">
                <div className="form-group">
                  <label htmlFor="floatingTextarea">Fecha de creacion</label>
                  <input type="date" className="form-control"
          value={creacion}
          onChange={(e) => setCreacion (e.target.value)}  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="form-group">
                  <label 
          htmlFor="floatingTextarea"> Descripción </label>
                  <textarea 
                  value={descripcion}
          onChange={(e) => setDescripcion (e.target.value)}
                    className="form-control"
                    id="floatingTextarea"
                  />
               
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="text-left pr-1" >
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
                <button type="submit" className="btn btn buttonSend">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
   */}
    </>
    )
}

}
