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
      tags: ['JavaScript', 'D3 Visualization', 'Statistics'],
      thumbnail: '/thumbnails/indiaAtStats.png'
    },
    {
      nameOfProject: 'indiaAtStats',
      class: 'idk',
      description: 'A web app that renders a map of India based on various data like rainfall, population etc.',
      tags: ['JavaScript', 'D3 Visualization', 'Statistics'],
      thumbnail: '/thumbnails/indiaAtStats.png'
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
              <Image className='project-thumb' alt={feature.class} src={feature.thumbnail} width={500} height={200} />
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