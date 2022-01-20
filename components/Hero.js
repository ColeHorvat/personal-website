import React from 'react'
import Avatar from 'avataaars'
import { motion } from "framer-motion"

const HERO_ANIM_DURATION = 0.5

const leftText = {
    hidden : { opacity: 0},
    visible : { opacity: 1}
}

const rightText = {
    hidden : { opacity: 0},
	visible : { opacity: 1 },
}

function Hero() {
    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={leftText}
            transition={{ duration: HERO_ANIM_DURATION }}
            className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div className="py-10 px-5 float-left text-center lg:text-left">
                <motion.h1 className="pb-5 text-5xl font-bold">Hi there, I&apos;m Cole!</motion.h1>
                <motion.h3 className="text-xl">I&apos;m a Full-Stack Web Developer and Game Developer based out of British Columbia, Canada! 🇨🇦 <br />Currently working as a <span className="font-medium">Web Development Consultant</span> at <span className="font-medium underline text-sky-500"><a href="https://www.kaianalytics.com/" target="_blank" rel="noreferrer">Kai Analytics!</a></span></motion.h3>
            </motion.div>

            <motion.div 
                initial="hidden"
                animate="visible"
                variants={rightText}
                transition={{ duration: HERO_ANIM_DURATION }}
                className="flex justify-center lg:justify-end mb-10 lg:mb-0 px-5">
                <motion.div className="bg-icon-blue lg:my-5">
                    <Avatar
                        avatarStyle='Transparent'
                        topType='ShortHairShortWaved'
                        accessoriesType='Blank'
                        hairColor='BrownDark'
                        facialHairType='Blank'
                        clotheType='Hoodie'
                        clotheColor='Blue03'
                        eyeType='Happy'
                        eyebrowType='DefaultNatural'
                        mouthType='Smile'
                        skinColor='Light'
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Hero
