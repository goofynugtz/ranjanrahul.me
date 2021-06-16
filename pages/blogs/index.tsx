import styles from './Blogs.module.scss'
import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../components/Layout/Layout';

//@ts-ignore
export default function Blogs({ posts }) {

    console.log({ posts });

    return (
        <Layout>
        <div className={styles.blog}>
            <div className={styles.caption}>
                All Posts
            </div>
            <input placeholder="Search Articles"></input>
            <hr />
            {//@ts-ignore
            posts?.length > 0 && posts.map((blog) => {
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
                        {/* {blog.tags.map((tag:String) => {
                            return (
                                <div className={styles.tag}>
                                    {tag}
                                </div>
                            )
                        })} */}
                        </div>
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
  
      // const options = { year: 'numeric', month: 'long', day: 'numeric'}
      // const formattedDate = data.date.toLocaleDateString('en-US', options)
  
      const frontmatter = {
        ...data
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