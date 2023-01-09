import React from 'react';
import { FormContainer } from './componentsForm/formContainer/FormContainer'
import { Modal } from '../modal/Modal'

import ApiCrud from '../../services/api/forms/ApiCrud'


export default class Ventanas extends React.Component{
    constructor(props){
      super(props)
      this.state={
        "path":"ventanas",
        "modalCrear":false,
        "modalEditar":false,
        "modalEliminar":false,
        "registros":[],
        "itemActual":[],
        // personalizados
        "IdProcesoVentana":'',
        "IdModulo":'',
        "Descripcion":'',
        "Ventana":'',
        "path_v":'',
        "FechaCreacion":'',
        "Estado":'',            
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
          "registros":data.data
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
      let id
      var datos={
        
      }
      const apiCrud = new ApiCrud()
      const data = await apiCrud.eliminarRegistro(this.state.path,id,datos)
      this.obtenerRegistros()
    }

    actualizarRegistro= async ()=>{
      let id
      var datos={

      }
      const apiCrud = new ApiCrud()
      const data = await apiCrud.actualizarRegistro(this.state.path,id,datos)
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
            <th scope="col">Ventana</th>
            <th scope="col">Descripción</th>
            <th scope="col">Path</th>
            <th scope="col">Fecha de Creación</th>
            <th scope="col">Eliminar</th>
            <th scope="col">Actualizar</th>
          </tr>
        </thead>
      <tbody>
  
    {!!this.state.registros && this.state.registros.map((item,index)=>{
      return(<>
        <tr key={index}>
          <td  scope="row">{item.IdProcesoVentana}</td>
          <td>{item.Ventana}</td>
          <td>{item.Descripcion}</td>
          <td>{item.path}</td>
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
    <form>
          <div className="row">
            <div className="col-md-6">                  
              <div className="form-group">
                <label>Modulo</label>
                <select value={this.state.IdModulo} onChange={e =>this.setState({"IdModulo":e.target.value})} className="form-control">
                  <option>Seleccionar</option>
                  <option value={1}>
                    Obtener valor de la tabla de bases de datos 'Ventana'
                  </option>
                </select>
              </div>
              <div className="form-group">
                <div className="form-group">
                <label htmlFor="floatingTextarea">Ventana</label>
                <input type="text" className="form-control"value={this.state.Ventana} onChange={e =>this.setState({"Ventana":e.target.value})}  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-group">
                <label htmlFor="floatingTextarea">Descripción</label>
                <input type="text" className="form-control"value={this.state.Descripcion} onChange={e =>this.setState({"Descripcion":e.target.value})}  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-group">
                <label htmlFor="floatingTextarea">Path</label>
                <input type="text" className="form-control"value={this.state.path_v} onChange={e =>this.setState({"path":e.target.value_v})}  />
                </div>
              </div>
            </div>                        
          </div>

          <div className='d-flex justify-content-between pt-3'>
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="text-left">
                  <button type="submit" className="btn btn-secondary">
                    Cancelar
                  </button>
                </div>
              </div>
              <div className="text-right">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </div>
          </div>
          </div>

        </form>
        
    </Modal>
    {/* modal para editar registro */}
    <Modal isOpen={ this.state.modalEditar } close={()=>{this.setState({"modalEditar":false})}}>
      {/* { FormCreate() } */}
    </Modal>
    {/* modal para eliminar registro */}
    <Modal isOpen={this.state.modalEliminar} close={()=>{this.setState({"modalEliminar":false})}}>
        <h1>Estas seguro que deseas eliminar  {this.state.itemActual.Descripcion || ''} ?</h1>
        <button onClick={()=>{this.eliminarRegistro()}} className="btn btn-danger">Si</button>
        <button onClick={()=>{this.setState({"modalEliminar":false})}} className="btn btn-secondary">No</button>
    </Modal> 
  </tbody>
</table>
</FormContainer>

  
    </>
    )
}

}
