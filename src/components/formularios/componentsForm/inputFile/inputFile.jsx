import React from 'react'

const InputFile = props => {

    const {
        id,
        label,
        name,
        accept,
        onChange
    } = props

    return (
        <div className="form-group m-1">
            {
                label && (
                    <label 
                        htmlFor={ id }
                        className="mb-2 mt-3"
                    >
                        { label }
                    </label>
                )
            }
            <input
                id={ id }
                type='file'
                accept={ accept }
                name={ name }
                onChange={ e => onChange(e.target.files) }
                className="form-control"
            />    
        </div>
    )
}

export { InputFile }