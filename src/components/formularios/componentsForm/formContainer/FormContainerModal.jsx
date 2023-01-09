import React from 'react'

const FormContainerModal = ({ children, title }) => {

    return (
        <div>
            <header className="modal-header">
                <h5 className="modal-title">{ title }</h5>
            </header>
            <main className="modal-body">
                { children }
            </main>
        </div>
    )
}

export { FormContainerModal }