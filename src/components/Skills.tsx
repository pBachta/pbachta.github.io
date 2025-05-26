import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

type Skill = {
  name: string;
  category: 'languages' | 'software' | 'tools' | 'soft' | 'other';
};

const skillsData: Skill[] = [
  // Programming Languages & Frameworks
  { name: 'Java', category: 'languages' },
  { name: 'SQL', category: 'languages' },
  { name: 'Spring Boot', category: 'languages' },
  { name: 'Spring Data JPA', category: 'languages' },
  { name: 'Feign', category: 'languages' },
  { name: 'RestTemplate', category: 'languages' },
  { name: 'Jackson', category: 'languages' },
  { name: 'Lombok', category: 'languages' },
  { name: 'Swagger', category: 'languages' },
  { name: 'And more...', category: 'languages' },

  // Software
  { name: 'IntelliJ IDEA', category: 'software' },
  { name: 'Visual Studio Code', category: 'software' },
  { name: 'Cursor', category: 'software' },
  { name: 'Postman', category: 'software' },
  { name: 'SoapUI', category: 'software' },
  { name: 'Eclipse Memory Analyzer', category: 'software' },
  { name: 'Docker', category: 'software' },
  { name: 'And more...', category: 'software' },
  
  // Tools
  { name: 'Maven', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub Actions', category: 'tools' },
  { name: 'CI/CD', category: 'tools' },
  { name: 'Jira', category: 'tools' },
  { name: 'SonarQube', category: 'tools' },
  { name: 'OpenShift', category: 'tools' },
  { name: 'JUnit', category: 'tools' },
  { name: 'Mockito', category: 'tools' },
  { name: 'And more...', category: 'tools' },

  // Other
  { name: 'Generative AI', category: 'other' },
  { name: 'Database Design', category: 'other' },
  { name: 'DevOps', category: 'other' },
  { name: 'API Development', category: 'other' },
  { name: 'System Architecture', category: 'other' },
  { name: 'Agile Methodologies', category: 'other' },
  { name: 'And more...', category: 'other' },

  // Soft Skills
  { name: 'Communication', category: 'soft' },
  { name: 'Team Collaboration', category: 'soft' },
  { name: 'Mentoring', category: 'soft' },
  { name: 'Problem Solving', category: 'soft' },
  { name: 'Critical Thinking', category: 'soft' },
  { name: 'Cross-functional collaboration', category: 'soft' },
  { name: 'Adaptability', category: 'soft' },
  { name: 'Self-Management', category: 'soft' },
  { name: 'And more...', category: 'soft' },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryTitles = {
    languages: 'Programming Languages & Frameworks',
    software: 'Software',
    tools: 'Tools',
    soft: 'Soft Skills',
    other: 'Other Skills',
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`transition-all duration-1000 transform ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
              Technical Skills
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill.name}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;