import React from 'react'

import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { Table } from '../componentsForm/table/Table'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'

const Convenio = props => {

    const {
        onCreate,
        title,
        convenios,
        attributes,
        onDelete,
        onUpdate,
        isOpenForm,
        handleSubmit,
        handleChange,
        loading,
        convenio,
        handleClickAdd,
        isCreate,
        isOpenDelete,
        handleClickDelete,
        deleteTuple,
        selectList,
    } = props

    return (
        <div>
            <button 
                type="button" 
                className="btn btn-outline-primary"
                onClick={ onCreate }>
                    Agregar convenio
            </button>
            <Table 
                titleColumn={ title }
                data={ convenios }
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
                    formData={ convenio }
                    close={ handleClickAdd }
                    isCreate={ isCreate }
                    selectList={ selectList }
                />
            </Modal>
            <Modal isOpen={ isOpenDelete } close={ handleClickDelete }>
                <DeleteDialog 
                    deleteTuple={ deleteTuple }
                    handleClickDelete={ handleClickDelete }
                    element={ convenio.Descripcion }
                    loading={ loading }
                />
            </Modal>
        </div> 
    )
}

export { Convenio }