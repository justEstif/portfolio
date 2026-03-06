export interface WorkExperience {
	jobTitle: string;
	companyName: string;
	companyUrl?: string;
	employmentType: string;
	location: string;
	startDate: string;
	endDate?: string;
	currentlyWorking: boolean;
	description: string;
	skillsUsed: string[];
	industry?: string;
	featured?: boolean;
}

export interface Education {
	degree: string;
	fieldOfStudy: string;
	schoolName: string;
	schoolUrl?: string;
	startDate: string;
	endDate?: string;
	gradeOrScore?: string;
	description?: string;
	skillsGained: string[];
	featured?: boolean;
}

export interface Certification {
	certificationName: string;
	issuingOrganization: string;
	issueDate: string;
	expirationDate?: string;
	credentialUrl?: string;
	description?: string;
}

export const experiences: WorkExperience[] = [
	{
		jobTitle: 'Software Engineer · AI Champion',
		companyName: 'Red Ventures',
		companyUrl: 'https://www.redventures.com',
		employmentType: 'Full-time',
		location: 'Charlotte, NC',
		startDate: 'Jun 2024',
		currentlyWorking: true,
		description:
			'Shipped production features across Express/NestJS backend, Next.js frontend, and cart systems. Commanded 2 SEV1/SEV2 incidents as incident lead, restoring service in under 45 minutes each. Led end-to-end implementation of an AI chat platform attributed with driving 100s of additional monthly orders. Served as engineering AI Champion — prototyped Jira-to-Cursor/Codex automation, built a ticket quality review assistant, and delivered 5+ org-wide presentations on AI-assisted development.',
		skillsUsed: ['TypeScript', 'React', 'Next.js', 'NestJS', 'Express.js', 'Node.js', 'New Relic'],
		industry: 'Media & Commerce',
		featured: true
	},
	{
		jobTitle: 'Full-Stack Engineer',
		companyName: 'Brain Sprite',
		employmentType: 'Full-time',
		location: 'Remote',
		startDate: 'Jun 2023',
		endDate: 'Oct 2023',
		currentlyWorking: false,
		description:
			'Architected and shipped a full-stack Ed-tech app and Chrome extension using Supabase, Next.js, and OAuth. Built end-to-end auth via Supabase Auth, Edge Functions, and PostgreSQL RLS — enforcing fine-grained access control across the platform.',
		skillsUsed: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'OAuth'],
		industry: 'EdTech'
	},
	{
		jobTitle: 'Open Source Contributor',
		companyName: 'Epicenter (Y Combinator)',
		employmentType: 'Volunteer',
		location: 'Remote',
		startDate: '2023',
		currentlyWorking: false,
		description:
			'Implemented devcontainer/Docker setup and authored contributing guidelines for an open-source local-first productivity ecosystem.',
		skillsUsed: ['SvelteKit', 'Rust', 'Docker', 'DevContainers']
	},
	{
		jobTitle: 'Front-End Developer',
		companyName: 'Creolio',
		employmentType: 'Volunteer',
		location: 'Remote',
		startDate: '2023',
		currentlyWorking: false,
		description: 'Built user-facing features for a Spanglish language learning platform.',
		skillsUsed: ['Next.js', 'Django', 'TypeScript']
	}
];

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		fieldOfStudy: 'Computer Science',
		schoolName: 'Western Governors University',
		schoolUrl: 'https://www.wgu.edu',
		startDate: 'Sep 2022',
		endDate: 'Aug 2024',
		skillsGained: ['Algorithms', 'Data Structures', 'Software Engineering', 'Discrete Math'],
		featured: true
	},
	{
		degree: 'Associate of Science',
		fieldOfStudy: 'Engineering',
		schoolName: 'Northern Virginia Community College',
		schoolUrl: 'https://www.nvcc.edu',
		startDate: 'Aug 2020',
		endDate: 'Jan 2022',
		gradeOrScore: '3.86',
		skillsGained: ['Calculus', 'Physics', 'Linear Algebra', 'Engineering Fundamentals']
	},
	{
		degree: 'Associate of Science',
		fieldOfStudy: 'Science with Specialization in Math',
		schoolName: 'Northern Virginia Community College',
		schoolUrl: 'https://www.nvcc.edu',
		startDate: 'Aug 2020',
		endDate: 'Jan 2022',
		gradeOrScore: '3.80',
		skillsGained: ['Statistics', 'Calculus', 'Differential Equations']
	}
];

export const certifications: Certification[] = [];
