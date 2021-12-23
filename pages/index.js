import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from '../components/Header'
import Container from '../components/Container'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Container>
        <Header />
        <Hero />

        <Footer/>
    </Container>
    )
}
