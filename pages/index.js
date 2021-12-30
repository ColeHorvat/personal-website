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
            <GridItem projectTitle={STRING_CONSTANTS.TASK_TITLE} projectDescription={STRING_CONSTANTS.TASK_DESCRIPTION}/>
        </Grid>

        <Footer/>
    </Container>
    )
}
