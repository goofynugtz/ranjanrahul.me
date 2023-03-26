import { Key } from "react"
import Head from 'next/head'
import Layout from '../../components/Layout';
import Navbar from "../../components/Navbar";
import { Icon } from "@iconify/react";
import githubIcon from '@iconify/icons-bi/github';


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
            <a href="https://predictions.ranjanrahul.me/" className="p p-1">
              <div>
                <a href="https://github.com/goofynugtz/gpt-text-prediction">
                  <Icon icon={githubIcon} />
                </a>
                <div className="title">Text Prediction</div>
                <div className="description">Generative Pretrained Transformer using BigramLanguage model on a frontend. </div>
              </div>
            </a>
            <a href="https://indistats.ranjanrahul.me/" className="p p-2">
              <div >
                <div className="title">IndiaAtStats</div>
                <a href="https://github.com/goofynugtz/gpt-text-prediction">
                  <Icon icon={githubIcon} />
                </a>
                <div className="description"></div>
              </div>
            </a>
            <a className="p p-3">
              <div >
                <a href="https://github.com/goofynugtz/search-engine">
                  <Icon icon={githubIcon} />
                </a>
                <div className="title">Search Engine</div>
                <div className="description"></div>
              </div>
            </a>
            <a className="p p-4">
              <div >
                <div className="title"></div>
                <div className="description"></div>
              </div>
            </a>
          </div>
        </div>
      </Layout>
    </>
  )
}