<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>About | Estifanos Beyene</title>
</svelte:head>

<div class="max-w-3xl mx-auto space-y-8">
	<!-- Header -->
	<section class="space-y-4">
		<div class="flex items-center gap-2 text-primary">
			<span class="text-base-content/60">~</span>
			<span class="text-primary">$</span>
			<span>cat ./about.md</span>
			<span class="animate-pulse">_</span>
		</div>
	</section>

	<!-- Bio -->
	<div class="border border-base-content/20 border-dashed p-6 space-y-4">
		<h1 class="text-2xl font-bold text-primary">Estifanos Beyene</h1>
		<p class="text-base-content/80 leading-relaxed">
			Full-stack software engineer with 2+ years shipping production systems at enterprise scale —
			TypeScript/React, Go, and Node.js. Currently at Red Ventures, where I've led incident
			response, driven AI-powered platform features, and served as an embedded AI Champion.
		</p>
		<p class="text-base-content/80 leading-relaxed">
			I'm drawn to clean architecture, type safety, and systems that are both correct and
			maintainable. I like understanding things deeply — from database query plans to compiler
			internals — and writing code that reflects that understanding.
		</p>
		<p class="text-base-content/80 leading-relaxed">
			Outside of programming I enjoy reading, tinkering with Linux configs, and exploring tools that
			make development more enjoyable.
		</p>
	</div>

	<!-- Quick facts -->
	<section class="space-y-4">
		<div class="flex items-center gap-2 text-primary">
			<span class="text-base-content/60">~</span>
			<span class="text-primary">$</span>
			<span>cat ./facts.json</span>
		</div>
		<div class="border border-base-content/20 border-dashed p-6 space-y-2 font-mono text-sm">
			<p><span class="text-accent">"focus"</span><span class="text-base-content/60">:</span> <span class="text-success">"full stack web development"</span>,</p>
			<p><span class="text-accent">"languages"</span><span class="text-base-content/60">:</span> <span class="text-success">["TypeScript", "Go", "Ruby", "Python"]</span>,</p>
			<p><span class="text-accent">"frameworks"</span><span class="text-base-content/60">:</span> <span class="text-success">["React/Next.js", "SvelteKit", "NestJS", "Express.js"]</span>,</p>
			<p><span class="text-accent">"databases"</span><span class="text-base-content/60">:</span> <span class="text-success">["PostgreSQL", "MongoDB", "Redis", "Supabase"]</span>,</p>
			<p><span class="text-accent">"editor"</span><span class="text-base-content/60">:</span> <span class="text-success">"Neovim"</span>,</p>
			<p><span class="text-accent">"os"</span><span class="text-base-content/60">:</span> <span class="text-success">"Linux"</span>,</p>
			<p><span class="text-accent">"available"</span><span class="text-base-content/60">:</span> <span class="text-primary">true</span></p>
		</div>
	</section>

	<div class="flex gap-3">
		<a href="{base}/projects" class="btn btn-primary btn-sm">view projects</a>
		<a href="{base}/contact" class="btn btn-outline btn-sm">get in touch</a>
	</div>
</div>
