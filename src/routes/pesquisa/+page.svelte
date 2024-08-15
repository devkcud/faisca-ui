<script lang="ts">
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';
  import { Card } from '$lib/components';
  import MainLayout from '$lib/layouts/MainLayout.svelte';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>Pesquisa: '{$page.url.searchParams.get('q')}' - Faísca</title>
</svelte:head>

<MainLayout>
  <section>
    <h1 class="my-8 text-4xl font-bold text-quaternary">Pesquisa</h1>

    <form action="/pesquisa" class="flex gap-4">
      <input
        type="text"
        name="q"
        placeholder="Pesquise por autor, título, descrição etc"
        class="input input-md flex-1 rounded-xl shadow"
      />

      <button class="btn btn-accent btn-md rounded-xl">
        <Icon icon="ph:magnifying-glass-bold" />
      </button>
    </form>
  </section>

  <div class="divider my-12" />

  <div class="flex flex-wrap gap-4 p-4">
    {#if typeof data.result !== 'string'}
      {#each data.result as article}
        <Card
          title={article.title}
          href="/artigo/{article.id}"
          image={{ src: article.thumb_url, alt: article.title }}
          color="blue"
        >
          {article.summary}
        </Card>
      {/each}
    {:else}
      <p class="flex-1 text-center">{data.result}</p>
    {/if}
  </div>
</MainLayout>
