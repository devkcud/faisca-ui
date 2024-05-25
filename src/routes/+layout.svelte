<script lang="ts">
  import Icon from '@iconify/svelte';
  import '../app.css';
</script>

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

<footer
  class="mx-auto flex max-w-[1200px] justify-between bg-primary px-4 py-10 bleed-bg bleed-primary"
>
  <section class="flex gap-8 max-sm:flex-col">
    <img src="/logo.svg" alt="Faísca Logo" class="w-32 max-sm:w-24" aria-hidden />

    <nav class="flex flex-col gap-2 *:link *:font-medium *:text-primary-content">
      <a href="/sobre"> Sobre Nós </a>
      <a href="/privacidade"> Política e Privacidade </a>
      <a href="/equipe"> Conheça a Equipe </a>
      <a href="/contato"> Fale Conosco </a>
    </nav>
  </section>

  <section class="flex h-fit items-center gap-2">
    <h2 class="text-primary-content">Redes Sociais:</h2>

    <a href="https://www.instagram.com/faiscacientifica">
      <Icon icon="skill-icons:instagram" class="size-8" />
    </a>
  </section>
</footer>
<div class="bg-primary text-center text-xs text-primary-content" aria-hidden>
  Grupo Faísca © 2023-2024
</div>
