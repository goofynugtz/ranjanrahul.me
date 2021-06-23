import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/Layout/Layout';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'


//@ts-ignore
const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language} showLineNumbers  customStyle={{
        backgroundColor: '#181C2B',
        border: 'none',
        margin: 0,
        borderRadius: '5px',
    }}
    codeTagProps={{
        style: {
            color: 'white',
            background: 'none',
            padding: 0,
            textShadow: 'none',
            fontFamily: "SFMono",
            fontSize: '.8em',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak:'normal',
            wordWrap:'normal',
            lineHeight:1.5
        }
    }}
    >{value}</SyntaxHighlighter>
}
//@ts-ignore
export default function Post({ frontmatter, content }) {

    // console.log(frontmatter);

    return (
        <Layout>
            <div className='post'>
                <article>
                    <span className='date'>{frontmatter.date}</span>
                    <div className='tags'>
                        {//@ts-ignore
                        frontmatter.tags.map((tag) => (
                            <span key={tag} className='tag'>{tag}</span>
                        ))}
                    </div>
                    <ReactMarkdown className='markdown' escapeHtml={false} source={content} renderers={{ code: CodeBlock }}/>
                </article>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const files = fs.readdirSync('content/posts')

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

//@ts-ignore
export async function getStaticProps({ params: { slug } }) {
    const markdownWithMetadata = fs
        .readFileSync(path.join('content/posts', slug + '.md'))
        .toString();

    const { data, content } = matter(markdownWithMetadata);
    // console.log(data, '\n', content);

    //WARN: missing date
    // const options = { year: "numeric", month: "long", day: "numeric" };
    // const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
        ...data,
    }

    return {
        props: {
            content: `# ${data.title}\n${content}`,
            frontmatter,
        }
    }
}