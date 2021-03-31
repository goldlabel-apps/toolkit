import { createAction } from '@reduxjs/toolkit'
import { getStore, getFStore } from '../../'

export const error = createAction(`PINGPONG/ERROR`)
export const tings = createAction(`PINGPONG/TINGS`)
export const subscribedTings = createAction(`PINGPONG/TINGS/SUBSCRIBED`)
export const subscribingTings = createAction(`PINGPONG/TINGS/SUBSCRIBING`)
export const showHost = createAction(`PINGPONG/TINGS/SHOWHOST`)
export const showId = createAction(`PINGPONG/TINGS/SHOWID`)
export const showBrowser = createAction(`PINGPONG/TINGS/SHOWBROWSER`)

export const toggleShowBrowser = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/TINGS/SHOWBROWSER`, showBrowser: bool })
	return true
}

export const toggleShowHost = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/TINGS/SHOWHOST`, showHost: bool })
	return true
}

export const toggleShowId = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/TINGS/SHOWID`, showId: bool })
	return true
}

export const subscribeTings = () => { 
	const store = getStore()
	store.dispatch( {type: `PINGPONG/TINGS/SUBSCRIBING`, subscribingTings: true } )
	const db = getFStore()
	db.collection( `pingpong` )
		.orderBy( `updated`, `desc` )
		.onSnapshot((querySnapshot) => {
			
			const tings = []
	        querySnapshot.forEach( data => {
	            tings.push({
	            	id: data.id,
	            	...data.data(),
	            })
	        })
			store.dispatch( {type: `PINGPONG/TINGS`, tings } )
			store.dispatch( {type: `PINGPONG/TINGS/SUBSCRIBED`, subscribedTings: true } )
			store.dispatch( {type: `PINGPONG/TINGS/SUBSCRIBING`, subscribingTings: false } )
			return true
	    })
}

export const throwError = error => { 
	const store = getStore()
	store.dispatch({type: `PINGPONG/OVERLAY`, error})
	return true
}
