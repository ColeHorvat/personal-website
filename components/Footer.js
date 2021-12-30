import React from 'react'

function Footer(props) {
    return (
        <div className="inset-x-0 bottom-0">
            <div className="flex p-2 items-center justify-center">
                <ul className="inline-flex text-gray-600">
                    <li className="px-5 text-xl"><a href="">Email</a></li>
                    <li className="px-5 text-xl"><a href={props.twitterUrl} target="_blank" rel="noreferrer">Twitter</a></li>
                    <li className="px-5 text-xl"><a href={props.githubUrl} target="_blank" rel="noreferrer">Github</a></li>
                    <li className="px-5 text-xl"><a href={props.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
