import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useState } from 'react';
import { Posts } from '../../interface';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Image from 'next/image';
import styles from '../../styles/blogs.module.css'

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
    <>
      <Head>
        <title>Blogs &#124; Ranjan Rahul</title>
      </Head>
      <Layout>
        <Navbar />
        <div className={styles.blogs}>
          <h1>All Posts</h1>
          <input type="text" placeholder="Search Articles" onChange={handleChange} value={search}></input>
          <div className={styles.posts}>
            {posts?.length > 0 && posts.filter((posts) => (
              !search || posts.frontmatter.title.toLowerCase().includes(search.toLowerCase()) || posts.frontmatter.description.toLowerCase().includes(search.toLowerCase()) || posts.frontmatter.tags.includes(search.toLowerCase()) || posts.content.includes(search.toLowerCase())
            )).map(({ frontmatter: { title, date, description, thumbnail, tags }, slug }) => {
              return (
                <div key={slug} className={styles.cards}>
                  <div className={styles.date}>{date}</div>
                  <div className='details'>
                    <header>
                      <div>
                        <Link href={'/blogs/[slug]'} as={`/blogs/${slug}`} className={styles.title}>
                          {title}
                        </Link>
                      </div>
                    </header>
                    <section className={styles.description}>
                      {description}
                    </section>
                    <section className={styles.tags}>
                      {tags.map((tag) => {
                        return (
                          <span key={tag} className={styles.tag} onClick={tagsHandle}>
                            {tag}
                          </span>
                        )
                      })}
                    </section>
                  </div>
                </div>
              )
            }
            )}
          </div>
        </div>
      </Layout>
    </>
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
  posts.sort((a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf())

  return {
    props: { posts }
  };
}