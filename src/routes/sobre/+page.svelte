<script>
  import Icon from '@iconify/svelte';
</script>

<svelte:head>
  <title>Sobre Nós - Faísca</title>
</svelte:head>

<section class="flex gap-4 max-md:flex-col">
  <div>
    <h2 class="mb-4 text-3xl font-bold text-quaternary sm:text-5xl">
      Conheça o projeto <span class="text-accent">Faísca Científica</span> e descubra um universo de
      <span class="text-accent">conhecimento</span>!
    </h2>

    <div class="mb-4 flex max-h-[600px] gap-3 md:hidden">
      <div class="flex-1 space-y-3 *:rounded-xl *:object-cover">
        <img src="/assets/apresentacao.jpg" alt="" class="h-[calc(100%-11rem)] w-full" />
        <img src="/assets/sala.jpg" alt="" class="h-44 w-full" />
      </div>
      <div class="flex-1 space-y-3 *:rounded-xl *:object-cover">
        <img src="/assets/equipe.jpg" alt="" class="h-44 w-full" />
        <img src="/assets/ti.jpg" alt="" class="h-[calc(100%-11rem)] w-full" />
      </div>
    </div>

    <p>
      O Faísca é um projeto de extensão que, dentro de uma abordagem transdisciplinar, visa: (i) 
      acender e desenvolver o pensamento científico, além de promover o amadurecimento da escrita,
      de alunos do 1º e 2 ano do Ensino Médio (EM) e (ii)  atuar na formação de graduandos e
      pós-graduandos e na formação continuada de professores do EM.
    </p>

    <div class="divider" />
  </div>

  <div class="mb-4 flex min-h-[400px] max-h-[400px] max-w-lg gap-3 max-md:hidden">
    <div class="flex-1 space-y-3 *:rounded-xl *:object-cover">
      <img src="/assets/apresentacao.jpg" alt="" class="h-[calc(100%-11rem)] w-full" />
      <img src="/assets/sala.jpg" alt="" class="h-44 w-full" />
    </div>
    <div class="flex-1 space-y-3 *:rounded-xl *:object-cover">
      <img src="/assets/equipe.jpg" alt="" class="h-44 w-full" />
      <img src="/assets/ti.jpg" alt="" class="h-[calc(100%-11rem)] w-full" />
    </div>
  </div>
</section>

<section class="my-8 flex gap-8 text-white bleed-bg bleed-primary-light">
  <img
    src="/assets/mulher-lupa.png"
    alt=""
    class="max-w-60 object-contain object-bottom max-md:hidden"
  />

  <div class="space-y-4 p-4">
    <h2 class="max-w-96 text-2xl sm:text-3xl">
      Explore nossa história,
      <br />
      <span class="font-bold">e descubra os elementos que moldam nossa essência</span>
    </h2>

    <p>
      Nascido no Instituto de Estudos da Linguagem (IEL) da Unicamp, em parceria com a Etec Antonio
      Furlan (Barueri) e Etec Prof. Armando José Farinazzo, o Faísca Científica é um projeto de
      extensão de autoria da Professora Doutora Amanda Balduino que almeja a difusão do diálogo
      formador e transformador entre a Universidade e o Ensino Básico. Assim, o desenvolvimento do
      pensamento científico, crítico e autônomo dos diferentes agentes Nascido no Instituto de
      Estudos da Linguagem (IEL) da Unicamp, em parceria com a Etec Antonio Furlan (Barueri) e Etec
      Prof. Armando José Farinazzo, o Faísca Científica é um projeto de extensão de autoria da
      Professora Doutora Amanda Balduino que almeja a difusão do diálogo formador e transformador
      entre a Universidade e o Ensino Básico. Assim, o desenvolvimento do pensamento científico,
      crítico e autônomo dos diferentes agentes.
    </p>
  </div>
</section>

<section class="flex items-center gap-4">
  <div>
    <h2 class="max-w-xl text-2xl font-bold text-quaternary sm:text-3xl">
      Conheça Nossos Objetivos!
    </h2>

    <p>
      O objetivo geral do projeto Faísca é o desenvolvimento de letramento científico, visando,
      dentro desse intuito, a difusão do diálogo formador, transformador e necessário entre a
      Universidade e o Ensino Básico.
    </p>

    <div class="mt-8 flex gap-4 max-sm:flex-col">
      <article class="flex flex-1 gap-2">
        <Icon icon="fluent:pen-sparkle-32-regular" class="size-7 shrink-0 text-primary" />

        <div>
          <h3 class="font-bold text-quaternary">Possibilidades oferecidas</h3>

          <p class="opacity-80">
            O Faísca promove o pensamento científico aos jovens, incentivando a curiosidade, o
            raciocínio, a formulação de hipóteses, a investigação e a solução de problemas.
          </p>
        </div>
      </article>

      <article class="flex flex-1 gap-2">
        <Icon icon="fluent:hat-graduation-12-filled" class="size-7 shrink-0 text-primary" />

        <div>
          <h3 class="font-bold text-quaternary">Oportunidades únicas</h3>

          <p class="opacity-80">
            O Faísca contribui para a formação técnica, científica e cidadã dos participantes,
            incluindo alunos e docentes da Unicamp e do ensino médio.
          </p>
        </div>
      </article>
    </div>
  </div>

  <img src="/assets/alvo.png" alt="" class="size-72 max-md:hidden" />
</section>
