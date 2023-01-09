import React from 'react'

const InputForm = props => {

    const {
        id,
        label,
        type, 
        placeholder, 
        autoComplete, 
        name,
        onChange, 
        value,
        required,
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
                type={ type }
                placeholder={ placeholder }
                autoComplete={ autoComplete || 'off'}
                name={ name }
                onChange={ onChange }
                value={ value }
                aria-required={ required }
                className="form-control"
            />
        </div>
    )
}

export { InputForm }