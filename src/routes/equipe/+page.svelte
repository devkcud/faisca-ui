<script lang="ts">
  import Icon from '@iconify/svelte';
  import NoMaxWidthLayout from '$lib/layouts/NoMaxWidthLayout.svelte';
</script>

<svelte:head>
  <title>Nossa Equipe - Faísca</title>
</svelte:head>

<NoMaxWidthLayout>
  <section class="mx-auto mb-8 max-w-[1200px] p-4">
    <h1 class="pb-4 text-3xl font-bold text-quaternary sm:text-5xl">Conheça nossa equipe</h1>

    <p>
      O Faísca é um projeto construído por muitas mãos. Atualmente nossa equipe é constituída por
      dois núcleos: (i) 480 alunos e 06 professores do Ensino Médio e (ii) 15 alunos (graduação e
      pós-graduação) e 01 professora do Ensino Superior.
    </p>
  </section>

  <div
    class="relative mb-4 w-full bg-gradient-to-r from-primary to-primary-light text-white max-sm:bg-gradient-to-b"
  >
    <section
      class="mx-auto max-w-4xl py-4 text-primary-content max-xl:pl-32 max-sm:mx-auto max-sm:pl-4"
    >
      <div class="flex">
        <h2 class="flex-1 text-xl">
          Confira nossos
          <br />
          <span class="font-semibold text-accent">membros</span>
        </h2>

        <div class="mr-4 flex items-end">
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

    <img
      src="/assets/grupo.png"
      alt=""
      class="absolute bottom-0 right-0 w-1/3 max-w-52 max-sm:scale-x-[-1] sm:left-0"
    />
  </div>
</NoMaxWidthLayout>
