import React, { useState, useEffect } from 'react'
import { FormService } from '../../../services/api/formService'

import { ActividadesAcademicas } from './ActividadesAcademicas';
import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';

const ActividadesAcademicasContainer = () => {

    const [actividadesAcademicas, setActividadesAcademicas] = useState([])
    const [actividadAcademica, setActividadAcademica] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'actividadesAcademicas'
    const id = 'IdActividades'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadActividadesAcademicas()
            setLoading(false)
        }
        fecthData()
    }, []);

    const loadActividadesAcademicas = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setActividadesAcademicas(data)
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
                estado: 1
            }
            await create(actividadAcademica, complement)
        } else {
            await update(actividadAcademica, id)
        }
        await loadActividadesAcademicas()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        setActividadAcademica({
            ...actividadAcademica,
            [name]: value
        })
    }

    const onCreate = () => {
        setActividadAcademica({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setActividadAcademica(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setActividadAcademica(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(actividadAcademica, 'Estado', id)
        await loadActividadesAcademicas()
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
        <ActividadesAcademicas
            onCreate={ onCreate }
            title={ title }
            actividadesAcademicas={ actividadesAcademicas }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            actividadAcademica={ actividadAcademica }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
        />
    )
}

export { ActividadesAcademicasContainer }