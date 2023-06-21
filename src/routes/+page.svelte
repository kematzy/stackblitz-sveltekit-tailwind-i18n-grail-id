<script>
  import { _, locale, locales } from 'svelte-i18n'
  import WrapperSection from '$lib/components/ui/WrapperSection.svelte'
</script>

<WrapperSection id="hero" inner="p-0">
  <picture>
    <source media="(min-width: 1536px)" srcset="https://picsum.photos/id/58/1920/1080 1x"> 
    <source media="(min-width: 1280px)" srcset="https://picsum.photos/id/58/1600/1080 1x"> 
    <source media="(min-width: 1024px)" srcset="https://picsum.photos/id/58/860/1280 1x"> 
    <!-- <source media="(min-width: 768px)" srcset="/photos/lg/IMG_2503.webp, /photos/lg/IMG_2503.jpg 1x">  -->
    <!-- <source media="(min-width: 640px)" srcset="/photos/md/IMG_2503.webp, /photos/md/IMG_2503.jpg 1x">  -->
  
    <img role="presentation" src="https://picsum.photos/id/58/600/900" alt="LoremPicsum #58">
  </picture>
  <div class="picture-overlay"></div>

  <div id="hero-contents">
    <h1 class="hero-title">
      {$_('pages.home.h1')}
    </h1>
    <h2 class="hero-subheadline">
      {$_('pages.home.subtitle')}
    </h2> 
  </div>
</WrapperSection>

<WrapperSection id="cta" class="w-full bg-bkgr" inner="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-12 pb-16">
  <div>
    <h3 class="text-3xl">Overwhelmed by choices?</h3> 
    <p>Ipsum eu ea pariatur voluptate anim Lorem cupidatat nisi adipisicing ad et aute do occaecat. Ex sunt voluptate?</p>
  </div>
  
  <div>
    <h3>We understand that …</h3> 
    
    <p>Ipsum eu ea pariatur voluptate anim Lorem cupidatat nisi adipisicing ad et aute do occaecat. Ex sunt voluptate deserunt reprehenderit.</p>
    <p>reprehenderit laborum ullamco eiusmod minim duis veniam. Culpa ullamco irure laborum occaecat excepteur do mollit consectetur eiusmod.</p>
  </div> 
  
  <div>
    <h3>Reduce your stress!</h3> 
    
    <p>Ipsum eu ea pariatur voluptate anim Lorem cupidatat nisi adipisicing ad et aute do occaecat. Ex sunt voluptate deserunt reprehenderit reprehenderit laborum ullamco eiusmod consectetur eiusmod.</p>
  </div>
</WrapperSection>

<WrapperSection id="about" class="bg-bkgr-s1" inner="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
  <div class="flex items-center justify-center py-12 md:col-span-2 lg:col-span-3">
    <h3 class="text-2xl uppercase text-cta">About This solution</h3>
  </div> 
  
  <div class="flex flex-col px-8 pt-8 pb-2 md:p-8">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam iste minus quam hic laudantium ipsa
					blanditiis totam unde quia, asperiores non sint, fuga nobis! At voluptates qui quam incidunt!</p> 
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam iste minus quam hic laudantium ipsa
					blanditiis totam unde quia, asperiores non sint, fuga nobis! At voluptates qui quam incidunt!</p> <p>Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Enim ipsam iste minus quam hic laudantium ipsa blanditiis totam
					unde quia, asperiores non sint, fuga nobis! At voluptates qui quam incidunt!</p>
  </div> 
          
  <div class="flex flex-col px-8 pt-8 pb-2 md:p-8">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam iste minus quam hic laudantium ipsa
					blanditiis totam unde quia, asperiores non sint, fuga nobis! At voluptates qui quam incidunt!</p> <blockquote class="text-xl mb-6 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam iste minus quam hic laudantium.</blockquote> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam iste minus quam hic laudantium ipsa
					blanditiis totam unde quia, asperiores non sint, fuga nobis! At voluptates qui quam incidunt!</p></div> <div class="flex flex-col px-8 pt-2 pb-8 md:p-8"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam iste minus quam hic</p> <p>Laudantium ipsa
					blanditiis totam unde quia, asperiores non sint, fuga nobis! At voluptates qui quam incidunt! Enim ipsam iste
					minus quam hic laudantium ipsa
					quam incidunt!</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores non sint, fuga nobis! At voluptates qui quam incidunt!</p>
  </div>
</WrapperSection>