import React from 'react'

import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { Table } from '../componentsForm/table/Table'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'

const TipoConvocatoria = props => {

    const {
        onCreate,
        title,
        tipoConvocatorias,
        attributes,
        onDelete,
        onUpdate,
        isOpenForm,
        handleSubmit,
        handleChange,
        loading,
        tipoConvocatoria,
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
                    Agregar tipo convocatoria
            </button>
            <Table 
                titleColumn={ title }
                data={ tipoConvocatorias }
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
                    formData={ tipoConvocatoria }
                    close={ handleClickAdd }
                    isCreate={ isCreate }
                />
            </Modal>
            <Modal isOpen={ isOpenDelete } close={ handleClickDelete }>
                <DeleteDialog 
                    deleteTuple={ deleteTuple }
                    handleClickDelete={ handleClickDelete }
                    element={ modoEstudio.Descripcion }
                    loading={ loading }
                />
            </Modal>
        </div> 
    )
}

export { TipoConvocatoria }