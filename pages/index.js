import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import SubHeader from '../components/SubHeader'
import Grid from '../components/Projects/Grid'
import GridItem from '../components/Projects/GridItem'
import STRING_CONSTANTS from '../components/Strings'
import BlogGrid from '../components/Blog/BlogGrid'
import BlogItem from '../components/Blog/BlogItem'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
  return (
    <Container>
        <Header />
        <Hero />

        <SubHeader title="Projects"/>
        <Grid>
            {STRING_CONSTANTS.PROJECTS.map((project, i) => (
                <GridItem project={project} animDelay={0.25 * i} key={i} />
            ))}
        </Grid>

        <SubHeader title="Blog"/>
        <BlogGrid>
            {allPostsData.map(({id, date, title, hashtags}, index) => (
                // eslint-disable-next-line react/jsx-key
                <BlogItem id = {id} date={date} title={title} hashtags={hashtags} index={index}/>
            ))}
        </BlogGrid>


        <Footer
            twitterUrl={STRING_CONSTANTS.FOOTER_TWITTER}
            githubUrl={STRING_CONSTANTS.FOOTER_GITHUB}
            linkedinUrl={STRING_CONSTANTS.FOOTER_LINKEDIN}
        />
    </Container>
    )
}
