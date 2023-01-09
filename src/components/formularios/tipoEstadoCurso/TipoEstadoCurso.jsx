import React, { useState, useEffect } from 'react'
import { FormService } from '../../../services/api/formService'

import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { alertaTimer } from '../../../helpers/alertas';
import { Table } from '../componentsForm/table/Table'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'

const TipoEstadoCurso = props => {

    const {
        onCreate,
        title,
        estadosCurso,
        attributes,
        onDelete,
        onUpdate,
        isOpenForm,
        handleSubmit,
        handleChange,
        loading,
        estadoCurso,
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
                    Agregar tipo de estado de curso
            </button>
            <Table 
                titleColumn={ title }
                data={ estadosCurso }
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
                    formData={ estadoCurso }
                    close={ handleClickAdd }
                    isCreate={ isCreate }
                />
            </Modal>
            <Modal isOpen={ isOpenDelete } close={ handleClickDelete }>
                <DeleteDialog 
                    deleteTuple={ deleteTuple }
                    handleClickDelete={ handleClickDelete }
                    element={ estadoCurso.Descripcion }
                    loading={ loading }
                />
            </Modal>
        </div> 
    )
}

export { TipoEstadoCurso }