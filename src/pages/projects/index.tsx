import Head from 'next/head'
import Navbar from "../../components/navbar";
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import styles from '../../styles/projects.module.css'
import { projects } from '../../config/projects';

export default function FeaturedProjects() {
  return (
    <>
      <Head>
        <title>Featured &#124; Ranjan Rahul</title>
      </Head>
      <Navbar />
      <div className={styles.projects}>
        <h1 className={styles.heading}>Featured Projects</h1>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <div className={styles.spacer} />
              <div className={styles.thumbnailLight} style={{ backgroundImage: `url(${project.thumbnail.light})` }} />
              <div className={styles.thumbnailDark} style={{ backgroundImage: `url(${project.thumbnail.dark})` }} />
              <div className={styles.overlay} />
              <div className={styles.titleRow}>
                <div className={styles.title}>{project.title}</div>
                <div className={styles.links}>
                  <Link
                    href={project.deployment}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.iconLink}
                    aria-label={`Live demo of ${project.title}`}
                  >
                    <FiExternalLink />
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.iconLink}
                    aria-label={`${project.title} source on GitHub`}
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
              {project.description && (
                <div className={styles.description}>{project.description}</div>
              )}
              {project.longDescription && (
                <div className={styles.longDescription}>{project.longDescription}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
