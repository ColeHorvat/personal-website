import React from 'react'
import { motion } from 'framer-motion'

const HEADER_ANIM_DURATION = 0.25

const header = {
    hidden : {opacity : 0},
    visible : {opacity : 1}
}

function Header() {
    return (
        <motion.nav 
            initial="hidden"
            animate="visible"
            transition={{ duration: HEADER_ANIM_DURATION}}
            variants={header}
            className="">
            <motion.div className="">
                <motion.div className="relative flex items-center justify-between h-16 px-5">
                    <motion.a className="text-xl font-medium p-2 hover:bg-gray-200" href="/">Cole Horvat</motion.a>
                    <motion.a className="text-xl p-2 hover:bg-gray-200" href="/Cole_Horvat_Resume.pdf" target="_blank">Resume</motion.a>
                    {/* ADD DARK MODE BUTTON LATER */}
                </motion.div>
            </motion.div>
        </motion.nav>
        
    )
}

export default Header
