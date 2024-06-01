<script lang="ts">
  export let href: string;
  export let image: {
    src: string;
    alt: string;
  };

  export let color: 'yellow' | 'pink' | 'blue' = 'blue';
</script>

<article class="flex w-full max-w-80 flex-col rounded-xl p-4 shadow-lg shadow-black/10">
  <figure class="mx-auto mb-4 w-full">
    <img src={image.src} alt={image.alt} class="h-52 w-full rounded-xl object-cover" />
  </figure>

  <p class="line-clamp-3 h-[72px] text-black">
    <slot />
  </p>

  <a
    {href}
    class="btn btn-accent mt-4 h-8 min-h-8 w-fit border-none uppercase text-white shadow-none"
    class:yellow={color === 'yellow'}
    class:pink={color === 'pink'}
    class:blue={color === 'blue'}
  >
    Saiba Mais
  </a>
</article>

<style lang="postcss">
  .yellow {
    @apply bg-accent;
  }

  .pink {
    @apply bg-secondary;
  }

  .blue {
    @apply bg-primary;
  }
</style>
