import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Award, X } from 'lucide-react';

const certificates = [
	{
		id: 1,
		name: 'Scrum master school',
		issuer: 'intive - (internal training)',
		date: '2019',
	},
	{
		id: 2,
		name: 'Introduction to OpenShift Applications (DO101)',
		issuer: 'Red Hat',
		date: '2020',
		preview: '/certificates/openshift_DO101.png',
	},
	{
		id: 3,
		name: 'Why hacking web applications so easy?',
		issuer: 'Sekurak',
		date: '2025',
		preview: '/certificates/why-hacking-web-applications-so-easy.png',
	},
	{
		id: 4,
		name: '10xDevs - Using Generative AI in Software Development (Certificate with Distinction)',
		issuer: 'Przeprogramowani',
		date: '2025',
		preview: '/certificates/10xDevs.png',
	},
	{
		id: 5,
		name: 'Introduction to the MongoDB',
		issuer: 'Udemy',
		date: '2025',
		preview: '/certificates/Introduction_to_the_MongoDB.png',
	},
];

const certificatesSorted = [...certificates].sort((a, b) => b.id - a.id);

const CertificateCard: React.FC<{
	certificate: typeof certificates[0];
	index: number;
	onPreview: (certificate: typeof certificates[0]) => void;
}> = ({
	certificate,
	index,
	onPreview,
}) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(cardRef, { threshold: 0.1 });

	return (
		<div
			ref={cardRef}
			className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-700 transform relative ${
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

			{/* Spacer to ensure button never overlaps content */}
			<div className="h-12"></div>

			{certificate.preview && (
				<button
					onClick={() => onPreview(certificate)}
					className="flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 absolute left-6 bottom-6"
				>
					View Certificate
				</button>
			)}
		</div>
	);
};

const Certificates: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { threshold: 0.1 });
	const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

	return (
		<section
			id="certificates"
			ref={sectionRef}
			className="py-20 bg-white dark:bg-gray-900"
		>
			<div className={`transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
				<div className="max-w-4xl mx-auto px-4">
					<div className="flex items-center justify-center mb-12">
						<Award size={28} className="text-primary-500 mr-3" />
						<h2 className="text-3xl md:text-4xl font-bold text-center">
							<span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text">
								Certificates & Courses
							</span>
						</h2>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						{certificatesSorted.map((cert, index) => (
							<CertificateCard key={cert.id} certificate={cert} index={index} onPreview={setSelectedCertificate} />
						))}
					</div>
				</div>
			</div>

			{/* Global Certificate Preview Modal */}
			{selectedCertificate && selectedCertificate.preview && (
				<div
					onClick={() => setSelectedCertificate(null)}
					className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
				>
					<div
						onClick={e => e.stopPropagation()}
						className="relative bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
					>
						<button
							onClick={() => setSelectedCertificate(null)}
							className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
						>
							<X size={20} />
						</button>
						<div className="p-4">
							<img
								src={selectedCertificate.preview}
								alt={`${selectedCertificate.name} Certificate`}
								className="max-h-[80vh] w-auto mx-auto rounded-lg"
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Certificates;
