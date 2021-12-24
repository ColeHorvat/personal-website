import React from 'react'
import Head from 'next/head'

function Container({ children }) {
    return (
        <div className="max-w-7xl mx-0 md:mx-auto px-0 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}

export default Container
