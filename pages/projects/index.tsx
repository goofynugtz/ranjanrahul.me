import { Key } from "react"
import Head from 'next/head'
import Layout from '../../components/Layout';
import Navbar from "../../components/Navbar";
import { Icon } from "@iconify/react";
import githubIcon from '@iconify/icons-bi/github';
import Link from 'next/link';

export default function FeaturedProjects() {
  return (
    <>
      <Head>
        <title>Featured &#124; Ranjan Rahul</title>
      </Head>
      <Layout>
        <Navbar />
        <div className="projects">
          <h1 className="heading">Featured Projects</h1>
          <div className="projects-grid">
            <Link href="https://predictions.ranjanrahul.me/" className="p p-1">
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
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}