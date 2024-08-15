<script lang="ts">
  import Icon from '@iconify/svelte';
  import MainLayout from '$lib/layouts/MainLayout.svelte';
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<svelte:head>
  <title>{data.article.title} - Faísca</title>
</svelte:head>

<MainLayout>
  <div class="relative">
    <section class="flex gap-8 max-md:flex-col">
      <div class="flex w-full flex-col">
        <h2 class="mb-4 text-3xl font-bold text-quaternary sm:text-4xl">
          {data.article.title}
        </h2>

        <!-- Audio button -->

        <div class="mb-4 flex min-h-[400px] gap-3 md:hidden">
          <div class="flex flex-1 flex-col gap-3 *:rounded-xl *:object-cover">
            <img src="https://placehold.co/400x400" alt="" class="h-1/2 w-full" />
            <img src="https://placehold.co/400x400" alt="" class="h-1/2 w-full" />
          </div>
          <div class="flex-1 space-y-3 *:rounded-xl *:object-cover">
            <img src="https://placehold.co/400x400" alt="" class="h-full w-full" />
          </div>
        </div>

        <h3 class="mb-4 text-2xl font-bold text-quaternary sm:text-3xl">Resumo</h3>

        <p class="text-xl">
          {data.article.summary}
        </p>

        <span class="mt-auto italic opacity-40">Leia agora o Artigo de Divulgação Científica</span>
      </div>

      <div class="mb-4 flex max-h-[400px] min-h-[400px] max-w-md gap-3 max-md:hidden">
        <div class="flex flex-1 flex-col gap-3 *:rounded-xl *:object-cover">
          <img src="https://placehold.co/400x400" alt="" class="h-1/2 w-full" />
          <img src="https://placehold.co/400x400" alt="" class="h-1/2 w-full" />
        </div>
        <div class="flex-1 space-y-3 *:rounded-xl *:object-cover">
          <img src="https://placehold.co/400x400" alt="" class="h-full w-full" />
        </div>
      </div>
    </section>

    <article class="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 max-md:grid-cols-1">
      {#each data.article.body.repeat(10).split('\n') as chunk}
        <p class="text-justify">{chunk}</p>
      {/each}
    </article>

    <button
      class="absolute bottom-4 right-0 rounded-xl bg-warning px-6 py-2 font-semibold opacity-40 focus:opacity-100"
    >
      PDF
    </button>
  </div>

  <section
    class="my-8 flex justify-between gap-16 overflow-x-auto p-4 text-white bleed-bg bleed-primary *:flex *:flex-shrink-0 *:items-center *:gap-4"
  >
    <div>
      <Icon icon="fluent-emoji-high-contrast:writing-hand" font-size={32} />

      <div>
        <p class="font-bold">Autor</p>
        <p>{data.article.author}</p>
      </div>
    </div>

    <div>
      <Icon icon="fontisto:person" font-size={32} />

      <div>
        <p class="font-bold">Orientador</p>
        <p>{data.article.advisor.join(', ')}</p>
      </div>
    </div>

    <div>
      <Icon icon="mdi:account-tie-hat" font-size={40} />

      <div>
        <p class="font-bold">Coordenador</p>
        <p>{data.article.coordinator.join(', ')}</p>
      </div>
    </div>

    <div>
      <Icon icon="ph:calendar-light" font-size={38} />

      <div>
        <p class="font-bold">Data de publicação</p>
        <p>
          {data.article.registered_at.toLocaleDateString('pt-br', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>
      </div>
    </div>
  </section>

  <section class="mx-auto w-3/4 space-y-4 rounded-xl bg-warning p-8">
    <h2 class="text-2xl font-semibold">
      Envie um feedback sobre o que você achou do nosso artigo.
    </h2>

    <span class="opacity-40">Vamos trocar uma ideia?</span>

    <form action="?/sendEmail" method="POST" class="flex flex-col gap-4">
      <textarea
        name="message"
        placeholder="Digite aqui seu feedback"
        class="h-36 w-2/3 resize-none rounded-xl p-4"
      ></textarea>

      <button class="w-fit rounded-xl bg-tertiary px-4 py-2 font-semibold text-warning">
        Enviar
      </button>
    </form>
  </section>
</MainLayout>
