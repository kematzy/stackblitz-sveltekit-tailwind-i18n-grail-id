<!-- @format -->
<script>
	import { menuModal } from './index'
	import { slide } from 'svelte/transition'

	const { useModal, modalAttrs, titleAttrs, open } = menuModal

	function closeModal() {
		console.log('ModalMenu -> closeModal()', $open)
		$open = false
	}
</script>

{#if $open}
	<div
		use:useModal
		{...$modalAttrs}
		transition:slide="{{ axis: 'y', duration: 200 }}"
		class="absolute top-0 left-0 right-0 w-full h-screen z-20 bg-bkgr shadow">
		<!-- .modal-inner -->
		<div class="modal-inner h-full">
			<!-- .modal-header -->
			<div class="flex items-start justify-between mt-20 p-4 border-b border-gray-200/20">
				<div {...$titleAttrs} class="text-lg font-medium text-fg">
					<slot name="title">Menu Modal Title</slot>
				</div>

				<div>
					<slot name="btn-close">
						<!-- <button type="button" on:click="{closeModal}" class="modal-btn-close"> Close </button> -->
					</slot>
				</div>
			</div>
			<!-- /.modal-header -->

			<!-- .modal-contents -->
			<div class="flex flex-col p-6">
				<slot name="contents">
					<p>Menu Modal contents</p>
				</slot>
			</div>
			<!-- /.modal-contents -->

			<!-- .modal-footer -->
			<div class="flex items-center justify-start p-4 border-t border-gray-200/20 text-fg">
				<slot name="footer">
					<p>Menu Modal footer</p>
				</slot>
			</div>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-inner -->
	</div>
{/if}

<style lang="postcss">
	.modal-inner {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		grid-gap: 0;
	}

	.modal-btn-close {
		@apply rounded border border-gray-200/10 px-2 py-1 text-sm text-fg hover:bg-primary hover:text-fg;
	}
</style>
