import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Briefcase, Anchor } from 'lucide-react';

type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  scopeOfDuties?: string[];
};

const itScopeOfDuties = [
  'Design, development and maintenance of Java + Spring Boot backend applications deployed on the OpenShift environment',
  'Dividing and migrating monoliths to a microservices architecture',
  'Migrating systems to newer versions (Java 8>11>17, Spring Boot 2>3)',
  'Integrations with other systems using REST and SOAP',
  'Creating unit, integration and e2e tests (JUnit, Mockito, Pact)',
  'Taking care of code quality by doing code review and quality monitoring using SonarQube',
  'Analysis of system operation based on Prometheus, Grafana, ELK',
  'Working with Oracle and PostgreSQL databases',
  'Handling and resolving support tickets based on JIRA tickets and Confluence documentation',
  'Working with code management tools like Git and GitLab',
  'Onboarding and internal trainings for people joining the project',
  'Close cooperation with team members and the client',
];

const itExperience: Experience[] = [
  {
    id: 1,
    role: 'Junior Java Developer',
    company: 'Intive GmbH',
    period: '2018 - 2019',
    description: 'Entry-level backend developer focused on learning core Java and Spring concepts' + 
                  ' while contributing to small features and bug fixes under close mentorship.',
    achievements: [
      'Delivered small features and bugfixes under supervision in an Agile team',
      'Participated in daily stand-ups, sprint planning, and retrospectives',
      'Collaborated with senior developers to learn best practices in software development',
      'Gained experience in RESTful API development and integration',
      'Familiar with Agile methodologies and version control systems',
      'Worked with Spring Boot and Hibernate for backend development',
      'Familiar with reading and understanding business requirements',
      'Participated in code reviews and pair programming sessions',
      'Open to feedback and continuously improving based on mentorship',
      'Used Jira and Git for daily workflow and communication'
    ],
  },
  {
    id: 2,
    role: 'Java Developer',
    company: 'Intive GmbH',
    period: '2019 - 2022',
    description: 'Independent backend developer responsible for implementing and maintaining core business' + 
                  ' features in Java and Spring-based applications, collaborating closely with cross-functional teams.',
    achievements: [
      'Responsible for end-to-end feature implementation',
      'Regular contributor to code reviews and team discussions',
      'Works independently on modules while coordinating with other teams',
      'Involved in troubleshooting production issues and debugging complex problems',
      'Mentored junior developers in day-to-day tasks and best practices',
      'Participated in Agile ceremonies and contributed to sprint planning',
      'Collaborated with cross-functional teams to deliver high-quality software',
    ],
  },
  {
    id: 3,
    role: 'Senior Java Developer',
    company: 'Intive GmbH',
    period: '2022 - Present',
    description: 'Technical leader and backend architect driving the design of scalable Java microservices,' + 
                  ' mentoring developers, and ensuring code quality and alignment with business goals.',
    achievements: [
      'Designed and led implementation of scalable microservice-based architecture', 
      'Responsible for critical modules and system-wide technical decisions',
      'Conducted thorough code reviews and mentored multiple junior and mid-level developers',
      'Collaborated directly with Product Owners, DevOps, and QA to align tech with business goals',
      'Resolved high-priority production issues, conducted root cause analysis and implemented long-term fixes',
      'Advocated for engineering best practices, clean code and knowledge sharing in the team',
      'Participated in architecture discussions and contributed to technical roadmaps',
      'Engaged in continuous learning and applied new technologies to improve development processes',
      'Worked closely with cross-functional teams to deliver high-quality software solutions',
    ],
  },
];

const marineExperience: Experience[] = [
  {
    id: 1,
    role: 'Field Service Engineer',
    company: 'Alphatron Marine Poland',
    period: '2013 - 2018',
    description: 'Provided technical support and maintenance for marine equipment across international vessels.',
    achievements: [
      'Led complex troubleshooting and repair operations under strict time constraints',
      'Communicated effectively with international crews using English as primary language',
      'Managed critical equipment maintenance ensuring vessel compliance with safety regulations',
      'Demonstrated strong problem-solving skills in high-pressure situations',
      'Developed documentation and reporting skills'
    ],
  },
];

