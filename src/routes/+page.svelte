<script lang="ts">
  import Icon from '@iconify/svelte';
  import { Card, Carrousel, Curiosity } from '$lib/components';

  let images: [string, string][] = [
    [
      '/banners/banner1.png',
      'Três indivíduos surpresos, em um fundo branco com detalhes azuis, segurando e olhando um livro vermelho aberto de capa dura. No canto superior direito um texto realçando a logo-marca Faísca, com um perfil logo abaixo "@faiscacientifica". No lado direito da imagem, um texto promocional "Explore o projeto Faísca Científica e mergulhe em um vasto mundo de saberes!".'
    ],
    [
      '/banners/banner2.png',
      'A imagem destaca um balão de fala em azul e amarelo sobre um fundo branco. Dentro do balão, encontra-se o texto em português "Apoio Linguístico". Logo abaixo, há uma descrição do projeto "Faísca Científica", cujo propósito é auxiliar estudantes universitários no Brasil a aprimorar suas habilidades de escrita em português. No canto inferior direito, está o logotipo da "Faísca", enquanto no canto superior direito está o identificador "@faiscacientifica".'
    ]
  ];
</script>

<svelte:head>
  <title>Home - Faísca</title>
</svelte:head>

<Carrousel {images}></Carrousel>

<div class="divider mt-12 font-bold">Conheça nossos Artigos de Divulgação Científica</div>

<section class="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3">
  <Card href="/" image={{ src: 'https://placehold.co/400x400', alt: 'Teste' }} color="yellow">
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident.
  </Card>

  <Card href="/" image={{ src: 'https://placehold.co/400x400', alt: 'Teste' }} color="blue">
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident.
  </Card>

  <Card href="/" image={{ src: 'https://placehold.co/400x400', alt: 'Teste' }} color="pink">
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident.
  </Card>

  <Card href="/" image={{ src: 'https://placehold.co/400x400', alt: 'Teste' }} color="yellow">
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident.
  </Card>

  <Card href="/" image={{ src: 'https://placehold.co/400x400', alt: 'Teste' }} color="blue">
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident.
  </Card>

  <Card href="/" image={{ src: 'https://placehold.co/400x400', alt: 'Teste' }} color="pink">
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad
    nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
    Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla
    est proident.
  </Card>
</section>

<div class="divider mt-12 font-bold">Curiosidades do Projeto</div>

<section class="my-8 flex w-full gap-4 overflow-auto p-6 *:shrink-0">
  <Curiosity color="blue">
    <Icon icon="ph:book-fill" slot="icon" />

    O Faísca reúne professores e alunos do Ensino Básico e Superior. Nosso objetivo central é
    popularizar a ciência através de projetos de pesquisa interdisciplinares.
  </Curiosity>

  <Curiosity color="pink">
    <Icon icon="mdi:pencil" slot="icon" />

    O Faísca Científica é um projeto de extensão que nasceu no Instituto de Estudos da Linguagem
    (IEL) da Unicamp em parceria com escolas estaduais de São Paulo.
  </Curiosity>

  <Curiosity color="yellow">
    <Icon icon="ri:scissors-fill" slot="icon" />

    Em sua primeira edição, o Faísca reuniu 480 alunos do Ensino Médio, os quais receberam tutoria
    acadêmica de alunos de graduação e pós-graduação do IEL.
  </Curiosity>
</section>
