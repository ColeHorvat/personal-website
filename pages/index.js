import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProjectHeader from '../components/Projects/ProjectHeader'
import Grid from '../components/Projects/Grid'
import GridItem from '../components/Projects/GridItem'
import STRING_CONSTANTS from '../components/Strings'

export default function Home() {
  return (
    <Container>
        <Header />
        <Hero />

        <ProjectHeader />
        <Grid>
            <GridItem project={STRING_CONSTANTS.UNIGRAMS_WEBSITE} animDelay={1}/>
            <GridItem project={STRING_CONSTANTS.SOULLESS} animDelay={1.25}/>
            <GridItem project={STRING_CONSTANTS.TASK_TIMER} animDelay={1.5}/>
            <GridItem project={STRING_CONSTANTS.LOST_AND_FOUND} animDelay={2}/>
        </Grid>

        <Footer
            twitterUrl={STRING_CONSTANTS.FOOTER_TWITTER}
            githubUrl={STRING_CONSTANTS.FOOTER_GITHUB}
            linkedinUrl={STRING_CONSTANTS.FOOTER_LINKEDIN}
        />
    </Container>
    )
}
