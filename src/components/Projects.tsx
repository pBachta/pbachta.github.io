import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github as GitHub, BookOpen } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  blogUrl: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: '10xCards',
    description: 'A tool that leverages AI to generate flashcards from text, making studying more efficient and effective.',
    image: '/projects/10xCards.gif',
    tags: ['React', 'Node.js', 'Astro', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vitest', 'Cloudflare', 'GitHub Actions'],
    githubUrl: 'https://github.com/pBachta/10x-cards-astro',
    liveUrl: 'https://10x-cards-ab6.pages.dev',
    blogUrl: 'https://blog.pbachta.dev/projects/10xCards',
  },
  {
    id: 2,
    title: 'This Portfolio',
    description: 'A personal portfolio website showcasing my skills, projects, etc. Built with React, TypeScript, and Tailwind CSS.',
    image: '/projects/portfolio.gif',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'GitHub Pages'],
    githubUrl: 'https://github.com/pBachta/pbachta.github.io',
    blogUrl: 'https://blog.pbachta.dev/projects/portfolio',
  },
  // {
  //   id: 3,
  //   title: 'Real-Time Chat Application',
  //   description: 'A WebSocket-based chat application with features like real-time messaging, file sharing, and user presence indicators. Optimized for performance and low latency.',
  //   image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   tags: ['WebSockets', 'React', 'Express', 'Redis'],
  //   githubUrl: 'https://github.com/pBachta',
  //   liveUrl: 'https://example.com',
  //   blogUrl: 'https://blog.pbachta.dev/projects/realtime-chat',
  // },
  // {
  //   id: 4,
  //   title: 'AI-Powered Data Analysis Tool',
  //   description: 'A machine learning application that analyzes business data to provide actionable insights. Includes data visualization, predictive modeling, and automated reporting.',
  //   image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   tags: ['Python', 'TensorFlow', 'Flask', 'D3.js'],
  //   githubUrl: 'https://github.com/pBachta',
  //   blogUrl: 'https://blog.pbachta.dev/projects/ai-analysis-tool',
  // },
];

const projectsDataSorted = [...projectsData].sort((a, b) => b.id - a.id);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.1 });
  const [isHovered, setIsHovered] = React.useState(false);

  // Helper: if image is a gif, try to use a static preview (same name, .png)
  const isGif = project.image.endsWith('.gif');
  const staticImage = isGif ? project.image.replace(/\.gif$/, '.png') : project.image;
  const displayImage = isGif && !isHovered ? staticImage : project.image;

  return (
    <div 
      ref={cardRef}
      className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={displayImage} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-between items-center">
            <div className="flex space-x-3">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                  aria-label="View GitHub repository"
                >
                  <GitHub size={18} />
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                  aria-label="View live project"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          // href={project.blogUrl}
          // target="_blank"
          // rel="noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <BookOpen size={18} className="mr-2" />
          Read More
          <p className="ml-2 text-gray-400">coming soon</p>
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 transform ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
              Side Projects
              <p className="ml-2 text-gray-400">more coming soon</p>
            </span>
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {projectsDataSorted.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;