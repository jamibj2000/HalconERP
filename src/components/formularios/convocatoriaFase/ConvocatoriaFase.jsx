import React from 'react'

import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { Table } from '../componentsForm/table/Table'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'

const ConvocatoriaFase = props => {

    const {
        onCreate,
        title,
        convocatoriaFases,
        attributes,
        onDelete,
        onUpdate,
        isOpenForm,
        handleSubmit,
        handleChange,
        loading,
        convocatoriaFase,
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
                    Agregar fase de convocatoria
            </button>
            <Table 
                titleColumn={ title }
                data={ convocatoriaFases }
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
                    formData={ convocatoriaFase }
                    close={ handleClickAdd }
                    isCreate={ isCreate }
                    selectList={ selectList }
                />
            </Modal>
            <Modal isOpen={ isOpenDelete } close={ handleClickDelete }>
                <DeleteDialog 
                    deleteTuple={ deleteTuple }
                    handleClickDelete={ handleClickDelete }
                    element={ convocatoriaFase.Descripcion }
                    loading={ loading }
                />
            </Modal>
        </div> 
    )
}

export { ConvocatoriaFase }