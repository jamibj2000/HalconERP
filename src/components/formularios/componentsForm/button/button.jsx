import React from 'react'

import './button.css'

const Button = (props) => {

    const {
        id,
        children, 
        type, 
        loading, 
        onClick
    } = props
    
    const classType = `button ${type}` 
    const buttonType = type === 'send' ? 'submit' : 'button'

    return (
        <button
            id={ id }
            type={ buttonType }
            onClick={ onClick }
            disabled={ loading }
            className={ classType }
        >
            { loading ? 'Loading...' : children }
        </button>
    )
}

export { Button }