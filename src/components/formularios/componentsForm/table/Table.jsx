import React from 'react'

import { Button } from '../button/button'
import {LoadingSpinner} from '../../../LoadingSpinner/LoadingSpinner'
const Table = ({
    titleColumn,
    data,
    attributes,
    onDelete,
    onUpdate,
    isLoading}) => {

    return (<>
        {isLoading?<LoadingSpinner />:
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
                            <th  scope="row" >{ index + 1 }</th>
                            {
                                attributes.map((attribute, key) => (
                                    <td key={ key }>{ item[attribute] }</td>
                                ))
                            }
                            <td>
                            <Button 
                                type='new'
                                onClick={ () => onUpdate(item) }
                            >
                                
                                Actualizar
                            </Button>
                            </td>
                            <td>
                            <Button 
                                type='danger'
                                onClick={ () => onDelete(item) }
                                >
                                Eliminar
                            </Button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
            }
                </>
    )
}

export { Table }