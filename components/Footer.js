import React from 'react'
import { motion } from 'framer-motion'

const FOOTER_ANIM_DURATION = 0.25

const footer = {
    hidden : {opacity : 0},
    visible : {opacity : 1}
}

function Footer(props) {
    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ duration: FOOTER_ANIM_DURATION }}
            variants={footer}
            className="inset-x-0 bottom-0">
            <motion.div className="flex px-2 pt-2 items-center justify-center">
                <motion.ul className="inline-flex text-gray-600">
                    <motion.li className=" px-2 sm:px-5 py-2 hover:bg-gray-200 text-xl"><motion.a href="mailto:ColeHorvat@gmail.com">Email</motion.a></motion.li>
                    <motion.li className="px-2 sm:px-5 py-2 hover:bg-gray-200 text-xl"><motion.a href={props.twitterUrl} target="_blank" rel="noreferrer">Twitter</motion.a></motion.li>
                    <motion.li className="px-2 sm:px-5 py-2 hover:bg-gray-200 text-xl"><motion.a href={props.githubUrl} target="_blank" rel="noreferrer">Github</motion.a></motion.li>
                    <motion.li className="px-2 sm:px-5 py-2 hover:bg-gray-200 text-xl"><motion.a href={props.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</motion.a></motion.li>
                </motion.ul>
            </motion.div>
            <motion.div className="flex px-2 items-center justify-center text-gray-500">
                <motion.p>Built with Next.js and TailwindCSS</motion.p>
            </motion.div>
        </motion.div>
    )
}

export default Footer
