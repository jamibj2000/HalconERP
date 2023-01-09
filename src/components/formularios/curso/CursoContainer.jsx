import React, { useState, useEffect } from 'react'

import { Curso } from './Curso'
import { useCreate } from '../../../hooks/useCreate'
import { useUpdate } from '../../../hooks/useUpdate'
import { useDelete } from '../../../hooks/useDelete'
import { FormService } from '../../../services/api/formService'

const CursoContainer = () => {

    const [cursos, setCursos] = useState([])
    const [curso, setCurso] = useState({})
    const [selectList, setSelectList] = useState([])
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'curso'
    const id = 'IdCurso'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    const loadCursos = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setCursos(data)
            console.log('datos', data)
        } catch (err) {

        }
    }
    
    const fecthDataSelect = async () => {
        try {
            const group = await formService.getAll('grupo')
            const activities = await formService.getAll('actividadesAcademicas')
            const studyMode = await formService.getAll('modoEstudio')
            const studyPlan = await formService.getAll('planEstudio')
            const process = await formService.getAll('procesos')
            const people = await formService.getAll('persona')
            const stateCourse = await formService.getAll('tipoEstadoCurso')
            const mechanism = await formService.getAll('tipoMecanismo')

            console.log('group', group)

            setSelectList({
                group,
                activities,
                studyMode,
                studyPlan,
                process,
                people,
                stateCourse,
                mechanism
            })
        } catch (err) {

        }
    }

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadCursos()
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
        console.log('data', curso)
        setLoading(true)
        if (isCreate) {
            await create(curso)
        } else {
            await update(curso, id)
        }
        await loadCursos()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setCurso({
            ...curso,
            Repositorio: null,
            [name]: value
        })
    }

    const onCreate = () => {
        setCurso({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setCurso(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setCurso(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(curso, 'Estado', id)
        await loadCursos()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Grupo',
        'Actividades',
        'Modo de estudiante',
        'Nombre',
        'Observaciones',
        'Repositorio',
        // 'URL',
        // 'Plan de estudio',
        // 'Proceso',
        // 'Persona',
        // 'Estado curso',
        // 'Mecanismo',
        // 'Código'
    ]

    const attributes = [
        'IdGrupo',
        'IdActividades',
        'IdModoEstudio',
        'Nombre',
        'FlagOferta',
        'Observaciones',
        'Repositorio',
        // 'url',
        // 'IdPlandeEstudio',
        // 'IdProceso',
        // 'IdPersona',
        // 'FlagCalificacion',
        // 'IdTipoEstadoCurso',
        // 'IdTipoMecanismo',
        // 'Codigo'
    ]

    return (
        <Curso
            onCreate={ onCreate }
            title={ title }
            cursos={ cursos }
            curso={ curso }
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

export { CursoContainer }