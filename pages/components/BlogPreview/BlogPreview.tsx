// import React, { useEffect, useState } from 'react'
import styles from './BlogPreview.module.scss';
import Link from 'next/link';
// import { sanityClient } from '../../../lib/sanity'

//@ts-ignore
export default function BlogPreview({ posts }) {

    console.log({posts});
    //{ posts: [ { slug: 'mongodb-errors', frontmatter: [Object] } ] }

    return (
        <div className={styles.preview}>
            <div className={styles.caption}>
                <h1>Blogs</h1>
            </div>
            <div className={styles.body}>
            
            {//@ts-ignore
            posts?.length > 0 && posts.map(({ frontmatter: { title, description, date }, slug }) => (
                <article key={slug}>
                  <header>
                    <h3>
                      <Link href={'/blogs/[slug]'} as={`/blogs/${slug}`}>
                        <a className='text-3xl front-semibold text-orange-600 no-underline'>{title}</a>
                      </Link>
                    </h3>
                    <span>{date}</span>
                  </header>
                  <section>
                    <p>{description}</p>
                  </section>
                </article>
              ))}
            </div>
        </div>
    )
}