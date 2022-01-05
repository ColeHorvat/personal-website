import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

const ITEM_ANIM_DURATION = 0.5

const gridItemVar = {
    hidden : { scale: 0},
    visible : { scale: 1 }
}

function GridItem(props) {
    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={gridItemVar}
            transition={{ duration: ITEM_ANIM_DURATION, delay: props.animDelay }}
            className="rounded-lg shadow-md border border-transparent hover:shadow-xl hover:border-black/[0.2] bg-icon-blue/[0.9] h-52 p-2 relative">

            <motion.h1 className="text-xl pb-5 font-medium">{props.project.title}</motion.h1>
            <motion.h2 className="text-lg font-normal">{props.project.description}</motion.h2>

            <motion.div className="flex-inline absolute bottom-0 right-0 mr-4 mb-2">
                
                {/*ICONS*/}
                {props.project.isVersion &&
                    <motion.a href={props.project.versionUrl} target="_blank" rel="noreferrer"><i className="fab fa-github p-2 hover:bg-sky-300"></i></motion.a>
                }
                

                { props.project.isGame &&
                    <motion.a href={props.project.playUrl} target="_blank" rel="noreferrer"><i className="fas fa-play p-2 hover:bg-sky-300"></i></motion.a>
                }

                { props.project.isWebsite &&
                    <motion.a href={props.project.playUrl} target="_blank" rel="noreferrer"><i className="fas fa-code p-2 hover:bg-sky-300"></i></motion.a>
                }
            </motion.div>

        </motion.div>
    )
}

export default GridItem
