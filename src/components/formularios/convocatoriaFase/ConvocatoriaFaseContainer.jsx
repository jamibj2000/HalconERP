import React, { useState, useEffect } from 'react'

import { FormService } from '../../../services/api/formService'
import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';
import { ConvocatoriaFase } from './ConvocatoriaFase.jsx';

const ConvocatoriaFaseContainer = () => {

    const [convocatoriaFases, setConvocatoriaFases] = useState([])
    const [convocatoriaFase, setConvocatoriaFase] = useState({})
    const [selectList, setSelectList] = useState([])
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

    const fecthDataSelect = async () => {
        const announcement = await formService.getAll('convocatoria')
        const profile = await formService.getAll('persona')

        setSelectList({
            announcement,
            profile
        })
    }

    const loadConvocatoriaFases = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setConvocatoriaFases(data)
        } catch (err) {

        }
    }

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadConvocatoriaFases()
            await fecthDataSelect()
            setLoading(false)
        }
        fecthData()
    }, []);
    
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
        'Convocatoria',
        'Descripción',
        'Observación',
        'FlagPuntaje',
        'Puntaje',
        'Persona'
    ]

    const attributes = [
        'IdConvocatoria',
        'Descripcion',
        'Observacion',
        'FlagPuntaje',
        'Puntaje',
        'IdPersona'
    ]

    return (
        <ConvocatoriaFase
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
            selectList={ selectList }
        />
    )
}

export { ConvocatoriaFaseContainer }