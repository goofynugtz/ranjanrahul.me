import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useState } from 'react';
import { Posts } from '../components/BlogPreview';
import Layout from '../components/Layout/Layout';

export default function Blogs({ posts }: Posts) {

  const [search, setSearch] = useState("");

  function handleChange(e: any) {
    const { value } = e.target;
    setSearch(value);
  }

  function tagsHandle(tag: any) {
    const value = tag.target.outerText;
    setSearch(value);
  }

  return (
    <Layout>
      <div className='blog'>
        <h1>All Posts</h1>
        <input type="text" placeholder="Search Articles" onChange={handleChange} value={search}></input>
        <hr />
        {posts?.length > 0 && posts.filter((posts) => (
          !search || posts.frontmatter.title.toLowerCase().includes(search.toLowerCase()) || posts.frontmatter.description.toLowerCase().includes(search.toLowerCase()) || posts.frontmatter.tags.includes(search.toLowerCase()) || posts.content.includes(search.toLowerCase())
          )).map(({ frontmatter: { title, date, description, tags }, slug }) => {
            return (
              <div key={slug} className='cards'>
                <header>
                  <h2>
                    <Link href={'/blogs/[slug]'} as={`/blogs/${slug}`}>
                      <a className='title'>{title}</a>
                    </Link>
                  </h2>
                  <span className='date'>{date}</span>
                </header>
                <section className='description'>
                  {description}
                </section>
                <section className='tags'>
                  {tags.map((tag) => {
                      return (
                        <span key={tag} className='tag' onClick={tagsHandle}>
                          {tag}
                        </span>
                      )
                    })}
                </section>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`)

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`).toString()

    const { data, content } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
      content
    };
  })

  return {
    props: { posts }
  };
}