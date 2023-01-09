import React from 'react'

const Checkbox = props => {

    const {
        id,
        title,
        children,
        checked,
        name,
        value,
        onChange
    } = props

    return (
        <div className="form-check form-check-inline mt-3">
            <span className="d-block">{ title }</span>
            <label className="form-check-label">
                <input
                    id={ id }
                    name={ name }
                    type='checkbox'
                    value={ value }
                    className="form-check-input"
                    checked={ checked }
                    indeterminate
                    autoComplete='off'
                    onChange={ e => onChange(e.target.checked, e.target.name) }
                />
                    <span>{ children }</span>
            </label>
        </div>
    )
}

export { Checkbox }