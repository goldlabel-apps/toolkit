import { createAction } from '@reduxjs/toolkit'
import { getStore, getHistory } from '../../'

export const error = createAction(`APP/ERROR`)
export const appMenuOpen = createAction(`APP/APPMENUOPEN`)
export const fullScreen = createAction(`APP/FULLSCREEN`)
export const themeMode = createAction(`APP/THEMEMODE`)
export const GDPROpen = createAction(`APP/GDPR/OPEN`)
export const fetching = createAction(`APP/FETCHING`)
export const userLocale = createAction(`APP/USERLOCALE`)
export const showWordpressSearch = createAction(`APP/WPSEARCH`)
export const showWordpressAdminLinks = createAction(`APP/WPADMIN`)
export const title = createAction(`APP/TITLE`)
export const showVisitor = createAction(`APP/VISITOR`)
export const overlay = createAction(`APP/OVERLAY`)

export const goHome = () => {
	const store = getStore()
	store.dispatch({type: `APP/OVERLAY`, overlay: true })
	window.open( `/`, `_self`)
	return true
}

export const toggleVisitor = bool => {
	const store = getStore()
	store.dispatch({type: `APP/VISITOR`, showVisitor: bool })
	return true
}

export const toggleWordpressAdminLinks = bool => {
	const store = getStore()
	store.dispatch({type: `APP/WPADMIN`, showWordpressAdminLinks: bool })
	return true
}

export const setTitle = title => {
	const store = getStore()
	store.dispatch({type: `APP/TITLE`, title })
	return true
}

export const toggleWordpressSearch = bool => {
	const store = getStore()
	store.dispatch({type: `APP/WPSEARCH`, showWordpressSearch: bool })
	return true
}

export const setUserLocale = userLocale => {
	// console.log ('settingUserLocale', userLocale)
	const store = getStore()
	store.dispatch({type: `APP/USERLOCALE`, userLocale })
	return true
}

export const toggleFetching = bool => {
	const store = getStore()
	store.dispatch({type: `APP/FETCHING`, fetching: bool })
	return true
}

export const toggleGDPROpen = bool => {
	const store = getStore()
	store.dispatch({type: `APP/GDPR/OPEN`, GDPROpen: bool })
	return true
}

export const toggleThemeMode = mode => {
	const store = getStore()
	let newMode = `dark`
	if (mode === `dark`) newMode = `light`
	store.dispatch({type: `APP/THEMEMODE`, themeMode: newMode })
	return true
}

export const toggleFullScreen = bool => {
	const store = getStore()
	store.dispatch({type: `APP/FULLSCREEN`, fullScreen: bool })
	return true
}

export const toggleAppMenu = bool => {
	const store = getStore()
	store.dispatch({type: `APP/APPMENUOPEN`, appMenuOpen: bool })
	return true
}

export const changePath = path => {
	const store = getStore()
	const history = getHistory()
	store.dispatch({type: `APP/PATH`, path })
	history.push(path)
	window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return true
}