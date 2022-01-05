import React from 'react'
import Head from 'next/head'

function Container({ children }) {
    return (
        <div className="relative max-w-7xl mx-0 md:mx-auto px-0 sm:px-6 lg:px-8">
            <Head>
                <title>Cole Horvat</title>
            </Head>
            {children}
        </div>
    )
}

export default Container
