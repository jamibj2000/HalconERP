import React from 'react'

import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { Table } from '../componentsForm/table/Table'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'

const TipoMecanismo = props => {

    const {
        onCreate,
        title,
        mecanismos,
        attributes,
        onDelete,
        onUpdate,
        isOpenForm,
        handleSubmit,
        handleChange,
        loading,
        mecanismo,
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
                    Agregar tipo de mecanismo
            </button>
            <Table
                titleColumn={ title }
                data={ mecanismos }
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
                    formData={ mecanismo }
                    close={ handleClickAdd }
                    isCreate={ isCreate }
                />
            </Modal>
            <Modal isOpen={ isOpenDelete } close={ handleClickDelete }>
                <DeleteDialog 
                    deleteTuple={ deleteTuple }
                    handleClickDelete={ handleClickDelete }
                    element={ mecanismo.Descripcion }
                    loading={ loading }
                />
            </Modal>
        </div>
    )
}

export { TipoMecanismo }