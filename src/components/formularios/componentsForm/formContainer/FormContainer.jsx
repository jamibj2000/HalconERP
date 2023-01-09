import React from 'react'

import { ProgressBar } from '../progressBar/ProgressBar'

const FormContainer = ({ children, progress }) => {

    return (
        <div className="card width100">
            <header className="card-header">
                <ProgressBar
                    percentage={ progress }
                />
            </header>
            <main className="card-body">
                { children }
            </main>
        </div>
    )
}

export { FormContainer }