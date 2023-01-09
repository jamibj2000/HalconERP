import React from 'react'

import { Button } from '../button/button'

const DeleteDialog = props => {

    const {
        deleteTuple, 
        handleClickDelete, 
        element,
        loading
    } = props

    return (
        <div>
            <h3>
                ¿Estas seguro que deseas eliminar { element || ''}?
            </h3>
            <Button 
                onClick={ deleteTuple }
                loading={ loading }
                type='danger'>
                    Si
            </Button>
            <Button 
                onClick={ handleClickDelete }
                loading={ loading }
                type='back'>
                    No
            </Button>
        </div>
    )
}

export { DeleteDialog }