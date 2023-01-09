import React, { useState, useEffect } from 'react'
import { FormService } from '../../../services/api/formService'

import { Table } from '../componentsForm/table/Table'
import { Modal } from '../../modal/Modal'
import { Form } from './Form'
import { DeleteDialog } from '../componentsForm/deleteDialog/DeleteDialog'
import { useCreate } from '../../../hooks/useCreate'
import { useUpdate} from '../../../hooks/useUpdate'
import { useDelete } from '../../../hooks/useDelete'
import { Dimensiones } from './Dimensiones'

const DimensionesContainer = () => {

    const [dimensiones, setDimensiones] = useState([])
    const [dimension, setDimension] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'dimensiones'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadDimensiones()
            setLoading(false)
        }
        fecthData()
    }, []);

    const loadDimensiones = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setDimensiones(data)
        } catch (err) {

        }
    }

    const handleClickAdd = () => {
        setIsOpenForm(!isOpenForm)
    }

    const handleClickDelete = () => {
        setIsOpenDelete(!isOpenDelete)
    }
    
    const handleSubmit = async e => {
        e.preventDefault()

        setLoading(true)
        if (isCreate) {
            const complement = {
                fotos: "https://"
            }
            await create(dimension, complement)
        } else {
            await update(dimension, 'IdDimension')
        }
        await loadDimensiones()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setDimension({
            ...dimension,
            [name]: value
        })
    }

    const onCreate = () => {
        setDimension({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setDimension(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setDimension(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(dimension, 'Estado', 'IdDimension')
        await loadDimensiones()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Descripción',
        'Observacion',
        'Sucursal',
        'Reglamento',
        'Siglas',
        'Actualizar',
        'Eliminar',
    ]

    const attributes = [
        'Descripcion',
        'Observacion',
        'idSucursal',
        'Reglamentacion',
        'Siglas'
    ]

    return (
        <Dimensiones
            onCreate={ onCreate }
            title={ title }
            dimensiones={ dimensiones }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            dimension={ dimension }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
        />
    )
}

export { DimensionesContainer }