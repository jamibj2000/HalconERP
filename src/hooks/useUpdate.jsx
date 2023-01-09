import { useState } from 'react'

import { FormService } from '../services/api/formService'

const useUpdate = (endPoint) => {

    const [error, setError] = useState(null)
    const formService = new FormService()

    const update = async (data, idData) => {
        try {
            const dataLocal = {
                ...data
            }
            const id = data[idData]
            delete dataLocal[idData]
            const response = await formService.update(endPoint, dataLocal, id)
        } catch (err) {
            setError(err)
        }
    }

    return [
        update,
        error
    ]
}

export { useUpdate }