import Github from '@iconify/icons-akar-icons/github-outline-fill';
import Image from 'next/image';

const featured: ({
  nameOfProject: string;
  class: string;
  description: string;
  tags: string[];
  thumbnail: string;
})[] = [
    {
      nameOfProject: 'indiaAtStats',
      class: 'idk',
      description: 'A web app that renders a map of India based on various data like rainfall, population etc.',
      tags: ['JavaScript', 'd3js', 'Statistics'],
      thumbnail: '/projects/indiaAtStats.png'
    },
    {
      nameOfProject: 'REChase Treasure Hunt',
      class: 'idk',
      description: 'A multiplayer online quiz made with React running on top of django with Google OAuth.',
      tags: ['React', 'Django', 'OAuth'],
      thumbnail: '/projects/rechase.png'
    }
  ]

const FeaturedProjects: React.FC = () => {
  return (
    <div className="projects">
      <h1 className="heading">Featured Projects</h1>
      <div className="inner">
        {featured.map((feature, index) => {
          return (
            <div key={index} className="project">
              <div className="project-thumb">
                <Image alt={feature.class} src={feature.thumbnail} layout={'fill'} objectFit={'cover'} />
              </div>
              <div className="project-desc">
                <div className='feature-name'>{feature.nameOfProject}</div>
                <div className='feature-description'>{feature.description}</div>
                <div className="feature-tags tags">
                  {feature.tags.map((tag, index) => (
                    <span className='feature-tag tag' key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedProjects;