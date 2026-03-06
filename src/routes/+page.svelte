<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Estifanos Beyene</title>
</svelte:head>

<div class="max-w-3xl mx-auto space-y-12">
	<!-- Hero: whoami -->
	<section class="space-y-4">
		<div class="flex items-center gap-2 text-primary">
			<span class="text-base-content/60">~</span>
			<span class="text-primary">$</span>
			<span>whoami</span>
			<span class="animate-pulse">_</span>
		</div>
		<div class="border border-base-content/20 border-dashed p-6 space-y-3">
			<h1 class="text-3xl md:text-4xl font-bold tracking-tight">ESTIFANOS BEYENE</h1>
			<p class="text-lg text-secondary font-medium">Full Stack Developer</p>
			<p class="text-base-content/80 leading-relaxed">
				2+ years shipping production systems at enterprise scale — TypeScript/React, Go, Node.js.
			</p>
		</div>
	</section>

	<!-- Sections: ls ./sections -->
	<section class="space-y-4">
		<div class="flex items-center gap-2 text-primary">
			<span class="text-base-content/60">~</span>
			<span class="text-primary">$</span>
			<span>ls ./sections</span>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
			<a
				href="{base}/projects"
				class="border border-base-content/20 border-dashed p-4 hover:border-primary hover:bg-base-200 transition-colors group"
			>
				<div
					class="text-primary group-hover:text-primary-content group-hover:bg-primary inline-block px-1"
				>
					projects/
				</div>
				<p class="text-sm text-base-content/60 mt-2">Things I've built</p>
			</a>
			<a
				href="{base}/skills"
				class="border border-base-content/20 border-dashed p-4 hover:border-primary hover:bg-base-200 transition-colors group"
			>
				<div
					class="text-primary group-hover:text-primary-content group-hover:bg-primary inline-block px-1"
				>
					skills/
				</div>
				<p class="text-sm text-base-content/60 mt-2">Tech I work with</p>
			</a>
			<a
				href="{base}/experience"
				class="border border-base-content/20 border-dashed p-4 hover:border-primary hover:bg-base-200 transition-colors group"
			>
				<div
					class="text-primary group-hover:text-primary-content group-hover:bg-primary inline-block px-1"
				>
					experience/
				</div>
				<p class="text-sm text-base-content/60 mt-2">Professional journey</p>
			</a>
		</div>
	</section>

	<!-- Status: cat ./status -->
	<section class="space-y-4">
		<div class="flex items-center gap-2 text-primary">
			<span class="text-base-content/60">~</span>
			<span class="text-primary">$</span>
			<span>cat ./status</span>
		</div>
		<div class="border border-base-content/20 border-dashed p-6 space-y-4">
			<p class="text-base-content/80">
				<span class="text-success">●</span> Available for interesting projects.
			</p>
			<div class="flex flex-wrap gap-3">
				<a href="{base}/projects" class="btn btn-primary btn-sm">view work</a>
				<a href="{base}/contact" class="btn btn-outline btn-sm">get in touch</a>
			</div>
		</div>
	</section>
</div>
