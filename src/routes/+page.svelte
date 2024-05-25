<script lang="ts">
  import { Carrousel } from '$lib/components';

  let images: [string, string][] = [
    ['/banners/banner1.png', 'Test'],
    ['/banners/banner2.png', 'Test'],
    ['/banners/banner1.png', 'Test'],
    ['/banners/banner2.png', 'Test'],
    ['/banners/banner1.png', 'Test'],
    ['/banners/banner2.png', 'Test']
  ];
</script>

<Carrousel {images}></Carrousel>
