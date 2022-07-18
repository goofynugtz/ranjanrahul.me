import Head from 'next/head'

import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Layout from '../components/Layout';
import FeaturedProjects from '../components/Projects';

export default function Home() {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rahul Ranjan</title>
      </Head>
      <Layout>
        <Header />
        <AboutMe />
        <FeaturedProjects />
      </Layout>
    </>
  )
}

/* export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`)

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`).toString()

    const { data } = matter(markdownWithMetadata);

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
} */