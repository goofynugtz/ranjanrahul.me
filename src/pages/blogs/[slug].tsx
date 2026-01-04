import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Key } from 'react';
import Head from 'next/head';
import Navbar from '../../components/navbar';

interface Post {
  frontmatter: {
    title: string,
    date: string,
    description: string,
    tags: Key[]
  },
  content: string
}

export default function Post({ frontmatter, content }: Post) {
  return (
    <>
      <Navbar />
      <Head>
        <title>blogs@ranjanrahul</title>
        <meta name='description' content={frontmatter.description} />
        <meta name='og:title' content={frontmatter.title} />
      </Head>
      <div className='post'>
        <div>
          <span className='date'>{frontmatter.date}</span>
          <div className='tags'>
            {frontmatter.tags.map((tag) => (
              <span key={tag} className='tag'>{tag}</span>
            ))}
          </div>
          <ReactMarkdown
            components={{
              code({ className, children }) {
                const match = /language-(\w+)/.exec(className || '')
                return (
                  <SyntaxHighlighter language={match ? match[1] : ''} showLineNumbers customStyle={{
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
                  >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                )
              }
            }}
          >{content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('src/content/posts')

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

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('src/content/posts', slug + '.md'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const frontmatter = { ...data }

  return {
    props: {
      content: `# ${data.title}\n${content}`,
      frontmatter,
    }
  }
}