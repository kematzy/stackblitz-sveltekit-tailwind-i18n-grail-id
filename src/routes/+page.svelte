<script>
  import { _, locale, locales } from 'svelte-i18n'
  import WrapperSection from '$lib/components/ui/WrapperSection.svelte'
</script>

<WrapperSection id="hero">
  <h1>{$_('pages.home.h1')}</h1>

  <h2>{$_('pages.home.subtitle')}</h2>

  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

  <p>Elit dolore commodo eiusmod do fugiat sunt et do qui. Excepteur dolore cupidatat velit minim adipisicing. Aliquip aliquip eu excepteur nulla do eiusmod duis aute cupidatat voluptate culpa.</p>

  <p>Eu et sit culpa ad exercitation sit mollit culpa duis id ut est pariatur. Duis ea minim cillum eu laborum. Ut ut ex esse culpa ex proident. Deserunt deserunt non commodo sint laboris.</p>


</WrapperSection>

<WrapperSection id="cta" class="h-[30rem] bg-bkgr-s1">
  <h3>CTA SECTION</h3>
</WrapperSection>

<WrapperSection id="about" class="bg-bkgr-t1">
  <h3>ABOUT SECTION</h3>

  <p>Ipsum eu ea pariatur voluptate anim Lorem cupidatat nisi adipisicing ad et aute do occaecat. Ex sunt voluptate deserunt reprehenderit reprehenderit laborum ullamco eiusmod minim duis veniam. Culpa ullamco irure laborum occaecat excepteur do mollit consectetur eiusmod.</p>

  <p>Est et amet deserunt non adipisicing sunt voluptate Lorem. Nulla velit ex proident ut Lorem ad deserunt fugiat. Aliqua excepteur proident voluptate eiusmod occaecat excepteur magna. Tempor enim non irure excepteur Lorem cillum. Enim veniam Lorem velit magna velit aliqua aliqua consectetur laborum laboris.</p>
</WrapperSection>