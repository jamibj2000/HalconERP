import React, { useState, useEffect } from 'react'

import { PlanEstudio } from './PlanEstudio'
import { useCreate } from '../../../hooks/useCreate'
import { useUpdate } from '../../../hooks/useUpdate'
import { useDelete } from '../../../hooks/useDelete'
import { FormService } from '../../../services/api/formService'

const PlanEstudioContainer = () => {

    const [planesEstudio, setPlanesEstudio] = useState([])
    const [planEstudio, setPlanEstudio] = useState({})
    const [selectList, setSelectList] = useState([])
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'planEstudio'
    const id = 'IdPlandeEstudio'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    const loadPlanesEstudio = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setPlanesEstudio(data)
            console.log('datos', data)
        } catch (err) {

        }
    }
    
    const fecthDataSelect = async () => {
        try {
            const typeOfStudy= await formService.getAll('tipoEstudio')

            setSelectList({
                typeOfStudy,
            })
        } catch (err) {

        }
    }

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadPlanesEstudio()
            setLoading(false)
            await fecthDataSelect()
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
        console.log('data', planEstudio)
        setLoading(true)
        if (isCreate) {
            await create(planEstudio)
        } else {
            await update(planEstudio, id)
        }
        await loadPlanesEstudio()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setPlanEstudio({
            ...planEstudio,
            [name]: value
        })
    }

    const onCreate = () => {
        setPlanEstudio({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setPlanEstudio(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setPlanEstudio(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(planEstudio, 'Estado', id)
        await loadPlanesEstudio()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Nombre del plan de estudio',
        'Tipo de estudio',
        'Observación',
    ]

    const attributes = [
        'NombrePlanEstudio',
        'IdTipoEstudio',
        'Observacion'
    ]

    return (
        <PlanEstudio
            onCreate={ onCreate }
            title={ title }
            planesEstudio={ planesEstudio }
            planEstudio={ planEstudio }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
            selectList={ selectList }
        />
    )
}

export { PlanEstudioContainer }