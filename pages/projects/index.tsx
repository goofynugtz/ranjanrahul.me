import Head from 'next/head'
import Layout from '../../components/layout';
import Navbar from "../../components/navbar";
import { Icon } from "@iconify/react";
import githubIcon from '@iconify/icons-bi/github';
import Link from 'next/link';
import styles from '../../styles/projects.module.css'
import { projects } from '../../config/projects';
import { project } from '../../interface';
import Image from 'next/image'
import { useTheme } from 'next-themes';

export default function FeaturedProjects() {
  const { theme } = useTheme()
  return (
    <>
      <Head>
        <title>Featured &#124; Ranjan Rahul</title>
      </Head>
      <Layout>
        <Navbar />
        <div className={styles.projects}>
          <h1 className={styles.heading}>Featured Projects</h1>
          <p>These are kind of outdated and I&apos;m just lazy to create thumbnails && update them. Please go through my <Link href="https://github.com/goofynugtz" className={styles.a}>Github</Link>.</p>
          <div className={styles.grid}>
            {
              projects.slice(0, 3).map((project: project, index: number) => {
                return (
                  <Link href={project.deployment} className={`${styles.project} ${project.class}`} key={index}>
                    <div className={styles.title}>{project.title}</div>
                    <div className={styles.description}>{project.description}</div>
                  </Link>
                )
              })
            }
            {/* <Link href="https://predictions.ranjanrahul.me/" className="p p-1">
              <div>
                <Link href="https://github.com/goofynugtz/gpt-text-prediction">
                  <Icon icon={githubIcon} />
                </Link>
                <div className="title">Text Prediction</div>
                <div className="description">Generative Pretrained Transformer using BigramLanguage model on a frontend. </div>
              </div>
            </Link>
            <Link href="https://indistats.ranjanrahul.me/" className="p p-2">
              <div >
                <div className="title">IndiaAtStats</div>
                <Link href="https://github.com/goofynugtz/gpt-text-prediction">
                  <Icon icon={githubIcon} />
                </Link>
                <div className="description"></div>
              </div>
            </Link>
            <Link href={"https://search.ranjanrahul.me"} className="p p-3">
              <div >
                <Link href="https://github.com/goofynugtz/search-engine">
                  <Icon icon={githubIcon} />
                </Link>
                <div className="title">Search Engine</div>
                <div className="description"></div>
              </div>
            </Link>
            <Link href={"/projects"} className="p p-4">
              <div >
                <div className="title"></div>
                <div className="description"></div>
              </div>
            </Link> */}
          </div>
        </div>
      </Layout>
    </>
  )
}
