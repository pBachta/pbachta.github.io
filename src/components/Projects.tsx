import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github as GitHub, BookOpen } from 'lucide-react';
import ProjectModal from './ProjectModal';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: React.ReactNode;
  technologies: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: '10xCards - AI Flashcard Generator',
    description: 'A tool that leverages AI to generate flashcards from text, making studying more efficient and effective.',
    longDescription: (
      <>
        <p className="mb-4">
          "10x Cards" is a web application designed to revolutionize learning through intelligent flashcards. It empowers users to create flashcards both manually and, more importantly, automatically using AI (powered by OpenRouter) by simply pasting in text.
        </p>
        <p className="mb-4">
          The application features robust user authentication for secure registration and login. A key highlight is its comprehensive flashcard management system, allowing users to review, accept, or discard AI-generated candidates, ensuring quality and relevance.
        </p>
        <p>
          To guarantee data privacy, it incorporates Row Level Security (RLS) in the Supabase backend, ensuring users can only access their own information. Unaccepted AI-generated flashcards are automatically pruned daily to maintain a clean learning environment.
        </p>
      </>
    ),
    technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vitest', 'Cloudflare Pages', 'GitHub Actions'],
    image: '/projects/10xCards.gif',
    liveUrl: 'https://10x-cards-ab6.pages.dev/',
    repoUrl: 'https://github.com/pBachta/10x-cards-astro',
  },
  {
    id: 2,
    title: 'This Portfolio',
    description: 'A personal portfolio website showcasing my skills, projects, and professional journey. Built with modern web technologies.',
    longDescription: (
      <>
        <p className="mb-4">
          This personal portfolio is a dynamic, single-page application built from scratch using React, Vite, and TypeScript. It serves as a central hub to showcase my skills, projects, and professional experience.
        </p>
        <p className="mb-4">
          The user interface is styled with Tailwind CSS, ensuring a responsive and modern design that looks great on all devices. It features smooth, scroll-triggered animations (using a custom `useInView` hook) and a persistent dark/light theme toggle.
        </p>
        <p>
          The site is automatically deployed to GitHub Pages via GitHub Actions, demonstrating a practical CI/CD pipeline for frontend projects.
        </p>
      </>
    ),
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'GitHub Pages', 'GitHub Actions'],
    image: '/projects/portfolio.gif',
    liveUrl: 'https://pbachta.dev/',
    repoUrl: 'https://github.com/pBachta/pbachta.github.io',
  },
];


const projectsDataSorted = [...projectsData].sort((a, b) => b.id - a.id);

const ProjectCard: React.FC<{ project: Project; index: number; onReadMore: (project: Project) => void; }> = ({ project, index, onReadMore }) => {
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
      className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform flex flex-col ${
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
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                aria-label="View GitHub repository"
              >
                <GitHub size={18} />
              </a>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-primary-600 transition-colors duration-300"
                aria-label="View live project"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onReadMore(project)}
          className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-auto"
        >
          <BookOpen size={18} className="mr-2" />
          Read More
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 transform ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
              Side Projects
            </span>
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {projectsDataSorted.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                onReadMore={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;