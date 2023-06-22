<script>
  import { _, locale, locales } from 'svelte-i18n'

	import { createMenu } from '@grail-ui/svelte';
	import { fade } from 'svelte/transition';

	const { useTrigger, triggerAttrs, useMenu, menuAttrs, itemAttrs, open } = createMenu({
		onSelect(id) {
			$locale = id;
			localStorage.setItem('lang', id)
		},
	});
</script>

<button id="btn-i18n" type="button" class="btn-menu" use:useTrigger {...$triggerAttrs}>
	<iconify-icon class="text-base leading-none opacity-60 hover:opacity-100 hover:cursor-pointer" icon={$_('iconCircle')}></iconify-icon>
</button>

{#if $open}
	<ul transition:fade use:useMenu {...$menuAttrs} class="menu">
		<li class="menu-title">
			<span>Choose Language</span>
		</li>
		{#each $locales as l}
		<li {...$itemAttrs(l)}>{$_(`lang.${l}`)}</li>
		{/each}
	</ul>
{/if}
