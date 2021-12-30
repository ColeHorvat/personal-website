import React from 'react'
import Avatar from 'avataaars'

function Hero() {
    return (
        <div className="grid bg-slate-400 grid-cols-1 lg:grid-cols-2">
            <div className="py-10 px-5 float-left">
                <h1 className="pb-5">Hi there! I&apos;m Cole!</h1>
                <h3>I&apos;m a Full-Stack Web Developer and Game Developer based out of Vancouver, BC! <br />Currently working as a Web Development Consultant for Kai Analytics!</h3>
            </div>

            <div className="flex justify-center">
                <Avatar
                    avatarStyle='Circle'
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
    )
}

export default Hero
