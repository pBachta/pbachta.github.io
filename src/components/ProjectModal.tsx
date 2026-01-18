import React from 'react';
import { X } from 'lucide-react';

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

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-fade-in"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl transform animate-scale-in"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 text-sm font-medium text-primary-800 bg-primary-100 dark:text-primary-200 dark:bg-primary-900/50 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            {project.longDescription}
          </div>

          <div className="flex justify-end space-x-4 mt-8">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
