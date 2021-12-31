import React from 'react'
import Avatar from 'avataaars'

function Hero() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="py-10 px-5 float-left text-center lg:text-left">
                <h1 className="pb-5 text-5xl font-bold">Hi there, I&apos;m Cole!</h1>
                <h3 className="text-xl">I&apos;m a Full-Stack Web Developer and Game Developer based out of British Columbia, Canada! 🇨🇦 <br />Currently working as a <span className="font-medium">Web Development Consultant</span> at <span className="font-medium underline text-sky-500"><a href="https://www.kaianalytics.com/" target="_blank" rel="noreferrer">Kai Analytics!</a></span></h3>
            </div>

            <div className="flex justify-center lg:justify-end px-5">
                <div className="bg-icon-blue lg:my-5">
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
                </div>
            </div>
        </div>
    )
}

export default Hero
