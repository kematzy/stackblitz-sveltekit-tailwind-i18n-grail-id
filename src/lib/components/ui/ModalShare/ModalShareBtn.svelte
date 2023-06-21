<script>
	import { shareModal } from './index.js'
	const { triggerAttrs, open } = shareModal

	function openshareModal() {
		console.log('ModalshareBtn => openshareModal =>', $open)
		$open = true
	}
</script>

<div id="btn-modal-share">
  <button {...$triggerAttrs} on:click="{openshareModal}" disabled={$open}>
    Share
  </button>
</div>
