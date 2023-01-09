import React from 'react'

import './Option.css'

const Option = props => {

    const {
        index,
        item,
        handleChangeOption
    } = props
    
    return (
        <div 
            key={ index }
            className='Option'
            onClick={ () => handleChangeOption(item) }>
                <img 
                    className={"dimension-image"} 
                    // alt={'[image de la dimension]'+item.Descripcion} 
                    alt={' '} 
                    src={ item.fotos || '' } 
                />
                <span>
                    { item.Descripcion }
                </span>
        </div>
    )
}

export { Option }