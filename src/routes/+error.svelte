<script lang="ts">
  import Icon from '@iconify/svelte';
  import { page } from '$app/stores';

  const status = $page.status;
  const errorMessage = $page.error!.message;
</script>

<svelte:head>
  <title>Erro {status} - Faísca</title>
</svelte:head>

<div class="absolute inset-4 flex flex-col items-center justify-center">
  <section class="flex items-center gap-4">
    <Icon icon="mingcute:sad-line" class="size-48 text-error max-md:size-28" />

    <div>
      <p class="text-sm" aria-hidden>Ah, não!</p>
      <h1 class="text-7xl font-black text-error max-md:text-4xl">Erro {status}</h1>
      <p class="w-full text-end text-sm" aria-hidden>{errorMessage}</p>
    </div>
  </section>

  <div class="divider"></div>

  <p class="text-center">
    <span>
      {#if status === 404}
        Não encontramos o que você estava procurando.
      {:else}
        Não sabemos o que aconteceu. Por isso, pedimos perdão pela inconveniência.
      {/if}
    </span>

    <br />
    <!-- Kinda hacky, but we add this to separate text in mobile -->
    <br class="sm:hidden" />

    <span>
      <button role="link" class="link link-primary font-semibold" on:click={() => history.back()}>
        Volte para página anterior
      </button>, ou, caso isso for um problema frequente,
      <a href="/contato" class="link link-primary font-semibold">mande uma mensagem</a>.
    </span>
  </p>

  <a href="/" class="btn btn-primary mt-8 max-sm:btn-sm sm:btn-wide">
    <Icon icon="ic:baseline-home" />
    Página Principal
  </a>
</div>
