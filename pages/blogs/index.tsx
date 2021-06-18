import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

//@ts-ignore
export default function Blogs({ posts }) {

  return (
    <Layout>
      <div className='blog'>
        <h1>All Posts</h1>
        <input placeholder="Search Articles"></input>
        {//@ts-ignore
          posts?.length > 0 && posts.map(({ frontmatter: { title, date, description, tags }, slug }) => {

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
                  {//@ts-ignore
                    tags.map((tag) => {
                      return (
                        <span key={tag} className='tag'>
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

    const { data } = matter(markdownWithMetadata);

    //   const options = { year: 'numeric', month: 'long', day: 'numeric'}
    //   const formattedDate = data.date.toLocaleDateString('en-US', options)

    const frontmatter = {
      ...data,
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