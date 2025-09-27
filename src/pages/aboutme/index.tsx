import Layout from '../../components/layout';
import Navbar from '../../components/navbar';
import Head from 'next/head';
import { Icon } from '@iconify/react';
// import Html from '@iconify/icons-vscode-icons/file-type-html';
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
import Redis from '@iconify/icons-devicon/redis';
import GoogleCloud from '@iconify/icons-logos/google-cloud';
import d3 from '@iconify/icons-logos/d3';
import Next from '@iconify/icons-teenyicons/nextjs-outline';
import Docker from '@iconify/icons-vscode-icons/file-type-docker2';
import Django from '@iconify/icons-vscode-icons/file-type-django';
import Kubernetes from '@iconify/icons-logos/kubernetes';
import PyTorch from '@iconify/icons-logos/pytorch-icon';
import Golang from '@iconify/icons-devicon/go-wordmark';
import Rust from '@iconify/icons-vscode-icons/file-type-rust';
import DynamoDB from '@iconify/icons-skill-icons/dynamodb-light';
import Jenkins from '@iconify/icons-devicon/jenkins';
import Terraform from '@iconify/icons-logos/terraform-icon';
import aws from '@iconify/icons-logos/aws';
import atomElectron from '@iconify/icons-eos-icons/atom-electron';
import Tauri from '@iconify/icons-devicon/tauri';
import styles from '../../styles/aboutme.module.css'
import { experience } from '../../content/work/experience';

export default function About({ skills }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Me &#x2223; Rahul Ranjan</title>
      </Head>
      <Layout>
        <Navbar />
        <div className={styles.aboutme} id='aboutme'>
          <h1 className={styles.heading}>Work Experience</h1>
          {
            experience.map((e, id) => (
              <div className={styles.experiences} key={id}>
                <div className={styles.date}>{e.date}</div>
                <div>
                  <h3>{`${e.role} @ `}<u><a href={e.website}>{`${e.company}`}</a></u></h3>
                  {
                    e.companyproject.map((p) => (
                      <div key={p.projectname}>
                      <h4>{p.projectname}</h4>
                      <p>
                        <ul>
                        {p.tasks.map((t, id) => (
                          <li key={id}>{t}</li>
                        ))}
                        </ul>
                      </p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
          <h1 className={styles.heading}>About Me</h1>
          <p>
            Hello! My name is Rahul Ranjan. Two trues and one false about me are: <br />
            &#9656; I love playing football. <br />
            &#9656; I loooove competitive coding &lt;3. <br />
            &#9656; I can understand neural networks, slightly :/ <br />
            <br />
            A &quot;few&quot; technologies that I&apos;ve worked on till now:
          </p>
          <div className={styles.stack}>
            {skills.map((skill: any, index: any) => {
              return (
                <div key={index} className={styles.grid}>
                  <span className={styles.icon}><Icon icon={skill.icon} /></span>
                  <span className={styles.name}>{skill.name}</span>
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
        class: 'languages',
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
        name: 'DynamoDB',
        class: 'database',
        icon: DynamoDB
      }, {
        name: 'Redis',
        class: 'database',
        icon: Redis
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
        name: 'Golang',
        class: 'languages',
        icon: Golang
      }, {
        name: 'Rust',
        class: 'languages',
        icon: Rust
      },
      {
        name: 'Google Cloud',
        class: 'hosting',
        icon: GoogleCloud
      }, {
        name: 'AWS',
        class: 'hosting',
        icon: aws
      }, {
        name: 'Kubernetes',
        class: 'hosting',
        icon: Kubernetes
      }, {
        name: 'D3 Visualization',
        class: 'framework',
        icon: d3
      }, {
        name: 'Next.JS',
        class: 'framework',
        icon: Next
      }, {
        name: 'Electron',
        class: 'framework',
        icon: atomElectron
      }, {
        name: 'Tauri',
        class: 'framework',
        icon: Tauri
      }, {
        name: 'Docker',
        class: 'utility',
        icon: Docker
      }, {
        name: 'Terraform',
        class: 'framework',
        icon: Terraform
      }, {
        name: 'Jenkins',
        class: 'ci/cd',
        icon: Jenkins
      }, {
        name: 'PyTorch',
        class: 'ml',
        icon: PyTorch
      }
    ]

  return { props: { skills } }
}
