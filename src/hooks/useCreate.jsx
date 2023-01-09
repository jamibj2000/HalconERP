import { useState } from 'react'

import { FormService } from '../services/api/formService'
import { alertaTimer } from '../helpers/alertas';

const useCreate = (endPoint) => {

    const [error, setError] = useState(null)
    const formService = new FormService()

    const create = async (data, complement) => {
        const dataLocal = {
            ...data,
            ...complement
        }
        try {
            const response = await formService.create(endPoint, dataLocal)
            if(response?.status==='Token is Expired') {
                alertaTimer("La sesion ha expirado",'info','4000')
                return false
            }  
        } catch (err) {
            setError(err)
        }
    }

    return [
        create,
        error,
    ]
}

export { useCreate }