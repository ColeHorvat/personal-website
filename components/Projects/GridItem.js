import React from 'react'
import Head from 'next/head'


function GridItem(props) {
    return (
        <div className="rounded-lg bg-purple-400 h-52 p-2 relative">

            <h1>{props.projectTitle}</h1>
            <h2>{props.projectDescription}</h2>

            <div className="flex-inline absolute bottom-0 right-0 mr-4 mb-2">
                
                {/*ICONS*/}
                {props.isVersion &&
                    <a href={props.versionUrl} target="_blank" rel="noreferrer"><i className="fab fa-github pr-3"></i></a>
                }
                

                { props.isGame &&
                    <a href={props.playUrl} target="_blank" rel="noreferrer"><i className="fas fa-play"></i></a>
                }

                { props.isWebsite &&
                    <a href={props.playUrl} target="_blank" rel="noreferrer"><i className="fas fa-code"></i></a>
                }
            </div>

            </div>
    )
}

export default GridItem
