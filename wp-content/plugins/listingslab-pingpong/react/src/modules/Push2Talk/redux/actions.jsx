import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
	getFStore,
} from '../../../'
import axios from 'axios'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import parseUa from 'ua-parser-js'

export const error = createAction(`P2T/ERROR`)
export const visitor = createAction(`P2T/VISITOR`)
export const feedback = createAction(`P2T/FEEDBACK`)
export const feedbackShow = createAction(`P2T/FEEDBACK/SHOW`)
export const asynching = createAction(`P2T/ASYNCHING`)
export const ipgeoFetched = createAction(`P2T/IPGEO/FETCHED`)
export const ipgeo = createAction(`P2T/IPGEO`)
export const connected = createAction(`P2T/CONNECTED`)
export const visitorId = createAction(`P2T/VISITOR/ID`)
export const sourceOfTruth = createAction(`P2T/SOURCEOFTRUTH`)
export const onConnected = createAction(`P2T/ONCONNECTED`)
export const pathname = createAction(`P2T/PATHNAME`)
export const pageTitle = createAction(`P2T/PAGETITLE`)

export const updatePathname = () => {
	const store = getStore()
	const { p2T } = store.getState()
	const { 
		pathname,
	} = p2T
	if ( !pathname ){
		const currentPathname = document.location.pathname
		store.dispatch({type: `P2T/PATHNAME`, pathname: currentPathname })
		updateSourceOfTruth(`pathname`, currentPathname)
		updateSourceOfTruth(`pageTitle`, document.title)
	}
	return true
}

export const agreeGDPR = () => {
	updateSourceOfTruth(`gdpr`, true)
	return true
}

export const onConnect = () => {
	let newSourceOfTruth
	const store = getStore()
	const db = getFStore()
	const { p2T } = store.getState()
	const { 
		sourceOfTruth,
		visitor,
		visitorId,
	} = p2T
	newSourceOfTruth = {
		...sourceOfTruth,
		...visitor,
		updated: Date.now(),
	}
	db.collection(`visitors` ).doc( visitorId ).set( newSourceOfTruth, { merge: true } )
			.then(() => {
				return true
			})
			.catch((error) => {
			    store.dispatch({type: `P2T/ERROR`, error})
				console.log ('error', error)
				showFeedback({
					status: `warning`,
					message: error.toString(),
				})
				return false
			})
	store.dispatch( {type: `P2T/ONCONNECTED`, onConnected: true } )
	return true
}

export const updateSourceOfTruth = (key, newValue) => {
	let shouldUpdate = false
	let newSourceOfTruth
	const { p2T } = getStore().getState()
	const { 
		sourceOfTruth,
		visitorId,
	} = p2T
	const oldValue = sourceOfTruth[key]
	if (oldValue !== newValue){
		shouldUpdate = true
	}
	if (shouldUpdate){
		newSourceOfTruth ={
			...sourceOfTruth,
			[key]: newValue
		}
		let shouldNotify = false
		if( key === `gdpr` ){
			shouldNotify = {
				status: `success`,
				message: `Thank you`,
			}
		}
		const store = getStore()
		const db = getFStore()
		db.collection(`visitors` ).doc( visitorId ).set(newSourceOfTruth, { merge: true })
			.then(() => {
				if (shouldNotify){
					showFeedback({
						status: shouldNotify.status,
						message: shouldNotify.message,
					})
				}
				return true
			})
			.catch((error) => {
			    store.dispatch({type: `P2T/ERROR`, error})
				console.log ('error', error)
				showFeedback({
					status: `warning`,
					message: error.toString(),
				})
				return false
			})
	}
	return false
}

export const subscribeVisitorId = visitorId => { 
	const db = getFStore()
	const store = getStore()
	db.collection(`visitors` ).doc( visitorId )
		.onSnapshot((doc) => {
			store.dispatch( {type: `P2T/CONNECTED`, connected: true } )
			store.dispatch( {type: `P2T/SOURCEOFTRUTH`, sourceOfTruth: doc.data() } )
	    })
}

export const fetchVisitorId = fingerprint => { 
	const endpoint = `${process.env.REACT_APP_LISTINGSLAB_API}/visitor/getid`
	const store = getStore()
	store.dispatch( {type: `P2T/ASYNCHING`, asynching: true } )
	axios.post( endpoint, {
		fingerprint,
		hostname: window.location.hostname,
	})
		.then( function( response ) {
			store.dispatch( {type: `P2T/VISITOR/ID`, visitorId: response.data.response.data.id } )
			return true
		})
		.catch(function( error ) {
			store.dispatch({type: `P2T/ERROR`, error})
			console.log ('error', error)
			showFeedback({
				status: `warning`,
				message: error.toString(),
			})
			return false
		})

	return true
}

