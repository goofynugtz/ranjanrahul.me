import fs from 'fs';
import matter from 'gray-matter';
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
                        <div className='title'>
                            {title}
                        </div>
                        <div className='date'>
                            {date}
                        </div>
                        <div className='description'>
                            {description}
                        </div>
                        <div className='tags'>
                        {//@ts-ignore
                        tags.map((tag) => {
                            return (
                                <span key={tag} className='tag'>
                                    {tag}
                                </span>
                            )
                        })}
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