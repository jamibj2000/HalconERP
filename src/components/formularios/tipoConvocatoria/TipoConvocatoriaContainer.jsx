import React, { useState, useEffect } from 'react'

import { FormService } from '../../../services/api/formService'
import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';
import { TipoConvocatoria } from './TipoConvocatoria';

const TipoConvocatoriaContainer = () => {

    const [tipoConvocatorias, setTipoConvocatorias] = useState([])
    const [tipoConvocatoria, setTipoConvocatoria] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'tipoconvocatoria'
    const id = 'IdTipoConvocatoria'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadTipoConvocatorias()
            setLoading(false)
        }
        fecthData()
    }, []);

    const loadTipoConvocatorias = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setTipoConvocatorias(data)
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
            await create(tipoConvocatoria)
        } else {
            await update(tipoConvocatoria, id)
        }
        await loadTipoConvocatorias()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setTipoConvocatoria({
            ...tipoConvocatoria,
            [name]: value
        })
    }

    const onCreate = () => {
        setTipoConvocatoria({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setTipoConvocatoria(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setTipoConvocatoria(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(tipoConvocatoria, 'Estado', id)
        await loadTipoConvocatorias()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Descripción',
        'Fecha de creación'
    ]

    const attributes = [
        'Descripcion',
        'FechaCreacion'
    ]

    return (
        <TipoConvocatoria
            onCreate={ onCreate }
            title={ title }
            tipoConvocatorias={ tipoConvocatorias }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            tipoConvocatoria={ tipoConvocatoria }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
        />
    )
}

export { TipoConvocatoriaContainer }