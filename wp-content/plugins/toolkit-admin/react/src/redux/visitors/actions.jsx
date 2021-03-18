import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
	getFStore,
} from '../../'

export const error = createAction( `VISITORS/ERROR` )
export const visitorOpen = createAction( `VISITORS/VISITOROPEN` )
export const selectedId = createAction( `VISITORS/SELECTEDID` )
export const subscribing = createAction( `VISITORS/SUBSCRIBING` )
export const subscribed = createAction( `VISITORS/SUBSCRIBED` )
export const visitors = createAction( `VISITORS` )
export const sites = createAction( `VISITORS/SITES` )
export const siteFilter = createAction( `VISITORS/SITEFILTER` )

export const setSiteFilter = siteFilter => { 
	const store = getStore()
	store.dispatch( {type: `VISITORS/SITEFILTER`, siteFilter } )
}

export const getSites = () => { 
	const db = getFStore()
	const store = getStore()
	db.collection( `sites` )
		.orderBy( `name` )
		.get()
		.then(( snap ) => {
			const sites = [];
	        snap.forEach((site) => {
	            sites.push({
	            	id: site.id,
	            	...site.data(),
	            })
	        })
			store.dispatch( {type: `VISITORS/SITES`, sites } )
			return true
	    })
}

export const deleteVisitor = id => {
	const db = getFStore()
	const store = getStore()
	db.collection( `visitors` ).doc(id)
		.delete()
		.then(() => {
	    	toggleVisitor(false, null)
	    	return true
		})
		.catch( ( error ) => {
			store.dispatch({type: `VISITORS/ERROR`, error })
			return false
		})
}

export const toggleVisitor = ( bool, selectedId ) => {
	const store = getStore()
	store.dispatch({type: `VISITORS/VISITOROPEN`, visitorOpen: bool })
	store.dispatch({type: `VISITORS/SELECTEDID`, selectedId: selectedId })
	return true
}

export const subscribeVisitors = () => { 
	const db = getFStore()
	const store = getStore()
	store.dispatch( { type: `VISITORS/SUBSCRIBING`, subscribing: true } )
	db.collection( `visitors` )
		.orderBy( `updated`, `desc` )
		.onSnapshot((querySnapshot) => {
			const visitors = [];
	        querySnapshot.forEach((fingerprint) => {
	            visitors.push({
	            	id: fingerprint.id,
	            	...fingerprint.data(),
	            })
	        })
			store.dispatch( {type: `VISITORS/SUBSCRIBED`, subscribed: true } )
			store.dispatch( { type: `VISITORS/SUBSCRIBING`, subscribing: false } )
			store.dispatch( {type: `VISITORS`, visitors } )
			return true
	    })
}



