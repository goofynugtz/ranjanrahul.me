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
// import Kotlin from '@iconify/icons-vscode-icons/file-type-kotlin';
import GoogleCloud from '@iconify/icons-logos/google-cloud';
import d3 from '@iconify/icons-logos/d3';
import Next from '@iconify/icons-teenyicons/nextjs-outline';
// import GoGopher from '@iconify/icons-vscode-icons/file-type-go-gopher';
import Docker from '@iconify/icons-vscode-icons/file-type-docker2';
// import TensorFlow from '@iconify/icons-logos/tensorflow';

import Django from '@iconify/icons-vscode-icons/file-type-django';
import PyTorch from '@iconify/icons-logos/pytorch-icon';

const skills: ({
  name: string;
  class: string;
  icon?: any
  efficiency?: number;
})[] = [
    {
      name: 'HTML',
      class: 'front-end',
      icon: <Icon icon={Html} />
    },
    {
      name: 'CSS',
      class: 'front-end',
      icon: <Icon icon={Css} />
    },
    {
      name: 'SASS',
      class: 'front-end',
      icon: <Icon icon={Sass} />
    },
    {
      name: 'JavaScript',
      class: 'front-end',
      icon: <Icon icon={Javascript} />
    },
    {
      name: 'React',
      class: 'front-end',
      icon: <Icon icon={React} />
    },
    {
      name: 'TypeScript',
      class: 'front-end',
      icon: <Icon icon={TypeScript} />
    },
    {
      name: 'Django',
      class: 'back-end',
      icon: <Icon icon={Django} />
    },
    {
      name: 'Node.JS',
      class: 'back-end',
      icon: <Icon icon={NodeJS} />
    },
    {
      name: 'MySQL',
      class: 'database',
      icon: <Icon icon={MySQL} />
    },
    {
      name: 'MongoDB',
      class: 'database',
      icon: <Icon icon={MongoDB} />
    },
    {
      name: 'C',
      class: 'languages',
      icon: <Icon icon={Clang} />
    },
    {
      name: 'C++',
      class: 'languages',
      icon: <Icon icon={Cpp} />
    },
    {
      name: 'Python',
      class: 'languages',
      icon: <Icon icon={Python} />
    },
    {
      name: 'Google Cloud',
      class: 'hosting',
      icon: <Icon icon={GoogleCloud} />
    },
    {
      name: 'D3 Visualization',
      class: 'framework',
      icon: <Icon icon={d3} />
    },
    {
      name: 'Next.JS',
      class: 'framework',
      icon: <Icon icon={Next} />
    },
    {
      name: 'Docker',
      class: 'utility',
      icon: <Icon icon={Docker} />
    },
    {
      name: 'PyTorch',
      class: 'ml',
      icon: <Icon icon={PyTorch} />
    }
  ]

const AboutMe: React.FC = () => {

  return (
    <div className="aboutme" id='aboutme'>
      <h1 className="heading">About Me</h1>
      <p>
        Hello! My name is <span className="highlight">Rahul Ranjan</span>. Two trues and one false about me are: <br />
        &#9656; I am a football player. <br />
        &#9656; I love competitive coding. <br />
        &#9656; I don&rsquo;t know machine learning. <br />
        <br />
        A &quot;few&quot; technologies that I&apos;ve worked on till now:
      </p>
      <div className='techstack'>
        {skills.map((skill, index) => {
          return (
            <div key={index} className="tech-grid">
              <span className='techstack-icon'>{skill.icon}</span>
              <span className='techstack-name'>{skill.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutMe