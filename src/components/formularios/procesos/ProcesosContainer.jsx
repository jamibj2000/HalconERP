import React, { useState, useEffect } from 'react'
import { FormService } from '../../../services/api/formService'

import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';
import { Procesos } from './Procesos';

const ProcesosContainer = () => {

    const [procesos, setProcesos] = useState([])
    const [proceso, setProceso] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'procesos'
    const id = 'IdProceso'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadProcesos()
            setLoading(false)
        }
        fecthData()
    }, []);

    const loadProcesos = async () => {
        const data = await formService.getAll(endPoint)
        setProcesos(data)
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
            await create(proceso)
        } else {
            await update(proceso, id)
        }
        await loadProcesos()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setProceso({
            ...proceso,
            [name]: value
        })
    }

    const onCreate = () => {
        setProceso({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setProceso(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setProceso(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(proceso, 'Estado', id)
        await loadProcesos()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Modo estudio',
        'Descripción',
    ]

    const attributes = [
        'IdProceso',
        'Descripcion',
    ]

    return (
        <Procesos
            onCreate={ onCreate }
            title={ title }
            procesos={ procesos }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            proceso={ proceso }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
        />
    )
}

export { ProcesosContainer }