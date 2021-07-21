import fs from 'fs';
import matter from 'gray-matter';

import Skills from '../components/Skills';
import Header from '../components/Header';
import BlogPreview, { Posts } from '../components/BlogPreview';
import Layout from '../components/Layout';


export default function Home({ posts }: Posts) {
  
  return (
    <Layout>
      <Header />
      <Skills />
      <BlogPreview {...{posts}}/>
    </Layout>
  )
}

export async function getStaticProps() {
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
}