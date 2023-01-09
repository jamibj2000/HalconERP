import React, { useState, useEffect } from 'react'

import { PlanEstudioDetalle } from './PlanEstudioDetalle'
import { useCreate } from '../../../hooks/useCreate'
import { useUpdate } from '../../../hooks/useUpdate'
import { useDelete } from '../../../hooks/useDelete'
import { FormService } from '../../../services/api/formService'

const PlanEstudioDetalleContainer = () => {

    const [planEstudioDetalles, setPlanEstudioDetalles] = useState([])
    const [planEstudioDetalle, setPlanEstudioDetalle] = useState({})
    const [selectList, setSelectList] = useState([])
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'planestudiodetalle'
    const id = 'IdDetPlandeEstudio'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    const loadPlanEstudioDetalles = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setPlanEstudioDetalles(data)
            console.log('datos', data)
        } catch (err) {

        }
    }
    
    const fecthDataSelect = async () => {
        try {
            const studyPlan = await formService.getAll('planEstudio')

            console.log('studyPlan', studyPlan)

            setSelectList({
                studyPlan,
            })
        } catch (err) {

        }
    }

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadPlanEstudioDetalles()
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
        console.log('data', planEstudioDetalle)
        setLoading(true)
        if (isCreate) {
            await create(planEstudioDetalle)
        } else {
            await update(planEstudioDetalle, id)
        }
        await loadPlanEstudioDetalles()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setPlanEstudioDetalle({
            ...planEstudioDetalle,
            [name]: value
        })
    }

    const onCreate = () => {
        setPlanEstudioDetalle({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setPlanEstudioDetalle(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setPlanEstudioDetalle(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(planEstudioDetalle, 'Estado', id)
        await loadPlanEstudioDetalles()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Plan de estudio',
        'Descripción'
    ]

    const attributes = [
        'IdPlandeEstudio',
        'Descripcion'
    ]

    return (
        <PlanEstudioDetalle
            onCreate={ onCreate }
            title={ title }
            planEstudioDetalles={ planEstudioDetalles }
            planEstudioDetalle={ planEstudioDetalle }
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

export { PlanEstudioDetalleContainer }