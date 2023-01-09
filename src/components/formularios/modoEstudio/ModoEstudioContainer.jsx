import React, { useState, useEffect } from 'react'

import { FormService } from '../../../services/api/formService'
import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';
import { ModoEstudio } from './ModoEstudio';

const ModoEstudioContainer = () => {

    const [modosEstudio, setModosEstudio] = useState([])
    const [modoEstudio, setModoEstudio] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'modoEstudio'
    const id = 'IdModoEstudio'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadModosEstudio()
            setLoading(false)
        }
        fecthData()
    }, []);

    const loadModosEstudio = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setModosEstudio(data)
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
            await create(modoEstudio)
        } else {
            await update(modoEstudio, id)
        }
        await loadModosEstudio()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setModoEstudio({
            ...modoEstudio,
            [name]: value
        })
    }

    const onCreate = () => {
        setModoEstudio({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setModoEstudio(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setModoEstudio(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(modoEstudio, 'Estado', id)
        await loadModosEstudio()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Descripción',
    ]

    const attributes = [
        'Descripcion',
    ]

    return (
        <ModoEstudio
            onCreate={ onCreate }
            title={ title }
            modosEstudio={ modosEstudio }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            modoEstudio={ modoEstudio }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
        />
    )
}

export { ModoEstudioContainer }