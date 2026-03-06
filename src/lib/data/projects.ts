export type RoleType = 'professional' | 'volunteer' | 'contributor';

export interface Project {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	technologies: string[];
	roleType: RoleType;
	githubUrl: string;
	liveUrl?: string;
	imageUrl?: string;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		slug: 'go-climbing',
		title: 'Go Climbing',
		tagline: 'AI-tailored rock climbing trainer with session logging and progress visualization.',
		description:
			'Full-stack rock climbing trainer built with Go and HTMX. Generates personalized training plans via the Gemini API, tracks sessions, and visualizes progress over time.',
		technologies: ['Go', 'Chi', 'Templ', 'HTMX', 'PostgreSQL', 'sqlc', 'Gemini API'],
		roleType: 'professional',
		githubUrl: 'https://github.com/justEstif/go-climbing',
		liveUrl: 'http://go-climbing.estifanos.cc',
		featured: true
	},
	{
		slug: 'unframe',
		title: 'Unframe',
		tagline: 'Duolingo-style critical thinking trainer for identifying propaganda techniques.',
		description:
			'Challenges users to identify persuasion techniques in historical propaganda, with immediate feedback and accuracy tracking. Built with SvelteKit and Drizzle ORM.',
		technologies: ['SvelteKit', 'TypeScript', 'Drizzle ORM'],
		roleType: 'professional',
		githubUrl: 'https://github.com/justEstif/sv-unframe',
		featured: true
	},
	{
		slug: 'todo-open',
		title: 'todo.open',
		tagline: 'Local-first task runtime designed for both humans and AI agents.',
		description:
			'A local-first task runtime in Go with a server-first API contract, pluggable sync and view adapter system, conflict-resolution policy with field-level LWW semantics, and a CLI + web client — designed to serve both human users and AI agents over a stable loopback HTTP interface.',
		technologies: ['Go', 'JSONL', 'HTTP'],
		roleType: 'professional',
		githubUrl: 'https://github.com/justEstif/todo-open',
		featured: true
	},
	{
		slug: 'spotify-era-organizer',
		title: 'Spotify Era Organizer',
		tagline: 'Surfaces distinct listening eras from Spotify liked songs using k-means clustering.',
		description:
			'Analyzes Spotify liked songs with Last.fm enrichment and k-means clustering to surface distinct listening eras by mood and time period.',
		technologies: ['Go', 'PostgreSQL', 'HTMX', 'Spotify API', 'Last.fm API'],
		roleType: 'professional',
		githubUrl: 'https://github.com/justEstif/go-spotify-era-organizer'
	}
];
