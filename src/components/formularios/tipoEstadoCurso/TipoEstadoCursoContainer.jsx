import React, { useState, useEffect } from 'react'
import { FormService } from '../../../services/api/formService'

import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';
import { TipoEstadoCurso } from './TipoEstadoCurso'

const TipoEstadoCursoContainer = () => {

    const [estadosCurso, setEstadosCurso] = useState([])
    const [estadoCurso, setEstadoCurso] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'tipoEstadoCurso'
    const id = 'IdTipoEstadoCurso'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadEstadosCurso()
            setLoading(false)
        }
        fecthData()
    }, []);

    const loadEstadosCurso = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setEstadosCurso(data)
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
            await create(estadoCurso)
        } else {
            await update(estadoCurso, id)
        }
        await loadEstadosCurso()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setEstadoCurso({
            ...estadoCurso,
            [name]: value
        })
    }

    const onCreate = () => {
        setEstadoCurso({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setEstadoCurso(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setEstadoCurso(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(estadoCurso, 'Estado', id)
        await loadEstadosCurso()
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
        <TipoEstadoCurso
            onCreate={ onCreate }
            title={ title }
            estadosCurso={ estadosCurso }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            estadoCurso={ estadoCurso }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
        />
    )
}

export { TipoEstadoCursoContainer }