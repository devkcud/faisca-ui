<script lang="ts">
  import Icon from '@iconify/svelte';
  import '../app.css';
</script>

<noscript>
  <div role="alert" class="alert alert-warning rounded-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      class="size-6"
    >
      <path
        fill="currentColor"
        d="m12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0m-8.66 16h15.588L12 5.5zM11 16h2v2h-2zm0-7h2v5h-2z"
      />
    </svg>
    JavaScript não está ativado. Coisas não vão funcionar.
  </div>
</noscript>

<header
  class="mx-auto flex max-w-[1200px] items-center justify-between gap-4 bg-primary p-4 bleed-bg bleed-primary"
>
  <a href="/">
    <img src="/logo.svg" alt="Faísca Logo" width={120} />
  </a>

  <section class="flex gap-4">
    <form>
      <label class="flex items-center">
        <input
          type="text"
          name="search"
          placeholder="Digite o que você procura"
          class="input input-sm rounded-full pr-10 max-sm:input-xs max-sm:max-w-56"
        />

        <button class="btn btn-accent btn-sm -ml-6 rounded-full max-sm:btn-xs">
          <Icon icon="ph:magnifying-glass-bold" />
        </button>
      </label>
    </form>

    <button>
      <Icon icon="material-symbols:menu" class="size-6 text-primary-content" />
    </button>
  </section>
</header>

<main class="relative mx-auto h-full max-w-[1200px] flex-1 p-4">
  <slot />
</main>

<footer class="bg-gradient-to-r from-primary to-primary-light text-white">
  <div class="mx-auto flex max-w-[1200px] justify-between px-4 py-10">
    <section class="flex gap-8 max-sm:flex-col">
      <img src="/logo.svg" alt="Faísca Logo" class="w-32 max-sm:w-24" aria-hidden />

      <nav class="flex flex-col gap-2 *:link *:font-medium">
        <a href="/sobre"> Sobre Nós </a>
        <a href="/privacidade"> Política e Privacidade </a>
        <a href="/equipe"> Conheça a Equipe </a>
        <a href="/contato"> Fale Conosco </a>
      </nav>
    </section>

    <section class="flex h-fit items-center gap-2">
      <h2>Redes Sociais:</h2>

      <a href="https://www.instagram.com/faiscacientifica">
        <Icon icon="mdi:instagram" class="size-8" />
      </a>
    </section>
  </div>

  <div class="text-center text-xs" aria-hidden>Grupo Faísca © 2023-2024</div>
</footer>
