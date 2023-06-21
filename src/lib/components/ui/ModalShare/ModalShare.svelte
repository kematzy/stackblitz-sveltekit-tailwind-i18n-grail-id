<!-- @format -->
<script>
	import { shareModal, shareButtonsConfigs, BtnShare } from './index'
	import { slide } from 'svelte/transition'

	const { useModal, modalAttrs, titleAttrs, open } = shareModal

	function closeModal() {
		console.log('ModalShare -> closeModal()', $open)
		$open = false
	}
</script>

{#if $open}
	<div
		use:useModal
		{...$modalAttrs}
		transition:slide="{{ axis: 'y', duration: 200 }}"
		class="absolute top-0 left-0 right-0 w-full h-screen md:h-max z-20 bg-bkgr-s1 shadow-lg">
		<!-- .modal-inner -->
		<div class="modal-inner h-full">
			<!-- .modal-header -->
			<div class="flex items-end justify-between mt-20 p-4 border-b border-fg/10">
				<div {...$titleAttrs} class="text-lg font-medium text-fg/50">
					<slot name="title">Share Our Website</slot>
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
					<div class="py-4 w-full mx-auto md:w-2/3 lg:w-4/5 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 items-center justify-center">
            {#each shareButtonsConfigs as btn}
              <BtnShare opts={btn} />
            {/each}
          </div>
				</slot>
			</div>
			<!-- /.modal-contents -->

			<!-- .modal-footer -->
			<div class="flex items-center justify-start p-4 border-t border-fg/10 text-fg/40">
				<slot name="footer">
					<p>Share Modal footer</p>
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
