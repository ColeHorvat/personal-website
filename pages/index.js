import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from '../components/Header'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProjectHeader from '../components/Projects/ProjectHeader'
import Grid from '../components/Projects/Grid'
import GridItem from '../components/Projects/GridItem'
import PageHead from '../components/PageHead'
import STRING_CONSTANTS from '../public/Strings'

export default function Home() {
  return (
    <Container>
        <PageHead />

        <Header />
        <Hero />

        <ProjectHeader />
        <Grid>
            <GridItem 
            isVersion={true}
            versionUrl={STRING_CONSTANTS.TASK_VERSION} 
            projectTitle={STRING_CONSTANTS.TASK_TITLE} 
            projectDescription={STRING_CONSTANTS.TASK_DESCRIPTION}/>

            <GridItem 
            isWebsite={true}
            playUrl={STRING_CONSTANTS.UNIGRAMS_URL}
            projectTitle={STRING_CONSTANTS.UNIGRAMS_TITLE} 
            projectDescription={STRING_CONSTANTS.UNIGRAMS_DESCRIPTION}/>
        </Grid>

        <Footer
        twitterUrl={STRING_CONSTANTS.FOOTER_TWITTER}
        githubUrl={STRING_CONSTANTS.FOOTER_GITHUB}
        linkedinUrl={STRING_CONSTANTS.FOOTER_LINKEDIN}
        />
    </Container>
    )
}
