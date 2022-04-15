
import Layout from "../../components/Blog/PostLayout";
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/Blog/Date'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from "framer-motion"

const CONTENT_ANIM_DURATION = 0.5

const content = {
    hidden : { opacity: 0},
    visible : { opacity: 1}
}

export default function Post({ postData }) {
	return (
		<Container>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<Header />
			
			<motion.article 
				initial="hidden"
				animate="visible"
				variants={content}
				transition={{ duration: CONTENT_ANIM_DURATION }}
				className="px-5"
			>
				<motion.h1 className="text-4xl font-bold mt-12 mb-6">{postData.title}</motion.h1>
				<motion.div className="text-xl mb-4 text-gray-600">
					<Date dateString={postData.date} />
				</motion.div>
				<div className="text-lg" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</motion.article>
			<Footer />
		</Container>
	)
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id)
	return {
		props: {
			postData
		}
	}
}