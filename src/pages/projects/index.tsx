import Head from 'next/head'
import Navbar from "../../components/navbar";
import Link from 'next/link';
import styles from '../../styles/projects.module.css'
import { projects } from '../../config/projects';
import { project } from '../../interface';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue;
    return values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  };

  const [value, setValue] = useState<number>(defaultValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setValue(get);

    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
  }, [queries]);

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

export default function FeaturedProjects() {
  const columns = useMedia(
    ['(min-width:1200px)', '(min-width:768px)', '(min-width:480px)'],
    [3, 2, 1],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();

  const masonryGrid = useMemo(() => {
    if (!width) return [];

    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;
    const gap = 20;

    return projects.map((project, index) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = (columnWidth + gap) * col;
      const baseHeight = 200 + (project.description.length * 2); // Dynamic height based on content
      const y = colHeights[col];

      colHeights[col] += baseHeight + gap;

      return {
        ...project,
        x,
        y,
        width: columnWidth,
        height: baseHeight,
        index
      };
    });
  }, [columns, width]);

  return (
    <>
      <Head>
        <title>Featured &#124; Ranjan Rahul</title>
      </Head>
      <>
        <Navbar />
        <div className={styles.projects}>
          <h1 className={styles.heading}>Featured Projects</h1>
          <p>These are kind of outdated and I&apos;m just lazy to create thumbnails && update them. Please go through my <Link href="https://github.com/goofynugtz" className={styles.a}>Github</Link>.</p>
          <div ref={containerRef} className={styles.masonryContainer}>
            {masonryGrid.map((project, index) => (
              <Link
                href={project.deployment}
                className={`${styles.masonryProject} ${project.class}`}
                key={index}
                style={{
                  position: 'absolute',
                  left: project.x,
                  top: project.y,
                  width: project.width,
                  height: project.height,
                  transition: 'all 0.3s ease'
                }}
              >
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <div className={styles.overlayTitle}>{project.title}</div>
                    <div className={styles.overlayDescription}>{project.description}</div>
                  </div>
                </div>
                <div className={styles.title}>{project.title}</div>
                <div className={styles.description}>{project.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </>
    </>
  )
}
