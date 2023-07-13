import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import Head from 'next/head';
import { Icon } from '@iconify/react';
import Html from '@iconify/icons-vscode-icons/file-type-html';
import Css from '@iconify/icons-vscode-icons/file-type-css';
import Sass from '@iconify/icons-logos/sass';
import Javascript from '@iconify/icons-logos/javascript';
import TypeScript from '@iconify/icons-logos/typescript-icon';
import React from '@iconify/icons-logos/react';
import NodeJS from '@iconify/icons-logos/nodejs-icon';
import MySQL from '@iconify/icons-simple-icons/mysql';
import MongoDB from '@iconify/icons-vscode-icons/file-type-mongo';
import Clang from '@iconify/icons-logos/c';
import Python from '@iconify/icons-vscode-icons/file-type-python';
import Cpp from '@iconify/icons-vscode-icons/file-type-cpp3';
import GoogleCloud from '@iconify/icons-logos/google-cloud';
import d3 from '@iconify/icons-logos/d3';
import Next from '@iconify/icons-teenyicons/nextjs-outline';
import Docker from '@iconify/icons-vscode-icons/file-type-docker2';
import Django from '@iconify/icons-vscode-icons/file-type-django';
import PyTorch from '@iconify/icons-logos/pytorch-icon';


export default function About({ skills }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Me &#x2223; Rahul Ranjan</title>
      </Head>
      <Layout>
        <Navbar />
        <div className="aboutme" id='aboutme'>
          <h1 className="heading">About Me</h1>
          <p>
            Hello! My name is Rahul Ranjan. Two trues and one false about me are: <br />
            &#9656; I love playing football. <br />
            &#9656; I loooove competitive coding &lt;3. <br />
            &#9656; I can understand neural networks, slightly :/ <br />
            <br />
            A &quot;few&quot; technologies that I&apos;ve worked on till now:
          </p>
          <div className='techstack'>
            {skills.map((skill: any, index: any) => {
              return (
                <div key={index} className="tech-grid">
                  <span className='techstack-icon'><Icon icon={skill.icon} /></span>
                  <span className='techstack-name'>{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = () => {
  const skills: ({
    name: string;
    class: string;
    icon?: any;
    efficiency?: number;
  })[] = [
      {
        name: 'HTML',
        class: 'front-end',
        icon: Html
      }, {
        name: 'CSS',
        class: 'front-end',
        icon: Css
      }, {
        name: 'SASS',
        class: 'front-end',
        icon: Sass
      }, {
        name: 'JavaScript',
        class: 'front-end',
        icon: Javascript
      }, {
        name: 'React',
        class: 'front-end',
        icon: React
      }, {
        name: 'TypeScript',
        class: 'front-end',
        icon: TypeScript
      }, {
        name: 'Django',
        class: 'back-end',
        icon: Django
      }, {
        name: 'Node.JS',
        class: 'back-end',
        icon: NodeJS
      }, {
        name: 'MySQL',
        class: 'database',
        icon: MySQL
      }, {
        name: 'MongoDB',
        class: 'database',
        icon: MongoDB
      }, {
        name: 'C',
        class: 'languages',
        icon: Clang
      }, {
        name: 'C++',
        class: 'languages',
        icon: Cpp
      }, {
        name: 'Python',
        class: 'languages',
        icon: Python
      }, {
        name: 'Google Cloud',
        class: 'hosting',
        icon: GoogleCloud
      }, {
        name: 'D3 Visualization',
        class: 'framework',
        icon: d3
      }, {
        name: 'Next.JS',
        class: 'framework',
        icon: Next
      }, {
        name: 'Docker',
        class: 'utility',
        icon: Docker
      }, {
        name: 'PyTorch',
        class: 'ml',
        icon: PyTorch
      }
    ]

  return { props: { skills } }
}
