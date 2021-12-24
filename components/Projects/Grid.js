import React from 'react'

function Grid({ children }) {
    return (
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 px-2 pb-5">
            { children }
        </div>
    )
}

export default Grid
