<script lang="ts">
	import { skillsByCategory } from '$lib/data/skills';
</script>

<svelte:head>
	<title>Skills | Estifanos Beyene</title>
</svelte:head>

<div class="max-w-4xl mx-auto space-y-8">
	<!-- Header -->
	<section class="space-y-4">
		<div class="flex items-center gap-2 text-primary">
			<span class="text-base-content/60">~</span>
			<span class="text-primary">$</span>
			<span>grep -r "^skills" .</span>
			<span class="animate-pulse">_</span>
		</div>
		<p class="text-base-content/60 text-sm">Technical expertise and proficiencies</p>
	</section>

	<!-- Skills by Category -->
	{#if Object.keys(skillsByCategory).length > 0}
		<div class="space-y-10">
			{#each Object.entries(skillsByCategory) as [categoryName, skills] (categoryName)}
				<section class="space-y-4">
					<h2 class="text-2xl font-bold border-b border-base-content/10 pb-4">{categoryName}</h2>
					<div class="space-y-3">
						{#each skills as skill (skill.skillName)}
							<div class="group space-y-1.5">
								<div class="flex items-center justify-between">
									<div>
										<h3
											class="font-semibold text-base-content group-hover:text-primary transition-colors"
										>
											{skill.skillName}
										</h3>
										<div class="flex items-center gap-2 text-xs text-base-content/60">
											<span>●</span>
											<span>{skill.proficiencyLevel}</span>
											{#if skill.featured}
												<span class="text-warning">★</span>
											{/if}
										</div>
									</div>
									<span class="text-sm font-semibold text-base-content">
										{skill.proficiencyPercentage}%
									</span>
								</div>
								<div class="w-full h-2 bg-base-300 border border-base-content/10 overflow-hidden">
									<div
										class="h-full transition-all duration-300 group-hover:bg-primary bg-base-content/40"
										style="width: {skill.proficiencyPercentage}%"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	{:else}
		<p class="text-base-content/60">No skills added yet.</p>
	{/if}
</div>
