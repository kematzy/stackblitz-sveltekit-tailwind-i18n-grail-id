<script>
	export let opts = {
		icon: '',
		title: ''
	}

	const print = () => {
		console.log('PRINT button was clicked')
		window.print()
	}

	const handleClick = () => {
		if (opts.url === 'print') {
			console.log('Printing only')
			window.print()
		} else {
			const furl = window.location.href
			const url = opts.url.replace('{url}', encodeURI(furl)).replace('{title}', encodeURI(document.title))
			window.open(url)
			// console.log('SOCIALBTN: opened type:', type)
			// console.log('SOCIALBTN: page URL:\n', furl)
			// console.log('SOCIALBTN: processed URL:\n', url)
			// console.log('SOCIALBTN: opened Full URL:\n', window)
			// console.log(window.location.href)
			// console.log(this.furl)
			// console.log('ShareBtn: ', url)
		}
	}
</script>

<button aria-label={opts.title} title={opts.title} class="btn-social" on:click={handleClick}>
  <iconify-icon class="m-4 text-fg/50 hover:text-primary hover:scale-150" icon="{opts.icon}"></iconify-icon>
</button>
