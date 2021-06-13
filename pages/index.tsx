import styles from '../styles/Home.module.scss'

import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import BlogPreview from './components/BlogPreview/BlogPreview';

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

  return (
    <div className={styles.container}>
      <Header />
      <Skills />
      <BlogPreview {...{blogs}}/>
    </div>
  )
}

export async function getStaticProps() {
  const blogs = await sanityClient.fetch(blogQuery);
  return { props: { blogs } };
}