// import React, { useEffect, useState } from 'react'
import Link from 'next/link';
// import { sanityClient } from '../../../lib/sanity'

//@ts-ignore
export default function BlogPreview({ posts }) {

    console.log({ posts });
    //{ posts: [ { slug: 'mongodb-errors', frontmatter: [Object] } ] }

    return (
        <div className='preview'>
            <div className='caption'>
                <h1>Blogs</h1>
            </div>
            <div className='body'>
            
            {//@ts-ignore
            posts?.length > 0 && posts.map(({ frontmatter: { title, description, date }, slug }) => (
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
                </article>
              ))}
            </div>
        </div>
    )
}