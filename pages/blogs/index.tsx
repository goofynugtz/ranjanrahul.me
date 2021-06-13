import styles from './Blogs.module.scss'
import { sanityClient, urlFor } from '../../lib/sanity'

const blogQuery = `*[_type == "post"]{
    _id,
    title,
    slug,
    author,
    publishedAt,
    description,
    tags,
}`;

//@ts-ignore
export default function Blogs({ blogs }) {

    console.log({ blogs });

    return (
        <div className={styles.blog}>
            <div className={styles.caption}>
                All Posts
            </div>
            <input placeholder="Search Articles"></input>
            <hr />
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
    )
}

export async function getStaticProps() {
    const blogs = await sanityClient.fetch(blogQuery);
    return { props: { blogs } };
}