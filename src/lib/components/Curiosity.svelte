<script lang="ts">
  export let color: 'yellow' | 'pink' | 'blue' = 'blue';
</script>

<article class="relative w-full max-w-96 rounded-xl bg-white p-4 shadow-lg shadow-black/10">
  <!-- Kinda hacky, but design wants it that way -->

  {#if color === 'blue'}
    <div
      class="absolute inset-x-0 -top-6 text-primary *:mx-auto *:size-14 *:rounded-full *:border *:border-primary *:bg-white *:p-2 *:shadow-lg *:shadow-black/20"
    >
      <slot name="icon" />
    </div>
  {:else if color === 'yellow'}
    <div
      class="absolute inset-x-0 -top-6 text-accent *:mx-auto *:size-14 *:rounded-full *:border *:border-accent *:bg-white *:p-2 *:shadow-lg *:shadow-black/20"
    >
      <slot name="icon" />
    </div>
  {:else if color === 'pink'}
    <div
      class="absolute inset-x-0 -top-6 text-secondary *:mx-auto *:size-14 *:rounded-full *:border *:border-secondary *:bg-white *:p-2 *:shadow-lg *:shadow-black/20"
    >
      <slot name="icon" />
    </div>
  {/if}

  <p class="pt-6 text-center">
    <slot />
  </p>
</article>
