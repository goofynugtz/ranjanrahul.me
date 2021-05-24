import './Skills.scss';
import { FaHtml5, FaCss3Alt, FaPython, FaSass, FaJs, FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiCplusplus, SiGooglesearchconsole, SiKotlin, SiMongodb, SiMysql, SiTypescript } from 'react-icons/si';
import { AiOutlineRadarChart } from 'react-icons/ai';


const skill: ({
    name: string;
    class: string;
    icon?: any
    efficiency?: number;
})[] = [
    {
        name: 'HTML',
        class: 'front-end',
        icon: < FaHtml5 /> ,
        efficiency: 10
    },
    {
        name: 'CSS',
        class: 'front-end',
        icon: < FaCss3Alt />,
        efficiency: 10
    },
    {
        name: 'SASS',
        class: 'front-end',
        icon: < FaSass /> ,
        efficiency: 8
    },
    {
        name: 'JavaScript',
        class: 'front-end',
        icon: < FaJs />,
        efficiency: 7
    },
    {
        name: 'React',
        class: 'front-end',
        icon: < FaReact /> ,
        efficiency: 5
    },
    {
        name: 'TypeScript',
        class: 'front-end',
        icon: < SiTypescript />,
        efficiency: 5
    },
    {
        name: 'Angular',
        class: 'front-end',
        icon: < FaAngular /> ,
        efficiency: 2
    },
    {
        name: 'Node.JS',
        class: 'back-end',
        icon: < FaNodeJs />,
        efficiency: 8
    },
    {
        name: 'Express',
        class: 'back-end',
        icon: < FaJs />,
        efficiency: 7
    },
    {
        name: 'MySQL',
        class: 'database',
        icon: < SiMysql /> ,
        efficiency: 5
    },
    {
        name: 'MongoDB',
        class: 'database',
        icon: < SiMongodb />,
        efficiency: 9
    },
    {
        name: 'C',
        class: 'languages',
        icon: < SiCplusplus />,
        efficiency: 4
    },
    {
        name: 'C++',
        class: 'languages',
        icon: < SiCplusplus />,
        efficiency: 5
    },
    {
        name: 'Python',
        class: 'languages',
        icon: <FaPython />,
        efficiency: 4
    },
    {
        name: 'Kotlin',
        class: 'languages',
        icon: < SiKotlin /> ,
        efficiency: 2
    },
    {
        name: 'Search Engine Optimization',
        class: 'extras-1',
        icon: < SiGooglesearchconsole />,
        efficiency: 1
    },
    {
        name: 'Vector Graphics',
        class: 'extras-2',
        icon: < AiOutlineRadarChart /> ,
        efficiency: 5
    }
    
]

const Skills: React.FC = () => {

    return (
        <div className="my-skills">
            <div className="heading"><h1>Stuff I Can Work With</h1></div>
            <div className="skills-container">
            {skill.map((skill, index) => {
                return (
                    <div className={skill.class + " skills"}>
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Skills

/*          <div className="skills-container">
                <span className="front-end skills">Front End</span>
                <span className="front-end skills front-end--html">HTML</span>
                <span className="front-end skills front-end--css">CSS</span>
                <span className="front-end skills front-end--sass">SASS</span>
                <span className="front-end skills front-end--js">JavaScript</span>
                <span className="front-end skills front-end--reactjs">ReactJS</span>
                <span className="front-end skills front-end--js">TypeScript</span>
                <span className="front-end skills front-end--angular">Angular</span>
                <br />
                <span className="back-end skills">Back End</span>
                <span className="back-end skills back-end--nodejs">NodeJS</span>
                <span className="back-end skills back-end--express">Express</span>
                <span className="back-end skills back-end--sql">SQL</span>
                <span className="back-end skills back-end--mongodb">MongoDB</span>
                <br />
                <span className="languages languages--c skills ">C</span>
                <span className="languages languages--cpp skills">C++</span>
                <span className="languages languages--python skills">Python</span>
                <span className="languages languages--kotlin skills">Kotlin</span>
                <br />
                <span className="extras-1 skills extras-1--seo">SEO</span>
                <span className="extras-2 skills extras-2--svg">Vector Graphics</span>
            </div> */