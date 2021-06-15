import styles from '../styles/Home.module.scss'

import fs from 'fs';
import matter from 'gray-matter';

import Skills from './components/Skills/Skills';
import Header from './components/Header/Header';
import BlogPreview from './components/BlogPreview/BlogPreview';
import Layout from './components/Layout/Layout';
//@ts-ignore
export default function Home({ posts }) {

  
  return (
    <Layout>
    <div className={styles.container}>
      <Header />
      <Skills />
      <BlogPreview {...{posts}}/>
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`)

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`).toString()

    const { data } = matter(markdownWithMetadata);

    // const options = { year: 'numeric', month: 'long', day: 'numeric'}
    // const formattedDate = data.date.toLocaleDateString('en-US', options)

    const frontmatter = {
      ...data
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter
    };
  })

  return {
    props: { posts }
  };
}