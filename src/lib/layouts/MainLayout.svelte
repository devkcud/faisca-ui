<script lang="ts">
  import './app.css';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main class="relative mx-auto h-full max-w-[1200px] flex-1 p-4">
  <slot />
</main>

<Footer />
