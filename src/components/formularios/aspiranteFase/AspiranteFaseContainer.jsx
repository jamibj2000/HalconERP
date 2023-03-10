import React, { useState, useEffect } from 'react'

import { FormService } from '../../../services/api/formService'
import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';
import { AspiranteFase } from './AspiranteFase.jsx';

const AspiranteFaseContainer = () => {

    const [convocatoriaFases, setConvocatoriaFases] = useState([])
    const [convocatoriaFase, setConvocatoriaFase] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'convocatoriaFase'
    const id = 'IdConvocatoriaFase'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadConvocatoriaFases()
            setLoading(false)
        }
        fecthData()
    }, []);

    const loadConvocatoriaFases = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setConvocatoriaFases(data)
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
            await create(convocatoriaFase)
        } else {
            await update(convocatoriaFase, id)
        }
        await loadConvocatoriaFases()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setConvocatoriaFase({
            ...convocatoriaFase,
            [name]: value
        })
    }

    const onCreate = () => {
        setConvocatoriaFase({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setConvocatoriaFase(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setConvocatoriaFase(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(convocatoriaFase, 'Estado', id)
        await loadConvocatoriaFases()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Aspirante',
        'Fase de la convocatoria',
        'FlagApro',
        'Puntaje'
    ]

    const attributes = [
        'IdAspirante',
        'IdConvocatoriaFase',
        'FlagApro',
        'PuntajeAspiranteFase'
    ]

    return (
        <AspiranteFase
            onCreate={ onCreate }
            title={ title }
            convocatoriaFases={ convocatoriaFases }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            convocatoriaFase={ convocatoriaFase }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
        />
    )
}

export { AspiranteFaseContainer }