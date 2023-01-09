import React from 'react'

const Table = props => {

    const { titleColumn,data,attributes,onDelete,onUpdate,} = props

    return (
        <table className="table">
            <thead>
                <tr>
                    {
                        titleColumn.map((title, key) => (
                            <th 
                                scope="col"
                                key={ key }
                            >
                                    { title }
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    !!data && data.map((item,index) => (
                        <tr key={ index }>
                            <th  scope="row" >{ index+1 }</th>
                            {
                                attributes.map((attribute, key) => (
                                    <td key={ key }>{ item[attribute] }</td>
                                ))
                            }
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    onClick={ () => onDelete(item) }>
                                        Eliminar
                                </button>
                            </td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-success"
                                    onClick={ () => onUpdate(item) }>
                                        Actualizar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export { Table }