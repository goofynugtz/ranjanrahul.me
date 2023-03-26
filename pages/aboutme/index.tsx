import AboutMe from '../../components/AboutMe';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Me &#x2223; Rahul Ranjan</title>
      </Head>
      <Layout>
        <Navbar />
        <AboutMe />
      </Layout>
    </>
  )
}