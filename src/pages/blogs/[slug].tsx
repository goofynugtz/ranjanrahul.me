import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { Key } from 'react';
import Head from 'next/head';
import Navbar from '../../components/navbar';
import styles from '../../styles/post.module.css';

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
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <span className={styles.date}>{frontmatter.date}</span>
          <div className={styles.tags}>
            {frontmatter.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={styles.markdown}>
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
              h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
              h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
              h4: ({ children }) => <h4 className={styles.h4}>{children}</h4>,
              p: ({ children }) => <p className={styles.p}>{children}</p>,
              ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
              ol: ({ children }) => <ol className={styles.ol}>{children}</ol>,
              li: ({ children }) => <li className={styles.li}>{children}</li>,
              a: ({ href, children }) => <a href={href} className={styles.a} target="_blank" rel="noopener noreferrer">{children}</a>,
              hr: () => <hr className={styles.hr} />,
              code({ className, children }) {
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter language={match[1]} showLineNumbers customStyle={{
                    backgroundColor: '#16161E',
                    border: 'none',
                    margin: '2rem 0',
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
                ) : (
                  <code className={styles.inlineCode}>{children}</code>
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