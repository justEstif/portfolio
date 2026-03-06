export interface Skill {
	skillName: string;
	proficiencyLevel: string;
	proficiencyPercentage: number;
	featured?: boolean;
}

export const skillsByCategory: Record<string, Skill[]> = {
	Languages: [
		{ skillName: 'TypeScript / JavaScript', proficiencyLevel: 'Advanced', proficiencyPercentage: 92, featured: true },
		{ skillName: 'Go', proficiencyLevel: 'Advanced', proficiencyPercentage: 85, featured: true },
		{ skillName: 'Python', proficiencyLevel: 'Intermediate', proficiencyPercentage: 70 },
		{ skillName: 'Ruby', proficiencyLevel: 'Intermediate', proficiencyPercentage: 65 },
		{ skillName: 'SQL', proficiencyLevel: 'Advanced', proficiencyPercentage: 82 }
	],
	Frontend: [
		{ skillName: 'React / Next.js', proficiencyLevel: 'Advanced', proficiencyPercentage: 90, featured: true },
		{ skillName: 'Svelte / SvelteKit', proficiencyLevel: 'Advanced', proficiencyPercentage: 82, featured: true },
		{ skillName: 'Redux', proficiencyLevel: 'Proficient', proficiencyPercentage: 78 },
		{ skillName: 'Tailwind CSS', proficiencyLevel: 'Advanced', proficiencyPercentage: 90 },
		{ skillName: 'HTMX', proficiencyLevel: 'Intermediate', proficiencyPercentage: 65 }
	],
	'Backend & APIs': [
		{ skillName: 'NestJS', proficiencyLevel: 'Proficient', proficiencyPercentage: 80, featured: true },
		{ skillName: 'Express.js', proficiencyLevel: 'Advanced', proficiencyPercentage: 85 },
		{ skillName: 'Ruby on Rails', proficiencyLevel: 'Intermediate', proficiencyPercentage: 60 },
		{ skillName: 'Django', proficiencyLevel: 'Intermediate', proficiencyPercentage: 60 }
	],
	'Databases & Storage': [
		{ skillName: 'PostgreSQL', proficiencyLevel: 'Advanced', proficiencyPercentage: 85, featured: true },
		{ skillName: 'MongoDB', proficiencyLevel: 'Proficient', proficiencyPercentage: 72 },
		{ skillName: 'Redis', proficiencyLevel: 'Intermediate', proficiencyPercentage: 65 },
		{ skillName: 'Supabase', proficiencyLevel: 'Proficient', proficiencyPercentage: 78 }
	],
	'Infrastructure & Tools': [
		{ skillName: 'Docker', proficiencyLevel: 'Proficient', proficiencyPercentage: 75 },
		{ skillName: 'GitHub Actions', proficiencyLevel: 'Proficient', proficiencyPercentage: 75 },
		{ skillName: 'Vercel', proficiencyLevel: 'Proficient', proficiencyPercentage: 80 },
		{ skillName: 'New Relic', proficiencyLevel: 'Proficient', proficiencyPercentage: 70 },
		{ skillName: 'Git', proficiencyLevel: 'Advanced', proficiencyPercentage: 88 }
	]
};
