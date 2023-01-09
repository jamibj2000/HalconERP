import React, { useState, useEffect } from 'react'

import { FormService } from '../../../services/api/formService'
import { useCreate } from '../../../hooks/useCreate';
import { useUpdate } from '../../../hooks/useUpdate';
import { useDelete } from '../../../hooks/useDelete';
import { Convenio } from './Convenio';

const ConvenioContainer = () => {

    const [convenios, setConvenios] = useState([])
    const [convenio, setConvenio] = useState({})
    const [selectList, setSelectList] = useState([])
    const [loading, setLoading] = useState(false)
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const formService = new FormService()
    const endPoint = 'convenio'
    const id = 'IdConvenio'
    const [create, errorCreating] = useCreate(endPoint)
    const [update, errorUpdate] = useUpdate(endPoint)
    const [drop, errorDeleting] = useDelete(endPoint)

    const fecthDataSelect = async () => {
        try {
            const profile = await formService.getAll('persona')
            const agreementType = await formService.getAll('tipoConvenio')
            const conventionClass = await formService.getAll('claseConvenios')
            const country = await formService.getAll('paises')

            setSelectList({
                profile,
                agreementType,
                conventionClass,
                country
            })
        } catch (err) {

        }
    }

    const loadConvenios = async () => {
        try {
            const data = await formService.getAll(endPoint)
            setConvenios(data)
            console.log('data', data)
        } catch (err) {

        }
    }

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true)
            await loadConvenios()
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
        console.log('data', convenio)
        setLoading(true)
        if (isCreate) {
            await create(convenio)
        } else {
            await update(convenio, id)
        }
        await loadConvenios()
        handleClickAdd()
        setLoading(false)
    }

    const handleChange = (value, name) => {
        setConvenio({
            ...convenio,
            [name]: value
        })
    }

    const onCreate = () => {
        setConvenio({})
        setIsCreate(true)
        handleClickAdd()
    }

    const onUpdate = tuple => {
        setConvenio(tuple)
        setIsCreate(false)
        handleClickAdd()
    }

    const onDelete = tuple => {
        setConvenio(tuple)
        handleClickDelete()
    }

    const deleteTuple = async () => {
        setLoading(true)
        await drop(convenio, 'Estado', id)
        await loadConvenios()
        handleClickDelete()
        setLoading(false)
    }

    const title = [
        'ID',
        'Persona',
        'Descripcion',
        'Fecha de inicio',
        'Fecha de inicialización',
        'Tipo de convenio',
        'Clase de convenio',
        'FlagInstMulti',
        'País'   
    ]

    const attributes = [
        'IdPersona',
        'Descripcion',
        'FechaInicio',
        'FechaFin',
        'IdTipoConvenio',
        'IdClaseConvenios',
        'FlagInstMulti',
        'IdPais'
    ]

    return (
        <Convenio
            onCreate={ onCreate }
            title={ title }
            convenios={ convenios }
            attributes={ attributes }
            onDelete={ onDelete }
            onUpdate={ onUpdate }
            isOpenForm={ isOpenForm }
            handleSubmit={ handleSubmit }
            handleChange={ handleChange }
            loading={ loading }
            convenio={ convenio }
            handleClickAdd={ handleClickAdd }
            isCreate={ isCreate }
            isOpenDelete={ isOpenDelete }
            handleClickDelete={ handleClickDelete }
            deleteTuple={ deleteTuple }
            selectList={ selectList }
        />
    )
}

export { ConvenioContainer }