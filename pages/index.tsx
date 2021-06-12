import styles from '../styles/Home.module.scss'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import BlogPreview from './components/BlogPreview/BlogPreview';
// import Home from './components/Home';
// import type { AppProps } from 'next/app'


import useDarkMode, { DarkMode } from 'use-dark-mode';

import { sanityClient, urlFor } from '../lib/sanity'

const blogQuery = `*[_type == "post"]{
  _id,
  title,
  slug,
  author,
  publishedAt,
  description,
  tags,
}`;

//@ts-ignore
export default function Home({ blogs }) {

  const darkMode:DarkMode = useDarkMode(true);
  
  return (
    <div className={styles.container}>
      <Navbar {...darkMode}/>
      <Header />
      <Skills />
      <BlogPreview {...{blogs}}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const blogs = await sanityClient.fetch(blogQuery);
  return { props: { blogs } };
}