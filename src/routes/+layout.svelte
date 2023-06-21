<script>
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'

	import HeaderLogo from '$lib/components/ui/HeaderLogo.svelte'
	import Navbar from '$lib/components/ui/Navbar.svelte'

	import { ModalMenu } from '$lib/components/ui/ModalMenu/'
	import { ModalShare } from '$lib/components/ui/ModalShare/'

  import '../app.css'
	
	onMount(() => {
		themeChange(false)
	})
</script>


<main id="page-wrapper">
	<Navbar />
	<HeaderLogo />

  <slot />

	<ModalShare />
	<ModalMenu />
</main>
