import React, { useState, useEffect } from 'react'
import { FormService } from '../../../services/api/formService'

import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';
import { Ciudad } from './Ciudad'

const CiudadContainer = () => {

    const [ciudades, setCiudades] = useState([])
    const [ciudad, setCiudad] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'ciudad'
    const id = 'Idciudad'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadCiudades()
            setLoading(false)
        }
        fecthData()
    }, []);

    const loadCiudades = async () => {
        const data = await formService.getAll(endPoint)
        setCiudades(data)
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
            await create(ciudad, complement)
        } else {
            await update(ciudad, id)
        }
        await loadCiudades()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setCiudad({
            ...ciudad,
            [name]: value
        })
    }

    const onCreate = () => {
        setCiudad({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setCiudad(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setCiudad(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(ciudad, 'Estado', id)
        await loadCiudades()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Ciudad',
        'Departamento',
        'Descripción',
    ]

    const attributes = [
        'Idciudad',
        'IdDepartamento',
        'Descripcion',
    ]

    return (
        <Ciudad 
            onCreate={ onCreate }
            title={ title }
            ciudades={ ciudades }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            ciudad={ ciudad }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
        />
    )
}

export { CiudadContainer }