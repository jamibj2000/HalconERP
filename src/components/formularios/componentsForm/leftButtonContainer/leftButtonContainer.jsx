import React from 'react'

const LeftButtonContainer = ({ children }) => {
    return (
        <div className="d-flex">
            <div className="text-left pr-1">
                { children }
            </div>
        </div>
    )
}

export { LeftButtonContainer }