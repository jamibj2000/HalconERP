import React from 'react'

const ButtonsContainer = ({ children }) => {
    return (
        <div className="form-group mt-4">
            <div className="d-flex justify-content-between">
                { children }
            </div>
        </div>
    )
}

export { ButtonsContainer }