import React from 'react'
import Head from 'next/head'

function GridItem(props) {
    return (
        <div className="rounded-lg bg-purple-400 h-52 p-2 relative">

            <h1>Title</h1>
            <h2>Description</h2>

            <div className="flex-inline absolute bottom-0 right-0 mr-4 mb-2">
                <i className="fab fa-github pr-3"></i>
                { props.isGame &&
                    <i className="fas fa-play"></i>
                }
            </div>

            </div>
    )
}

export default GridItem
