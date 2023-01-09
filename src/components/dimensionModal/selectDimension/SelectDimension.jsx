import React from 'react'
import { Option } from '../Option/Option'

import './SelectDimension.css'

const SelectDimension = props => {

    const {
        dimensionesState,
        dimension,
        onAcceptDimensiones,
        setDimension
    } = props

    const handleChangeOption = item => {
        onAcceptDimensiones(item)
    }

    return (
        <div className='SelectDimension'>
            <h3 >
                <strong>
                    Seleccione Dimensión
                </strong>
            </h3>
            <div className='SelectDimension__options'>
                {
                    dimensionesState.map((item,index) => (     
                        <Option 
                            item={ item }
                            index={ index }
                            key={ index }
                            setDimension={ setDimension }
                            handleChangeOption={ handleChangeOption }
                        />
                    ))
                }
            </div>
            {/* <button 
                type="button" 
                className="btn btn-outline-primary btn-lg dimension" 
                onClick={ e => onAcceptDimensiones(e) }> 
                    Iniciar con {dimension.Descripcion}
            </button> */}
        </div>
    )
}

export { SelectDimension }