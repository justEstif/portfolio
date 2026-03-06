<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { base } from '$app/paths';

	let { children } = $props();

	const navLinks = [
		{ href: '/', label: 'home' },
		{ href: '/projects', label: 'projects' },
		{ href: '/experience', label: 'experience' },
		{ href: '/skills', label: 'skills' },
		{ href: '/about', label: 'about' },
		{ href: '/contact', label: 'contact' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="navbar bg-base-100 shadow-lg mb-8">
	<div class="container mx-auto">
		<div class="flex-1">
			<a href="{base}/" class="btn btn-ghost text-xl font-bold text-primary">estifanos</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				{#each navLinks as link (link.href)}
					<li><a href="{base}{link.href}">{link.label}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<main class="container mx-auto px-4 py-8">
	{@render children()}
</main>
