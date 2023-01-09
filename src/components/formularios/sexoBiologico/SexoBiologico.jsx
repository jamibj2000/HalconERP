import React, { useState, useEffect } from 'react'
import { FormService } from '../../../services/api/formService'

import { Table } from '../componentsForm/table/Table'
import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'

const SexoBiologico = props => {

    const {
        onCreate,
        title,
        sexoBiologico,
        attributes,
        onDelete,
        onUpdate,
        isOpenForm,
        handleSubmit,
        handleChange,
        loading,
        sexo,
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
                    Agregar sexo biológico
            </button>
            <Table 
                titleColumn={ title }
                data={ sexoBiologico }
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
                    formData={ sexo }
                    close={ handleClickAdd }
                    isCreate={ isCreate }
                />
            </Modal>
            <Modal isOpen={ isOpenDelete } close={ handleClickDelete }>
                <DeleteDialog 
                    deleteTuple={ deleteTuple }
                    handleClickDelete={ handleClickDelete }
                    element={ sexo.Descripcion }
                    loading={ loading }
                />
            </Modal>
        </div> 
    )
}

export { SexoBiologico }