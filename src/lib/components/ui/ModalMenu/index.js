import { createModal } from '@grail-ui/svelte'
import ModalMenu from './ModalMenu.svelte'
import ModalMenuBtn from './ModalMenuBtn.svelte'

// this modal is specifically for the Menu
const menuModal = createModal({
	open: false,
	portal: '#page-wrapper',
	dismissible: true,
	keyboardDismissible: true
})

export { menuModal, ModalMenu, ModalMenuBtn }
