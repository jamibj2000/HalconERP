import React from 'react'

import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { Table } from '../componentsForm/table/Table'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'

const AspiranteFase = props => {

    const {
        onCreate,
        title,
        aspiranteFases,
        attributes,
        onDelete,
        onUpdate,
        isOpenForm,
        handleSubmit,
        handleChange,
        loading,
        aspiranteFase,
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
                    Agregar fase del aspirante
            </button>
            <Table 
                titleColumn={ title }
                data={ aspiranteFases }
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
                    formData={ aspiranteFase }
                    close={ handleClickAdd }
                    isCreate={ isCreate }
                />
            </Modal>
            <Modal isOpen={ isOpenDelete } close={ handleClickDelete }>
                <DeleteDialog 
                    deleteTuple={ deleteTuple }
                    handleClickDelete={ handleClickDelete }
                    element={ aspiranteFase.Descripcion }
                    loading={ loading }
                />
            </Modal>
        </div> 
    )
}

export { AspiranteFase }