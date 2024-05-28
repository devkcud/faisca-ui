<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<section class="mb-8">
  <h1 class="pb-4 text-3xl font-bold sm:text-5xl">Conheça nossa equipe</h1>

  <p>
    O Faísca é um projeto construído por muitas mãos. Atualmente nossa equipe é constituída por dois
    núcleos: (i) 480 alunos e 06 professores do Ensino Médio e (ii) 15 alunos (graduação e
    pós-graduação) e 01 professora do Ensino Superior.
  </p>
</section>

<div class="relative w-full">
  <section
    class="mx-auto max-w-4xl bg-primary-light py-4 sm:pl-32 text-primary-content bleed-bg bleed-primary-light max-sm:mx-auto max-sm:max-w-72"
  >
    <div class="flex">
      <h2 class="flex-1 text-xl">
        Confira nossos
        <br />
        <span class="font-semibold text-accent">membros</span>
      </h2>

      <div class="flex items-end">
        <Icon icon="ph:star-four" font-size={40} class="text-accent" />
        <Icon icon="ph:star-four" font-size={20} class="text-secondary" />
      </div>
    </div>

    <div class="grid gap-4 py-8 sm:grid-cols-2 md:grid-cols-3">
      <p>Maria Isabelly Machado</p>
      <p>Ana Beatriz Almeida</p>
      <p>Nathan do Carmo</p>
      <p>André Luis Scalise Albanese Junior</p>
      <p>Eduardo Lima</p>
      <p>Sarah de Moura Gardinal</p>
      <p>Beatriz Barros</p>
      <p>Sara Oliveira</p>
      <p>Leticia Lemos</p>
      <p>Carlos Eduardo Costa</p>
      <p>Giovana Godoy Petrucci</p>
      <p>Sergio Barbosa</p>
      <p>Ana Julia Olindin</p>
      <p>Richard dos Santos Paiva</p>
    </div>
  </section>

  <img src="/assets/grupo.png" alt="" class="absolute bottom-0 -right-8 sm:w-1/4 w-1/3 sm:-left-8 max-sm:scale-x-[-1]" />
</div>
