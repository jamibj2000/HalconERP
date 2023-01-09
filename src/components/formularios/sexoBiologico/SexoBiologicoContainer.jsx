import React, { useState, useEffect } from 'react'

import { FormService } from '../../../services/api/formService'
import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';
import { SexoBiologico } from './SexoBiologico'

const SexoBiologicoContainer = () => {

    const [sexoBiologico, setSexoBiologico] = useState([])
    const [sexo, setSexo] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'sexoBilogico'
    const id = 'IdSexo'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadSexoBiologico()
            setLoading(false)
        }
        fecthData()
    }, []);

    const loadSexoBiologico = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setSexoBiologico(data)
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
            await create(sexo)
        } else {
            await update(sexo, id)
        }
        await loadSexoBiologico()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setSexo({
            ...sexo,
            [name]: value
        })
    }

    const onCreate = () => {
        setSexo({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setSexo(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setSexo(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(sexo, 'Estado', id)
        await loadSexoBiologico()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Descripción',
        'Segunda descripción',
    ]

    const attributes = [
        'Descripcion',
        'DescripcionDos',
    ]

    return (
        <SexoBiologico
            onCreate={ onCreate }
            title={ title }
            sexoBiologico={ sexoBiologico }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            sexo={ sexo }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
        />
    )
        
}

export { SexoBiologicoContainer }