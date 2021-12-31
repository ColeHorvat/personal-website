import React from 'react'

function Header() {
    return (
        <nav className="bg-gray-100">
            <div className="">
                <div className="relative flex items-center justify-between h-16 px-5">
                    <a className="text-xl" href="">Cole Horvat</a>
                    <a className="text-xl" href="/Cole_Horvat_Resume_Dec_8_2021.pdf" target="_blank">Resume</a>
                    {/* ADD DARK MODE BUTTON */}
                </div>
            </div>
        </nav>
        
    )
}

export default Header
