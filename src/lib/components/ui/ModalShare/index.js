import { createModal } from '@grail-ui/svelte'
import BtnShare from './BtnShare.svelte'
import ModalShare from './ModalShare.svelte'
import ModalShareBtn from './ModalShareBtn.svelte'

// this modal is specifically for the Share Modal
const shareModal = createModal({
	open: false,
	portal: '#page-wrapper',
	dismissible: true,
	keyboardDismissible: true
})

const shareButtonsConfigs = [
	{
		type: 'facebook',
		icon: 'uil:facebook',
		url: 'https://www.facebook.com/sharer.php?u={url}',
		title: 'tell your friends & family about this website'
	},
	{
		type: 'instagram',
		icon: 'uil:instagram',
		url: 'https://www.instagram.com/',
		title: 'tell your friends & family about this website'
	},
	{
		type: 'twitter',
		icon: 'uil:twitter',
		url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
		title: 'tweet about this website'
	},
	{
		type: 'pinterest',
		icon: 'simple-icons:pinterest',
		url: 'https://pinterest.com/pin/create/link/?url={url}&description={title}',
		title: 'Pin this website'
	},
	{
		type: 'linkedin',
		icon: 'uil:linkedin',
		url: 'https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}',
		// url: 'https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={title}&source={url}',
		title: 'Share this website on LinkedIn'
	},
	{
		type: 'pocket',
		icon: 'fa6-brands:get-pocket',
		url: 'https://getpocket.com/edit?url={url}&title={title}',
		title: 'save this website on Pocket'
	},
	{
		type: 'telegram',
		icon: 'uil:telegram',
		url: 'https://t.me/share/url?url={url}&text={title}',
		title: 'Share this website with your friends & family on Telegram'
	},
	{
		type: 'whatsapp',
		icon: 'uil:whatsapp-alt',
		url: 'whatsapp://send?text={url}',
		title: 'Share this website with your friends & family with WhatsApp'
	},
	{
		type: 'envelope',
		icon: 'uil:envelope',
		url: 'mailto:?subject=Website:%20{title}&body=Check%20out%20this%20website:%20%20{url}',
		title: 'Send an email to your friends about this website'
	}
	// {
	// 	 type: 'print',
	// 	icon: 'fa-solid:print',
	// 	url: 'print', // not used
	// 	title: 'Print a printer-friendly version of this page'
	// }
]

export { BtnShare, shareModal, ModalShare, ModalShareBtn, shareButtonsConfigs }
