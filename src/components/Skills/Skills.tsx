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
        icon: < FaHtml5 /> 
    },
    {
        name: 'CSS',
        class: 'front-end',
        icon: < FaCss3Alt />
    },
    {
        name: 'SASS',
        class: 'front-end',
        icon: < FaSass />
    },
    {
        name: 'JavaScript',
        class: 'front-end',
        icon: < FaJs />
    },
    {
        name: 'React',
        class: 'front-end',
        icon: < FaReact />
    },
    {
        name: 'TypeScript',
        class: 'front-end',
        icon: < SiTypescript />
    },
    {
        name: 'Angular',
        class: 'front-end',
        icon: < FaAngular /> 
    },
    {
        name: 'Node.JS',
        class: 'back-end',
        icon: < FaNodeJs />
    },
    {
        name: 'Express',
        class: 'back-end',
        icon: < FaJs />
    },
    {
        name: 'MySQL',
        class: 'database',
        icon: < SiMysql />
    },
    {
        name: 'MongoDB',
        class: 'database',
        icon: < SiMongodb />
    },
    {
        name: 'C',
        class: 'languages',
        icon: < SiCplusplus />
    },
    {
        name: 'C++',
        class: 'languages',
        icon: < SiCplusplus />
    },
    {
        name: 'Python',
        class: 'languages',
        icon: <FaPython />
    },
    {
        name: 'Kotlin',
        class: 'languages',
        icon: < SiKotlin />
    },
    {
        name: 'Search Engine Optimization',
        class: 'extras-1',
        icon: < SiGooglesearchconsole />
    },
    {
        name: 'Vector Graphics',
        class: 'extras-2',
        icon: < AiOutlineRadarChart />
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