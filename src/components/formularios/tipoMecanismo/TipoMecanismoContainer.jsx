import React, { useState, useEffect } from 'react'
import { FormService } from '../../../services/api/formService'

import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';
import { TipoMecanismo } from './TipoMecanismo';

const TipoMecanismoContainer = () => {

    const [mecanismos, setMecanismos] = useState([])
    const [mecanismo, setMecanismo] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'tipoMecanismo'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadMecanismos()
            setLoading(false)
        }
        fecthData()
    }, []);

    const loadMecanismos = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setMecanismos(data)
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
            await create(mecanismo)
        } else {
            await update(mecanismo, 'IdTipoMecanismo')
        }
        await loadMecanismos()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setMecanismo({
            ...mecanismo,
            [name]: value
        })
    }

    const onCreate = () => {
        setMecanismo({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setMecanismo(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setMecanismo(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(mecanismo, 'Estado', 'IdTipoMecanismo')
        await loadMecanismos()
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
        <TipoMecanismo
            onCreate={ onCreate }
            title={ title }
            mecanismos={ mecanismos }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            mecanismo={ mecanismo }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
        />
    )
}

export { TipoMecanismoContainer }