import React, { useState, useEffect } from 'react'
import { FormService } from '../../../services/api/formService'

import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { alertaTimer } from '../../../helpers/alertas';
import { Table } from '../componentsForm/table/Table'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'

const ActividadesAcademicas = props => {

    const {
        onCreate,
        title,
        actividadesAcademicas,
        attributes,
        onDelete,
        onUpdate,
        isOpenForm,
        handleSubmit,
        handleChange,
        loading,
        actividadAcademica,
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
                    Agregar actividad académica
            </button>
            <Table 
                titleColumn={ title }
                data={ actividadesAcademicas }
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
                    formData={ actividadAcademica }
                    close={ handleClickAdd }
                    isCreate={ isCreate }
                />
            </Modal>
            <Modal isOpen={ isOpenDelete } close={ handleClickDelete }>
                <DeleteDialog 
                    deleteTuple={ deleteTuple }
                    handleClickDelete={ handleClickDelete }
                    element={ actividadAcademica.Descripcion }
                    loading={ loading }
                />
            </Modal>
        </div> 
    )
}

export { ActividadesAcademicas }