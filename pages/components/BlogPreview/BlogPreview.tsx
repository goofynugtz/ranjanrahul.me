// import React, { useEffect, useState } from 'react'
import styles from './BlogPreview.module.scss';

import { sanityClient } from '../../../lib/sanity'

//@ts-ignore
export default function Home ({ blogs }) {

    console.log({blogs});

    return (
        <div className={styles.preview}>
            <div className={styles.caption}>
                <h1>Blogs</h1>
            </div>
            <div className={styles.body}>
            
            {//@ts-ignore
            blogs?.length > 0 && blogs.map((blog) => {
            //@ts-ignore
            const title = `${blog.title}`
            const date = `${new Date(blog.publishedAt)}`
            const description = `${blog.description}`
            
                return (
                    <div key={blog._id} className={styles.cards}>
                        <div className={styles.title}>
                            {title}
                        </div>
                        <div className={styles.date}>
                            {date}
                        </div>
                        <div className={styles.description}>
                            {description}
                        </div>
                        <div className={styles.tags}>
                        {blog.tags.map((tag:String) => {
                            return (
                                <div className={styles.tag}>
                                    {tag}
                                </div>
                            )
                        })}
                        </div>
                        
                    </div>
                )
            })}
            </div>
        </div>
    )
}