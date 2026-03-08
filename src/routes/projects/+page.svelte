<script lang="ts">
  import { projects } from "$lib/data/projects";
</script>

<svelte:head>
  <title>Projects | Estifanos Beyene</title>
</svelte:head>

<div class="max-w-4xl mx-auto space-y-8">
  <!-- Header -->
  <section class="space-y-4">
    <div class="flex items-center gap-2 text-primary">
      <span class="text-base-content/60">~</span>
      <span class="text-primary">$</span>
      <span>ls -la ./projects</span>
      <span class="animate-pulse">_</span>
    </div>
    <p class="text-base-content/60 text-sm">total {projects.length} projects</p>
  </section>

  <!-- Projects Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as project (project.slug)}
      <article
        class="border border-base-content/20 border-dashed hover:border-primary transition-colors group"
      >
        {#if project.imageUrl}
          <div
            class="aspect-video overflow-hidden border-b border-base-content/20 border-dashed"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
        {/if}

        <div class="p-5 space-y-3">
          <!-- Title + Role Badge -->
          <div class="flex items-start justify-between gap-2">
            <h2 class="text-lg font-bold text-primary">{project.title}</h2>
          </div>

          <!-- Tagline -->
          <p class="text-base-content/80 text-sm">{project.tagline}</p>

          <!-- Technologies -->
          <div class="flex flex-wrap gap-1.5">
            {#each project.technologies as tech (tech)}
              <span
                class="text-xs px-2 py-0.5 bg-base-300 text-base-content/70 border border-base-content/10"
              >
                {tech}
              </span>
            {/each}
          </div>

          <!-- Links -->
          <div class="flex gap-3 pt-2 border-t border-base-content/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-base-content/60 hover:text-primary flex items-center gap-1"
            >
              <span>[</span>github<span>]</span>
            </a>
            {#if project.liveUrl}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-success hover:underline flex items-center gap-1"
              >
                <span class="text-success">●</span> live
              </a>
            {:else}
              <span
                class="text-sm text-base-content/40 flex items-center gap-1"
              >
                <span class="text-base-content/30">○</span> no demo
              </span>
            {/if}
          </div>
        </div>
      </article>
    {/each}
  </div>
</div>
