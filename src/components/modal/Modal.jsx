import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = props => {

    const {
        isOpen,
        close,
        children
    } = props
    
    if (!isOpen) return null

    const container = e => {
        e.stopPropagation()
    }

    return ReactDOM.createPortal(
        <div 
            className='modal'
            onClick={ close }>
            <div 
                className='modal__container'
                onClick={ container }>
                    {
                        close && (
                            <section className='modal__header'>
                                <button
                                    className="btn-close"
                                    onClick={ close } 
                                />
                            </section>
                        )
                    }
                    <section>
                        { children }
                    </section>
            </div>
        </div>, 
        document.getElementById('modal')
    )
}

export { Modal }