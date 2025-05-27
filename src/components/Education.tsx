import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { GraduationCap } from 'lucide-react';

const education = [
	{
		id: 1,
		degree: 'Master`s degree',
		institution: 'West Pomeranian University of Technology in Szczecin - Faculty of Electrical Engineering',
		period: '2012 - 2013',
		description: 'Specialized in Electronics and Telecommunication',
	},
	{
		id: 2,
		degree: 'Engineer`s degree, ',
		institution: 'West Pomeranian University of Technology in Szczecin - Faculty of Electrical Engineering',
		period: '2008 - 2012',
		description: 'Specialized in Electronics and Telecommunications',
	},	
	{
		id: 3,
		degree: 'Certified Electronics Technician',
		institution: 'Prof. M. T. Huber Electrical and Electronic School Complex in Szczecin (ZSEE/TME)',
		period: '2004 - 2008',
		description: 'Specialized in Electronics',
	},
];

const EducationCard: React.FC<{ education: typeof education[0]; index: number; isLast: boolean }> = ({
	education,
	index,
	isLast,
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
			<div className="absolute left-4 top-8 -ml-1.5 h-3 w-3 rounded-full bg-primary-500 border-2 border-white dark:border-gray-900 z-10"></div>

			{!isLast && (
				<div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
			)}

			<div className="ml-12 relative">
				<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
					<h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
						{education.degree}
					</h3>
					<h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
						{education.institution}
					</h4>
					<div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
						{education.period}
					</div>
					<p className="text-gray-600 dark:text-gray-400">
						{education.description}
					</p>
				</div>
			</div>
		</div>
	);
};

const Education: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { threshold: 0.1 });

	return (
		<section
			id="education"
			ref={sectionRef}
			className="py-20 bg-white dark:bg-gray-900"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div
					className={`space-y-20 transition-all duration-1000 transform ${
						isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					{/* Education */}
					<div>
						<div className="flex items-center justify-center mb-12">
							<GraduationCap size={28} className="text-primary-500 mr-3" />
							<h2 className="text-3xl md:text-4xl font-bold text-center">
								<span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
									Education
								</span>
							</h2>
						</div>

						<div className="max-w-4xl mx-auto space-y-12">
							{education.map((edu, index) => (
								<EducationCard key={edu.id} education={edu} index={index} isLast={index === education.length - 1} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;