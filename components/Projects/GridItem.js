import React from 'react'
import Head from 'next/head'


function GridItem(props) {
    return (
        <div className="rounded-lg shadow-md border border-transparent hover:shadow-xl hover:border-black/[0.2] bg-icon-blue/[0.9] h-52 p-2 relative">

            <h1 className="text-xl pb-5 font-medium">{props.project.title}</h1>
            <h2 className="text-lg font-normal">{props.project.description}</h2>

            <div className="flex-inline absolute bottom-0 right-0 mr-4 mb-2">
                
                {/*ICONS*/}
                {props.project.isVersion &&
                    <a href={props.project.versionUrl} target="_blank" rel="noreferrer"><i className="fab fa-github p-2 hover:bg-sky-300"></i></a>
                }
                

                { props.project.isGame &&
                    <a href={props.project.playUrl} target="_blank" rel="noreferrer"><i className="fas fa-play p-2 hover:bg-sky-300"></i></a>
                }

                { props.project.isWebsite &&
                    <a href={props.project.playUrl} target="_blank" rel="noreferrer"><i className="fas fa-code p-2 hover:bg-sky-300"></i></a>
                }
            </div>

            </div>
    )
}

export default GridItem
