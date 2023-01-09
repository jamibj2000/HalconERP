import React from 'react'

import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { Table } from '../componentsForm/table/Table'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'

const PlanEstudioDetalle = props => {

    const {
        onCreate,
        title,
        planEstudioDetalles,
        planEstudioDetalle,
        attributes,
        onDelete,
        onUpdate,
        isOpenForm,
        handleSubmit,
        handleChange,
        loading,
        handleClickAdd,
        isCreate,
        isOpenDelete,
        handleClickDelete,
        deleteTuple,
        selectList
    } = props

    return (
        <div>
            <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={ onCreate }>
                    Agregar detalle del plan de estudio
            </button>
            <Table 
                titleColumn={ title }
                data={ planEstudioDetalles }
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
                    formData={ planEstudioDetalle }
                    close={ handleClickAdd }
                    isCreate={ isCreate }
                    selectList={ selectList }
                />
            </Modal>
            <Modal isOpen={ isOpenDelete } close={ handleClickDelete }>
                <DeleteDialog 
                    deleteTuple={ deleteTuple }
                    handleClickDelete={ handleClickDelete }
                    element={ planEstudioDetalle.Nombre }
                    loading={ loading }
                />
            </Modal>
        </div>
    )
}

export { PlanEstudioDetalle }