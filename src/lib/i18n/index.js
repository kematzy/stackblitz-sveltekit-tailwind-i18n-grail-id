import { browser } from '$app/environment'
import { getLocaleFromNavigator, init, register } from 'svelte-i18n'

const fallbackLocale = 'en'

register('en', () => import('./locales/en.json'))
register('ms', () => import('./locales/ms.json'))
register('zh', () => import('./locales/zh.json'))

const getCurrentLocale = () => {
	let locale

	if (browser) {
		// test for localStorage key first,
		locale = localStorage.getItem('lang') || getLocaleFromNavigator()
	}
	locale
}

init({
	fallbackLocale,
	initialLocale: browser ? getCurrentLocale() : fallbackLocale
	// initialLocale: browser ? getLocaleFromNavigator() : fallbackLocale
})
