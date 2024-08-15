<script lang="ts">
  import Icon from '@iconify/svelte';
  import MainLayout from '$lib/layouts/MainLayout.svelte';
  import showdown from 'showdown';
  import type { PageServerData } from './$types';

  export let data: PageServerData;

  const converter = new showdown.Converter();
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

        <span class="mt-auto italic opacity-40">Leia agora o Artigo de Divulgação Científica</span>

        {#if data.article.pdf_url && data.article.pdf_url !== ''}
          <a
            href={data.article.pdf_url}
            class="sticky top-2 my-2 rounded-xl bg-warning px-6 py-2 text-center font-semibold opacity-40 transition-all hover:opacity-100"
          >
            Fazer download do PDF
          </a>
        {/if}

        <div class="flex max-h-[400px] min-h-[400px] gap-3 md:hidden md:max-w-md">
          <div class="flex flex-1 flex-col gap-3 *:rounded-xl *:object-cover">
            <img
              src={data.article.inner_images[0] ?? 'https://placehold.co/400x400'}
              alt=""
              class="h-1/2 w-full"
            />
            <img
              src={data.article.inner_images[1] ?? 'https://placehold.co/400x400'}
              alt=""
              class="h-1/2 w-full"
            />
          </div>
          <div class="flex-1 space-y-3 *:rounded-xl *:object-cover">
            <img
              src={data.article.inner_images[2] ?? 'https://placehold.co/400x400'}
              alt=""
              class="h-full w-full"
            />
          </div>
        </div>

        <article class="mt-4 space-y-4 text-justify font-serif text-xl leading-8">
          {@html converter.makeHtml(data.article.body)}
        </article>
      </div>

      <div class="flex max-h-[400px] min-h-[400px] gap-3 max-md:hidden md:max-w-md">
        <div class="flex flex-1 flex-col gap-3 *:rounded-xl *:object-cover">
          <img
            src={data.article.inner_images[0] ?? 'https://placehold.co/400x400'}
            alt=""
            class="h-1/2 w-full"
          />
          <img
            src={data.article.inner_images[1] ?? 'https://placehold.co/400x400'}
            alt=""
            class="h-1/2 w-full"
          />
        </div>
        <div class="flex-1 space-y-3 *:rounded-xl *:object-cover">
          <img
            src={data.article.inner_images[2] ?? 'https://placehold.co/400x400'}
            alt=""
            class="h-full w-full"
          />
        </div>
      </div>
    </section>
  </div>

  <section
    class="my-8 flex justify-between gap-16 overflow-x-auto p-4 text-white bleed-bg bleed-primary *:flex *:flex-shrink-0 *:items-center *:gap-4"
  >
    <div>
      <Icon icon="fluent-emoji-high-contrast:writing-hand" font-size={32} />

      <div>
        <p class="font-bold">Autor{data.article.author.length > 1 ? 'es' : ''}</p>
        <p>{data.article.author.join(', ')}</p>
      </div>
    </div>

    <div>
      <Icon icon="fontisto:person" font-size={32} />

      <div>
        <p class="font-bold">Orientador{data.article.advisor.length > 1 ? 'es' : ''}</p>
        <p>{data.article.advisor.join(', ')}</p>
      </div>
    </div>

    <div>
      <Icon icon="mdi:account-tie-hat" font-size={40} />

      <div>
        <p class="font-bold">Coordenador{data.article.coordinator.length > 1 ? 'es' : ''}</p>
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

  <details>
    <summary class="cursor-pointer text-xl font-bold">Referências</summary>

    <ul>
      {#each data.article.references as reference}
        <li>
          {reference}
        </li>
      {/each}
    </ul>
  </details>

  <div class="divider"></div>

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
