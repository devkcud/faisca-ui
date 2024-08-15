<script lang="ts">
  import Icon from '@iconify/svelte';
  import { Card, Carrousel, Curiosity } from '$lib/components';
  import MainLayout from '$lib/layouts/MainLayout.svelte';
  import type { PageServerData } from './$types';

  let images: [string, string][] = [
    ['/banners/banner1.png', /* alt */ ''],
    ['/banners/banner2.png', /* alt */ ''],
    ['/banners/banner3.png', /* alt */ '']
  ];

  export let data: PageServerData;
</script>

<svelte:head>
  <title>Home - Faísca</title>
</svelte:head>

<MainLayout>
  <Carrousel {images}></Carrousel>

  <div class="divider mt-12 font-bold text-quaternary">
    Conheça nossos Artigos de Divulgação Científica
  </div>

  <section class="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {#if data.articles.length === 0}
      <p class="col-span-full">Nenhum artigo publicado...</p>
    {/if}

    {#each data.articles as article}
      <Card
        title={article.title}
        href="/artigo/{article.id}"
        image={{ src: article.thumb_url, alt: article.title }}
        color="blue"
      >
        {article.summary}
      </Card>
    {/each}
  </section>

  <div class="divider mt-12 font-bold text-quaternary">Curiosidades do Projeto</div>

  <section class="my-8 flex w-full gap-4 overflow-auto p-6 *:shrink-0">
    <Curiosity color="blue">
      <Icon icon="ph:book-fill" slot="icon" />

      O Faísca reúne professores e alunos do Ensino Básico e Superior. Nosso objetivo central é
      popularizar a ciência através de projetos de pesquisa interdisciplinares.
    </Curiosity>

    <Curiosity color="pink">
      <Icon icon="mdi:pencil" slot="icon" />

      O Faísca Científica é um projeto de extensão que nasceu no Instituto de Estudos da Linguagem
      (IEL) da Unicamp em parceria com escolas estaduais de São Paulo.
    </Curiosity>

    <Curiosity color="yellow">
      <Icon icon="ri:scissors-fill" slot="icon" />

      Em sua primeira edição, o Faísca reuniu 480 alunos do Ensino Médio, os quais receberam tutoria
      acadêmica de alunos de graduação e pós-graduação do IEL.
    </Curiosity>
  </section>
</MainLayout>
