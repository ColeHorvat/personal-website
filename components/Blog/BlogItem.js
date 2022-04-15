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
        <motion.div
		initial="hidden"
            animate="visible"
            variants={gridItemVar}
            transition={{ duration: ITEM_ANIM_DURATION, delay: (props.index * 0.25) + 1 }}
            className="rounded-lg shadown-md border border-tranparent hover:shadow-xl bg-gray-100 h-24 p-2 relative"
        >
           <Link href={`/posts/${props.id}`}>
				<a className="text-xl font-medium">{props.title}</a>
           </Link> 
		   <br />
		   <small className="text-base italic">
			   <Date dateString={props.date} />
		   </small>
        </motion.div>
    )
}

export default BlogItem