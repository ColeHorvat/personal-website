import React from 'react'
import { motion } from 'framer-motion'
import STRING_CONSTANTS from '../Strings'

const HEADER_ANIM_DURATION = 0.75

const leftText = {
    hidden : { opacity: 0, x:-100},
    visible : { opacity: 1, x:0}
}

function ProjectHeader() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={leftText} 
            transition={{ duration: HEADER_ANIM_DURATION, delay: 0.25}}
            className="px-5 pb-10 pt-5 text-center lg:text-left">
            <motion.h2 className="text-5xl font-bold">Projects</motion.h2>
        </motion.div>
    )
}

export default ProjectHeader
