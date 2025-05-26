import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Award, X } from 'lucide-react';

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

const certificates = [
	{
		id: 1,
		name: 'AWS Certified Solutions Architect',
		issuer: 'Amazon Web Services',
		date: '2023',
		preview: '/certificates/sample-certificate.jpg',
	},
	{
		id: 2,
		name: 'Professional Scrum Master I',
		issuer: 'Scrum.org',
		date: '2022',
		preview: '/certificates/sample2-certificate.jpg',
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
				<div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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

const CertificateCard: React.FC<{ certificate: typeof certificates[0]; index: number }> = ({
	certificate,
	index,
}) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(cardRef, { threshold: 0.1 });
	const [showPreview, setShowPreview] = useState(false);

	return (
		<>
			<div
				ref={cardRef}
				className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-700 transform ${
					isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}
				style={{ transitionDelay: `${index * 150}ms` }}
			>
				<h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
					{certificate.name}
				</h3>
				<h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
					{certificate.issuer}
				</h4>
				<div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
					{certificate.date}
				</div>

				<button
					onClick={() => setShowPreview(true)}
					className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
				>
					View Certificate
				</button>
			</div>

			{/* Certificate Preview Modal */}
			{showPreview && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
					<div className="relative bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
						<button
							onClick={() => setShowPreview(false)}
							className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
						>
							<X size={20} />
						</button>
						<div className="p-4">
							<img
								src={certificate.preview}
								alt={`${certificate.name} Certificate`}
								className="w-full h-auto rounded-lg"
							/>
						</div>
					</div>
				</div>
			)}
		</>
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

					{/* Certificates */}
					<div>
						<div className="flex items-center justify-center mb-12">
							<Award size={28} className="text-primary-500 mr-3" />
							<h2 className="text-3xl md:text-4xl font-bold text-center">
								<span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
									Certificates
									<p className="ml-2 text-gray-400">coming soon</p>
								</span>
							</h2>
						</div>

						{/* <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
							{certificates.map((cert, index) => (
								<CertificateCard key={cert.id} certificate={cert} index={index} />
							))}
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;