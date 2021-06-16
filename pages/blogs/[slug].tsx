import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../components/Layout/Layout';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

//@ts-ignore
const CodeBlock = ({ language, value }) => {
    return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
}
//@ts-ignore
export default function Post({ content }) {

    return (
        <Layout>
            <div className='post'>
                <div className='sidebar'>
                    Lol
                </div>
                <article>
                    <ReactMarkdown escapeHtml={false} source={content} renderers={{ code: CodeBlock }}/>
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