import React from 'react'

const Select = props => {

    const {
        id,
        name,
        onChange,
        value,
        label,
        options, 
        optionDefault,
        optionValue,
        optionName,
        secondOptionName 
    } = props

    return (
        <div  className="form-group m-1">
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
            <select
                id={ id }
                name={ name }
                onChange={ e => onChange(e.target.value, e.target.name) }
                value={ value }
                className="form-control"
            >
                <option hidden defaultValue>{ optionDefault || 'Seleccionar' }</option>
                {
                    options && (
                        options.map( (item, key) => (
                                <option 
                                    value={ item[optionValue] } 
                                    key={ key }>
                                        { `${item[optionName]} ${item[secondOptionName ] || ''}` }
                                </option>
                            )
                        )
                    )
                }
            </select>
        </div>
    )
}

export { Select }