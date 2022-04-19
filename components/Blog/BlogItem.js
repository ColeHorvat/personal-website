import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Date from './Date'

const ITEM_ANIM_DURATION = 0.5

const gridItemVar = {
    hidden : { scale: 0},
    visible : { scale: 1}
}

function BlogItem(props) {
    return (
        <Link href={`/posts/${props.id}`}>
            <a>
                <motion.div
                initial="hidden"
                    animate="visible"
                    variants={gridItemVar}
                    transition={{ duration: ITEM_ANIM_DURATION, delay: (props.index * 0.25) + 1 }}
                    className="rounded-lg shadown-md border border-tranparent hover:shadow-xl bg-gray-100 h-fit p-2 relative"
                >
                <p className="text-xl font-medium mb-3">{props.title}</p>
                
                <small className="text-base italic">
                    <Date dateString={props.date} />
                </small>
                <motion.div className="flex flex-row flex-wrap mt-2 text-base">
                        {props.hashtags.map((hashtag) => (
                            // eslint-disable-next-line react/jsx-key
                            <p>#{hashtag} &ensp;</p> 
                        ))}
                </motion.div>
                </motion.div>
            </a>
        </Link>
    )
}

export default BlogItem