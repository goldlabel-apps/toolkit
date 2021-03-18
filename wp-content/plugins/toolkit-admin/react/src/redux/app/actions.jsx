import { createAction } from '@reduxjs/toolkit'
import { getStore, getHistory } from '../../'

export const error = createAction(`APP/ERROR`)
export const appMenuOpen = createAction(`APP/APPMENUOPEN`)
export const fullScreen = createAction(`APP/FULLSCREEN`)
export const themeMode = createAction(`APP/THEMEMODE`)

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