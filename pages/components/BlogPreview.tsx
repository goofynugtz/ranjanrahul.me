import Link from 'next/link';
import { Key } from 'react';

export interface Posts {
  posts: [{
    slug: Key,
    frontmatter: {
      title: string,
      date: string,
      description: string,
      tags: Key[]
    },
    content: string
  }]
}

export default function BlogPreview({ posts } : Posts) {

    return (
        <div className='preview'>
            <div className='caption'>
                <h1>Blogs</h1>
            </div>
            <div className='body'>
            
            {posts?.length > 0 && posts.map(({ frontmatter: { title, date, description, tags }, slug }) => (
                <article key={slug} className='cards'>
                  <header>
                    <h2>
                      <Link href={'/blogs/[slug]'} as={`/blogs/${slug}`}>
                        <a className='title'>{title}</a>
                      </Link>
                    </h2>
                    <span className='date'>{date}</span>
                  </header>
                  <section className='description'>
                    <p>{description}</p>
                  </section>
                  <section className='tags'>
                  {tags.map((tag) => {
                      return (
                        <span key={tag} className='tag'>
                          {tag}
                        </span>
                      )
                    })
                  }
                  </section>
                </article>
              ))}
            </div>
        </div>
    )
}