import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/Layout';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Key } from 'react';
import Head from 'next/head';

interface CodeProps {
  language: string,
  value: any
}

interface Post {
  frontmatter: {
    title: string,
    date: string,
    description: string,
    tags: Key[]
  },
  content: any
}

const CodeBlock = ({ language, value }: CodeProps) => {
  return <SyntaxHighlighter language={language} showLineNumbers customStyle={{
    backgroundColor: '#16161E',
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
        wordBreak: 'normal',
        wordWrap: 'normal',
        lineHeight: 1.5
      }
    }}
  >{value}</SyntaxHighlighter>
}

export default function Post({ frontmatter, content }: Post) {

  return (
    <Layout>
      <Head>
        <title>blogs@ranjanrahul</title>
        <meta name='description' content={frontmatter.description}/>
        <meta name='og:title' content={frontmatter.title}/>
      </Head>
      <div className='post'>
        <article>
          <span className='date'>{frontmatter.date}</span>
          <div className='tags'>
            {frontmatter.tags.map((tag) => (
              <span key={tag} className='tag'>{tag}</span>
            ))}
          </div>
          <ReactMarkdown className='markdown' escapeHtml={false} source={content} renderers={{ code: CodeBlock }} />
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

export async function getStaticProps({ params: { slug } }: any) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('content/posts', slug + '.md'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

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