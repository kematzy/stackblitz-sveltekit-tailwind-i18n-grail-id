<script>
	import { theme } from '$lib/stores.js'

	import { createMenu } from '@grail-ui/svelte';
	import { fade } from 'svelte/transition';

	const { useTrigger, triggerAttrs, useMenu, menuAttrs, itemAttrs, open } = createMenu({
		onSelect(id) {
			$theme = id;
			document.documentElement.setAttribute("data-theme", id);
			localStorage.setItem('theme', id)
		},
	})

  const themes = ['light', 'dark', 'system']

	// $: icon = 'ic:outline-wb-sunny'
	$: icon = $theme == 'system' ? 'uil:desktop' : $theme == 'light' ? 'uil:moon' : 'uil:sun'
</script>

<button type="button" class="btn-menu" use:useTrigger {...$triggerAttrs}>
	<iconify-icon class="text-base leading-none" {icon}></iconify-icon>
</button>

{#if $open}
	<ul transition:fade use:useMenu {...$menuAttrs} class="menu">
		<li class="menu-title"><span>Choose Theme</span></li>
		<li class="capitalize"{...$itemAttrs('light')}>Light</li>
		<li class="capitalize"{...$itemAttrs('dark')}>Dark</li>
		<li class="menu-divider">&nbsp;</li>
		<li class="capitalize"{...$itemAttrs('system')}>System</li>
	</ul>
{/if}
