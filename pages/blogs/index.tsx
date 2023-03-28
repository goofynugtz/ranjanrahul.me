import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useState } from 'react';
import { Posts } from '../../components/BlogPreview';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import profileImage from '../../public/assets/profile.jpg'
import Image from 'next/image';

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
        <div className="blogs">
          <h1>All Posts</h1>
          <input type="text" placeholder="Search Articles" onChange={handleChange} value={search}></input>
          <div className="blog-posts">
            {posts?.length > 0 && posts.filter((posts) => (
              !search || posts.frontmatter.title.toLowerCase().includes(search.toLowerCase()) || posts.frontmatter.description.toLowerCase().includes(search.toLowerCase()) || posts.frontmatter.tags.includes(search.toLowerCase()) || posts.content.includes(search.toLowerCase())
            )).map(({ frontmatter: { title, date, description, tags }, slug }) => {
              return (
                <Link href={'/blogs/[slug]'} as={`/blogs/${slug}`} key={slug}>
                  <div className='blog-cards'>
                    <div className="blog-thumb">

                    </div>
                    <div className="blog-details">
                      <header>
                        <div className='blog-title'>{title}</div>
                      </header>
                      <section className='blog-description'>
                        {description}
                      </section>
                      <section className='tags'>
                        {tags.map((tag) => {
                          return (
                            <span onClick={tagsHandle} key={tag} className='tag'>
                              {tag}
                            </span>
                          )
                        })}
                      </section>
                    </div>
                    <section className='blog-bottom'>
                      <div className='blog-author'>
                        <div className="author-thumb">
                          {/* <Image alt='' src={profileImage} style={{
                            objectFit: 'cover'
                          }} /> */}
                        </div>
                        <div className="author-name">
                          Rahul R
                        </div>
                      </div>
                      <div className='blog-timestamp'>{date}</div>
                    </section>
                  </div>
                </Link>
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