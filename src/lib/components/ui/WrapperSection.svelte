<script>
  export let id = ''
  export let inner = 'py-8 px-6'
</script>

<section {id} {...$$restProps}>
	<div class="section-wrapper">
		<div class="inner {inner}">
      <slot />
		</div>
	</div>
</section>