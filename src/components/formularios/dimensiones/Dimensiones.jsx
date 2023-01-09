import React from 'react'

import { Table } from '../componentsForm/table/Table'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'
import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { FormContainer } from '../componentsForm/formContainer/FormContainer'

const Dimensiones = props => {

    const {
        onCreate,
        title,
        dimensiones,
        attributes,
        onDelete,
        onUpdate,
        isOpenForm,
        handleSubmit,
        handleChange,
        loading,
        dimension,
        handleClickAdd,
        isCreate,
        isOpenDelete,
        handleClickDelete,
        deleteTuple,
    } = props

    return (
        <div>
            <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={ onCreate }>
                    Agregar dimensión
            </button>
            <Table 
                titleColumn={ title }
                data={ dimensiones }
                attributes={ attributes }
                onDelete={ onDelete }
                onUpdate={ onUpdate }
                isLoading={ loading }
            />
            <Modal isOpen={ isOpenForm }>
                <Form 
                    handleSubmit={ handleSubmit }
                    handleChange={ handleChange }
                    loading={ loading }
                    formData={ dimension }
                    close={ handleClickAdd }
                    isCreate={ isCreate }
                />
            </Modal>
            <Modal isOpen={ isOpenDelete } close={ handleClickDelete }>
                <DeleteDialog 
                    deleteTuple={ deleteTuple }
                    handleClickDelete={ handleClickDelete }
                    element={ dimension.Descripcion }
                    loading={ loading }
                />
            </Modal>
        </div>
    )
}

export { Dimensiones }