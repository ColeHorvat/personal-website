import React from 'react'
import { motion } from 'framer-motion'

function Header() {
    return (
        <nav className="">
            <div className="">
                <div className="relative flex items-center justify-between h-16 px-5">
                    <a className="text-xl font-medium p-2 hover:bg-gray-100" href="">Cole Horvat</a>
                    <a className="text-xl p-2 hover:bg-gray-100" href="/Cole_Horvat_Resume_Dec_8_2021.pdf" target="_blank">Resume</a>
                    {/* ADD DARK MODE BUTTON */}
                </div>
            </div>
        </nav>
        
    )
}

export default Header
