import { useState } from "react"

import { FormService } from '../services/api/formService'

const useDelete = (endPoint) => {

    const [error, setError] = useState(null)
    const formService = new FormService()

    const drop = async (data, status, idData) => {
        const dataLocal = {
            ...data
        }
        try {
            dataLocal[status] = 0
            delete dataLocal[idData]
            const id = data[idData]
            const response = await formService.delete(endPoint, dataLocal, id)
        } catch (err) {
            setError(err)
        }
    }

    return [
        drop,
        error
    ]
}

export { useDelete }