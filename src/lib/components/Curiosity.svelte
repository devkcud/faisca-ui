<script lang="ts">
  export let color: 'yellow' | 'pink' | 'blue' = 'blue';
</script>

<article class="relative w-full max-w-96 rounded-xl bg-white p-4 shadow-lg shadow-black/10">
  <div
    class="absolute inset-x-0 -top-6 *:mx-auto *:size-12 *:rounded-full *:bg-white *:p-2 *:shadow-lg *:shadow-black/20"
    class:yellow={color === 'yellow'}
    class:pink={color === 'pink'}
    class:blue={color === 'blue'}
  >
    <slot name="icon" />
  </div>

  <p class="pt-4 text-center">
    <slot />
  </p>
</article>

<style lang="postcss">
  .yellow {
    @apply text-accent;
  }

  .yellow > * {
    @apply border border-accent;
  }

  .pink {
    @apply text-secondary;
  }

  .pink > * {
    @apply border border-secondary;
  }

  .blue {
    @apply text-primary;
  }

  .blue > * {
    @apply border border-primary;
  }
</style>
