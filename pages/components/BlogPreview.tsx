import Link from 'next/link';

//@ts-ignore
export default function BlogPreview({ posts }) {

    return (
        <div className='preview'>
            <div className='caption'>
                <h1>Blogs</h1>
            </div>
            <div className='body'>
            
            {//@ts-ignore
            posts?.length > 0 && posts.map(({ frontmatter: { title, date, description, tags }, slug }) => (
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
                  {//@ts-ignore
                    tags.map((tag) => {
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