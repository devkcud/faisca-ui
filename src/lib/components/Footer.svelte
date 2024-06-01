<script>
  import Icon from '@iconify/svelte';
</script>

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
