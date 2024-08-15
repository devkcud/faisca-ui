<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import './app.css';
</script>

<Header />

<main class="relative mx-auto h-full max-w-[1200px] flex-1 p-4">
  <slot />
</main>

<Footer />
