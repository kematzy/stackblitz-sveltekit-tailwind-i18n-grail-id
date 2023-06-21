<script>
	import { ModalMenuBtn } from '$lib/components/ui/ModalMenu/'
  import { ModalShareBtn } from '$lib/components/ui/ModalShare/'
  import ThemeSwitch from '$lib/components/ThemeSwitch.svelte'
  import LangSwitch from '$lib/components/LangSwitch.svelte'

</script>

<div id="navbar">
  <ThemeSwitch />
  <LangSwitch />
	<ModalShareBtn />
	<ModalMenuBtn />
</div>
