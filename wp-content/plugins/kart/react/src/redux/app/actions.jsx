import { createAction } from '@reduxjs/toolkit'
import { getStore, getHistory } from '../../'

export const error = createAction(`APP/ERROR`)
export const fetching = createAction(`APP/FETCHING`)
export const locale = createAction(`APP/LOCALE`)
export const overlay = createAction(`APP/OVERLAY`)
export const debugga = createAction(`APP/DEBUGGA`)
export const kart = createAction(`APP/KART`)
export const strength = createAction(`APP/STRENGTH`)

export const setStrength = strength => {
	const store = getStore()
	store.dispatch({type: `APP/STRENGTH`, strength })
	return true
}


export const kartDone = bool => {
	const store = getStore()
	store.dispatch({type: `APP/KART`, kart: bool })
	return true
}


export const toggleOverlay = bool => {
	const store = getStore()
	store.dispatch({type: `APP/OVERLAY`, overlay: bool })
	return true
}

export const toggleDebugga = bool => {
	const store = getStore()
	store.dispatch({type: `APP/DEBUGGA`, debugga: bool })
	return true
}

export const goHome = () => {
	const store = getStore()
	store.dispatch({type: `APP/OVERLAY`, overlay: true })
	window.open( `/`, `_self`)
	return true
}

export const setLocale = locale => {
	const store = getStore()
	store.dispatch({type: `APP/LOCALE`, locale })
	return true
}

export const toggleFetching = bool => {
	const store = getStore()
	store.dispatch({type: `APP/FETCHING`, fetching: bool })
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