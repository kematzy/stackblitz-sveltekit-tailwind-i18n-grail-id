<script>
	import { menuModal } from './index.js'
	const { triggerAttrs, open } = menuModal

	function openMenuModal() {
		console.log('ModalMenuBtn => openMenuModal =>', $open)
		$open = true
	}
</script>

<div id="btn-modal-menu" class="mr-2">
	{#if $open}
		<button {...$triggerAttrs} on:click="{() => ($open = false)}">
    <!-- <iconify-icon class="text-xl text-fg/50" icon="uil:times"></iconify-icon> -->
    Close
    </button>
	{:else}
		<button {...$triggerAttrs} on:click="{openMenuModal}">
    <!-- <iconify-icon class="text-base leading-none text-fg/50" icon="uil:bars"></iconify-icon> -->
    Menu
    </button>
	{/if}
</div>
