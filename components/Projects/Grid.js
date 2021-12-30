import React from 'react'
import Script from 'next/script'

function Grid({ children }) {
    return (
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 px-2 pb-5">
            <Script src="https://kit.fontawesome.com/177a052e26.js"></Script>
            { children }
        </div>
    )
}

export default Grid
