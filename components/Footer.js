import React from 'react'

function Footer(props) {
    return (
        <div className="inset-x-0 bottom-0">
            <div className="flex px-2 pt-2 items-center justify-center">
                <ul className="inline-flex text-gray-600">
                    <li className="px-5 py-2 hover:bg-gray-100 text-xl"><a href="mailto:ColeHorvat@gmail.com">Email</a></li>
                    <li className="px-5 py-2 hover:bg-gray-100 text-xl"><a href={props.twitterUrl} target="_blank" rel="noreferrer">Twitter</a></li>
                    <li className="px-5 py-2 hover:bg-gray-100 text-xl"><a href={props.githubUrl} target="_blank" rel="noreferrer">Github</a></li>
                    <li className="px-5 py-2 hover:bg-gray-100 text-xl"><a href={props.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a></li>
                </ul>
            </div>
            <div className="flex px-2 items-center justify-center text-gray-500">
                <p>Built with Next.js and TailwindCSS</p>
            </div>
        </div>
    )
}

export default Footer
