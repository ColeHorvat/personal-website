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
            <GridItem project={STRING_CONSTANTS.UNIGRAMS_WEBSITE} animDelay={1}/>
            <GridItem project={STRING_CONSTANTS.SOULLESS} animDelay={1.25}/>
            <GridItem project={STRING_CONSTANTS.TASK_TIMER} animDelay={1.5}/>
            <GridItem project={STRING_CONSTANTS.LOST_AND_FOUND} animDelay={2}/>
        </Grid>

        <SubHeader title="Blog"/>
        <BlogGrid>
            {allPostsData.map(({id, date, title}, index) => (
                // eslint-disable-next-line react/jsx-key
                <BlogItem id = {id} date={date} title={title} index = {index}/>
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
