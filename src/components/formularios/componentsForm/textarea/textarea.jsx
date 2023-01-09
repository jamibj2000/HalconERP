import React from 'react'

const TextArea = props => {

    const {
        id,
        label,
        name,
        value,
        placeholder,
        cols,
        rows,
        onChange
    } = props

    return (
        <div className="form-group m-1">
            {
                label && (
                    <label 
                        className="d-block mb-2 mt-3" 
                        htmlFor={ id }
                    >
                        { label }
                    </label>
                )
            }
            <textarea
                id={ id }
                name={ name }
                value={ value }
                placeholder={ placeholder } 
                onChange={ e => onChange(e.target.value, e.target.name) }
                className="form-control"
                cols={ cols || 30 } 
                rows={ rows || 2 } 
            />
        </div>
    )
}

export { TextArea }