export const initP2T = () => { 
	fingerprint()
	const endpoint = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_API_IPGEO}`
	const store = getStore()
	store.dispatch( {type: `P2T/ASYNCHING`, asynching: true } )
	axios.get( endpoint )
		.then( function( response ) {
			const ipgeo = response.data
			store.dispatch( {type: `P2T/IPGEO`, ipgeo } )
			store.dispatch( {type: `P2T/ASYNCHING`, asynching: false } )
			store.dispatch( {type: `P2T/IPGEO/FETCHED`, ipgeoFetched: true } ) 
			updateVisitor(`hostname`, window.location.hostname)
			updateVisitor(`callingCode`, ipgeo.calling_code)
			updateVisitor(`city`, ipgeo.city)
			updateVisitor(`continentCode`, ipgeo.continent_code)
			updateVisitor(`continentName`, ipgeo.continent_name)
			updateVisitor(`countryName`, ipgeo.country_name)
			updateVisitor(`countryCapital`, ipgeo.country_capital)
			updateVisitor(`countryCode2`, ipgeo.country_code2)
			updateVisitor(`countryCode3`, ipgeo.country_code3)
			updateVisitor(`countryTld`, ipgeo.country_tld)
			updateVisitor(`currencyCode`, ipgeo.currency ? ipgeo.currency.code : null)
			updateVisitor(`currencyName`, ipgeo.currency ? ipgeo.currency.name : null)
			updateVisitor(`currencySymbol`, ipgeo.currency ? ipgeo.currency.symbol : null)
			updateVisitor(`district`, ipgeo.district)
			updateVisitor(`geonameId`, ipgeo.geoname_id)
			updateVisitor(`ip`, ipgeo.ip)
			updateVisitor(`isEu`, ipgeo.is_eu)
			updateVisitor(`isp`, ipgeo.isp)
			updateVisitor(`languages`, ipgeo.languages)
			updateVisitor(`lat`, ipgeo.latitude)
			updateVisitor(`lng`, ipgeo.longitude)
			updateVisitor(`organization`, ipgeo.organization)
			updateVisitor(`stateProv`, ipgeo.state_prov)
			updateVisitor(`timeZone`, ipgeo.time_zone ? ipgeo.time_zone.name : null )
			updateVisitor(`zipcode`, ipgeo.zipcode)
			return true
		})
		.catch(function( error ) {
			store.dispatch({type: `P2T/ERROR`, error})
			store.dispatch( {type: `P2T/ASYNCHING`, asynching: false } )
			store.dispatch( {type: `P2T/IPGEO/FETCHED`, ipgeoFetched: true } )
			console.log ('error', error)
			showFeedback({
				status: `warning`,
				message: error.toString(),
			})
			return false
		})
	return true
}

export const fingerprint = () => {
	const ua = parseUa()
	updateVisitor(`device`, ua.device.type ? `${ ua.device.vendor } ${ua.device.model}` : `desktop` )
	updateVisitor(`osName`, ua.os.name)
	updateVisitor(`osVersion`, ua.os.version)
	updateVisitor(`browserName`, ua.browser.name)
	updateVisitor(`browserVersion`, ua.browser.version)
	updateVisitor(`browserMajor`, ua.browser.major)
	FingerprintJS.load().then(fp => {
	      fp.get().then(result => {
	      	updateVisitor(`fingerprint`, result.visitorId )
	      })
	    })
	return true
}

export const updateVisitor = (key, value) => {
	const store = getStore()
	let visitor = store.getState().p2T.visitor
	visitor = {
		...visitor,
		[key]: value,
	}
	store.dispatch({type: `P2T/VISITOR`, visitor })
	return true
}

export const closeFeedback = () => {
	const store = getStore()
	store.dispatch({ type: `P2T/FEEDBACK/SHOW`, feedbackShow: false })
	return true
}

export const showFeedback = feedback => {
	const store = getStore()
	store.dispatch({ type: `P2T/FEEDBACK/SHOW`, feedbackShow: true })
	store.dispatch({ type: `P2T/FEEDBACK`, feedback })
	return true
}
