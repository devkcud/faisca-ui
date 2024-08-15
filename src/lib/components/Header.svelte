<script>
  import Icon from '@iconify/svelte';
</script>

<header
  class="mx-auto flex max-w-[1200px] items-center justify-between gap-4 bg-primary p-4 bleed-bg bleed-primary"
>
  <a href="/">
    <img src="/logo.svg" alt="Faísca Logo" width={120} />
  </a>

  <section class="flex gap-4">
    <form action="/pesquisa">
      <label class="flex items-center">
        <input
          type="text"
          name="q"
          placeholder="Digite o que você procura"
          class="input input-sm rounded-full pr-10 max-sm:input-xs max-sm:max-w-56"
        />

        <button class="btn btn-accent btn-sm -ml-6 rounded-full max-sm:btn-xs">
          <Icon icon="ph:magnifying-glass-bold" />
        </button>
      </label>
    </form>
  </section>
</header>
