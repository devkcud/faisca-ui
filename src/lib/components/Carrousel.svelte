<script lang="ts">
  import { swipe } from 'svelte-gestures';

  export let images: [string, string][] = [];

  export let minHeight: string | number = 'initial';
  export let minWidth: string | number = 'initial';
  export let height: string | number = 'initial';
  export let width: string | number = 'initial';
  export let maxHeight: string | number = 'initial';
  export let maxWidth: string | number = 'initial';

  let currentIndex: number = 0;

  function next() {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  }

  function previous() {
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  }

  function handleSwipe(
    event: CustomEvent<{
      direction: 'top' | 'right' | 'bottom' | 'left';
      target: EventTarget;
    }>
  ) {
    switch (event.detail.direction) {
      case 'right':
        previous();
        break;
      case 'left':
        next();
        break;
      default:
        break;
    }
  }

  function handleProperty(property: string, value: any): string {
    if (!value) return '';
    if (isNaN(Number(value))) return `${property}: ${value}`;
    else return `${property}: ${value}px`;
  }
</script>

<div
  style={`${handleProperty('min-width', minWidth)}; ${handleProperty('width', width)}; ${handleProperty('max-width', maxWidth)}`}
>
  <section
    use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }}
    on:swipe={handleSwipe}
    class="relative overflow-hidden rounded-lg"
  >
    <div
      class="flex transition-transform duration-500"
      style={`transform: translateX(-${currentIndex * 100}%)`}
    >
      {#each images as image}
        <img
          src={image[0]}
          alt={image[1]}
          class="w-full flex-shrink-0 object-cover object-center"
          draggable={false}
          style={`${handleProperty('min-height', minHeight)}; ${handleProperty('height', height)}; ${handleProperty('max-height', maxHeight)}`}
        />
      {/each}
    </div>
  </section>

  <section class="mx-auto mt-4 flex w-fit gap-2">
    {#each Object.entries(images) as [id, _] (id)}
      <button
        class="cbtn"
        class:selected={Number(id) === currentIndex}
        on:click={() => (currentIndex = Number(id))}
      ></button>
    {/each}
  </section>
</div>

<style lang="postcss">
  .cbtn {
    @apply size-2 rounded-full transition-all;
  }

  .cbtn:not(.selected) {
    @apply bg-base-300;
  }

  .selected {
    @apply w-12 bg-tertiary;
  }
</style>
