<script lang="ts">
	import { base } from '$app/paths';
	import { experiences, education, certifications } from '$lib/data/experience';
</script>

<svelte:head>
	<title>Experience | Estifanos Beyene</title>
</svelte:head>

<div class="max-w-4xl mx-auto space-y-12">
	<!-- Header -->
	<section class="space-y-4">
		<div class="flex items-center gap-2 text-primary">
			<span class="text-base-content/60">~</span>
			<span class="text-primary">$</span>
			<span>cat ./experience.md</span>
			<span class="animate-pulse">_</span>
		</div>
		<p class="text-base-content/60 text-sm">Professional journey and credentials</p>
	</section>

	<!-- Work Experience -->
	<section class="space-y-6">
		<h2 class="text-2xl font-bold border-b border-base-content/10 pb-4">Work Experience</h2>
		{#if experiences.length > 0}
			<div class="space-y-6">
				{#each experiences as exp (exp.jobTitle)}
					<article
						class="border border-base-content/20 border-dashed p-6 space-y-3 hover:border-primary transition-colors"
					>
						<div class="flex items-start justify-between gap-4 mb-3">
							<div>
								<h3 class="text-lg font-bold text-primary">{exp.jobTitle}</h3>
								<div class="flex items-center gap-2 mt-1">
									{#if exp.companyUrl}
										<a
											href={exp.companyUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="font-semibold text-base-content hover:underline"
										>
											{exp.companyName}
										</a>
									{:else}
										<span class="font-semibold text-base-content">{exp.companyName}</span>
									{/if}
									<span
										class="text-xs px-2 py-0.5 bg-base-300 text-base-content/70 border border-base-content/10"
									>
										{exp.employmentType}
									</span>
								</div>
							</div>
							{#if exp.featured}
								<span
									class="text-xs px-2 py-0.5 bg-warning/20 text-warning border border-warning/30 shrink-0"
								>
									featured
								</span>
							{/if}
						</div>

						<div class="text-sm text-base-content/60">
							<p class="flex items-center gap-2">
								<span class="text-primary">●</span>
								{exp.location}
							</p>
							<p class="flex items-center gap-2">
								<span class="text-primary">●</span>
								{exp.startDate} - {exp.currentlyWorking ? 'Present' : exp.endDate ?? ''}
							</p>
							{#if exp.industry}
								<p class="flex items-center gap-2">
									<span class="text-primary">●</span>
									{exp.industry}
								</p>
							{/if}
						</div>

						<p class="text-sm text-base-content/80 pt-3 border-t border-base-content/10">
							{exp.description}
						</p>

						{#if exp.skillsUsed.length > 0}
							<div class="flex flex-wrap gap-1.5 pt-3">
								{#each exp.skillsUsed as skill (skill)}
									<span
										class="text-xs px-2 py-0.5 bg-accent/20 text-accent border border-accent/30"
									>
										{skill}
									</span>
								{/each}
							</div>
						{/if}
					</article>
				{/each}
			</div>
		{:else}
			<p class="text-base-content/60">No work experience added yet.</p>
		{/if}
	</section>

	<!-- Education -->
	{#if education.length > 0}
		<section class="space-y-6">
			<h2 class="text-2xl font-bold border-b border-base-content/10 pb-4">Education</h2>
			<div class="space-y-6">
				{#each education as edu (`${edu.degree}-${edu.fieldOfStudy}`)}
					<article
						class="border border-base-content/20 border-dashed p-6 space-y-3 hover:border-primary transition-colors"
					>
						<div class="flex items-start justify-between gap-4 mb-3">
							<div>
								<h3 class="text-lg font-bold text-primary">{edu.degree}</h3>
								<p class="text-sm font-semibold text-base-content mt-1">{edu.fieldOfStudy}</p>
								{#if edu.schoolUrl}
									<a
										href={edu.schoolUrl}
										target="_blank"
										rel="noopener noreferrer"
										class="text-sm text-base-content/60 hover:text-primary"
									>
										{edu.schoolName}
									</a>
								{:else}
									<p class="text-sm text-base-content/60">{edu.schoolName}</p>
								{/if}
							</div>
							{#if edu.featured}
								<span
									class="text-xs px-2 py-0.5 bg-warning/20 text-warning border border-warning/30 shrink-0"
								>
									featured
								</span>
							{/if}
						</div>

						<div class="text-sm text-base-content/60">
							<p class="flex items-center gap-2">
								<span class="text-primary">●</span>
								{edu.startDate}{edu.endDate ? ` - ${edu.endDate}` : ''}
							</p>
							{#if edu.gradeOrScore}
								<p class="flex items-center gap-2">
									<span class="text-primary">●</span>
									GPA: {edu.gradeOrScore}
								</p>
							{/if}
						</div>

						{#if edu.description}
							<p class="text-sm text-base-content/80 pt-3 border-t border-base-content/10">
								{edu.description}
							</p>
						{/if}

						{#if edu.skillsGained.length > 0}
							<div class="flex flex-wrap gap-1.5 pt-3">
								{#each edu.skillsGained as skill (skill)}
									<span
										class="text-xs px-2 py-0.5 bg-accent/20 text-accent border border-accent/30"
									>
										{skill}
									</span>
								{/each}
							</div>
						{/if}
					</article>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Certifications -->
	{#if certifications.length > 0}
		<section class="space-y-6">
			<h2 class="text-2xl font-bold border-b border-base-content/10 pb-4">
				Certifications & Credentials
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each certifications as cert (cert.certificationName)}
					<article
						class="border border-base-content/20 border-dashed p-4 space-y-2 hover:border-primary transition-colors"
					>
						<h4 class="font-bold text-primary text-sm">{cert.certificationName}</h4>
						<div class="text-xs text-base-content/60 space-y-1">
							<p>{cert.issuingOrganization}</p>
							<p class="flex items-center gap-2">
								<span class="text-primary">●</span>
								Issued {cert.issueDate}{cert.expirationDate
									? ` - Expires ${cert.expirationDate}`
									: ''}
							</p>
						</div>
						{#if cert.credentialUrl}
							<a
								href={cert.credentialUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="text-xs text-primary hover:underline block pt-2"
							>
								View Credential →
							</a>
						{/if}
						{#if cert.description}
							<p class="text-xs text-base-content/70 pt-2 border-t border-base-content/10">
								{cert.description}
							</p>
						{/if}
					</article>
				{/each}
			</div>
		</section>
	{/if}


</div>