const ExperienceCard: React.FC<{ experience: Experience; index: number; isLast: boolean }> = ({ 
  experience, 
  index,
  isLast
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.1 });

  return (
    <div 
      ref={cardRef}
      className={`relative transition-all duration-700 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {!isLast && (
        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      <div className="absolute left-4 top-8 -ml-1.5 h-3 w-3 rounded-full bg-primary-500 border-2 border-white dark:border-gray-900 z-10"></div>
      
      <div className="ml-12 relative">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{experience.role}</h3>
              <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">{experience.company}</h4>
            </div>
            <div className="flex items-center mt-2 sm:mt-0 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              <span className="text-sm text-gray-600 dark:text-gray-400">{experience.period}</span>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">{experience.description}</p>
          
          <h5 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Practical Experience & Collaboration:</h5>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block h-2 w-2 bg-secondary-500 rounded-full mt-2 mr-2"></span>
                <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
              </li>
            ))}
          </ul>
          {experience.scopeOfDuties && experience.scopeOfDuties.length > 0 && (
            <div className="mt-6">
              <h5 className="text-md font-semibold text-primary-700 dark:text-primary-300 mb-2">
                <span className="bg-primary-100 dark:bg-primary-900 px-2 py-1 rounded font-bold">Scope of duties:</span>
              </h5>
              <ul className="list-disc pl-6 space-y-1">
                {experience.scopeOfDuties.map((duty, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300"><span className="font-normal">{duty}</span></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Funkcja do pogrubiania wybranych słów w tekście
const highlightKeywords = (text: string) => {
  const keywords = [
    'Java', 'Spring Boot', 'OpenShift', 'microservices architecture', 'REST', 'SOAP',
    'JUnit', 'Mockito', 'Pact', 'code review', 'SonarQube', 'Prometheus', 'Grafana', 'ELK',
    'Oracle', 'PostgreSQL', 'JIRA', 'Confluence', 'Git', 'GitLab', 'Lab'
  ];
  let result = text;
  keywords.forEach(word => {
    // Dodaj klasę koloru do strong
    result = result.replace(
      new RegExp(`(${word})`, 'gi'),
      '<strong class="text-primary-600 dark:text-primary-400">$1</strong>'
    );
  });
  return result;
};

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`space-y-20 transition-all duration-1000 transform ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* IT Experience */}
          <div>
            <div className="flex items-center justify-center mb-12">
              <Briefcase size={28} className="text-primary-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
                  IT Experience
                </span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Najpierw pozostałe wpisy (np. id 4) poza ramką */}
              {[...itExperience].reverse().filter(exp => ![1,2,3].includes(exp.id)).map((exp, index) => (
                <ExperienceCard 
                  key={exp.id}
                  experience={exp}
                  index={index}
                  isLast={index === 0}
                />
              ))}
              {/* Ramka tylko dla stanowisk Intive (id 1,2,3) */}
              <div className="border border-primary-200 dark:border-primary-800 rounded-2xl p-6 mb-12 bg-white dark:bg-gray-900">
                {[...itExperience].reverse().filter(exp => [1,2,3].includes(exp.id)).map((exp, index) => (
                  <React.Fragment key={exp.id}>
                    <ExperienceCard 
                      experience={exp} 
                      index={index}
                      isLast={index === 2} 
                    />
                  </React.Fragment>
                ))}
                {/* Scope of duties na dole ramki */}
                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md border border-primary-200 dark:border-primary-800">
                  <h5 className="text-lg font-bold text-primary-700 dark:text-primary-300 mb-2">
                    Scope of duties:
                  </h5>
                  <ul className="list-disc pl-6 space-y-1">
                    {itScopeOfDuties.map((duty, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">
                        <span className="font-normal" dangerouslySetInnerHTML={{ __html: highlightKeywords(duty) }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Marine Experience */}
          <div>
            <div className="flex items-center justify-center mb-12">
              <Anchor size={28} className="text-primary-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
                  Other Relevant Experience
                </span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              {[...marineExperience].reverse().map((exp, index) => (
                <ExperienceCard 
                  key={exp.id} 
                  experience={exp} 
                  index={index}
                  isLast={index === marineExperience.length - 1} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;