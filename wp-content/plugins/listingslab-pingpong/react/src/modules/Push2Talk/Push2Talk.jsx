import React from 'react'
import { toggleGDPROpen } from '../../redux/app/actions'
import {
	initP2T,
	fetchVisitorId,
	subscribeVisitorId,
	onConnect,
	updatePathname,
} from './redux/actions'
import { useSelector } from 'react-redux'
import {    
	makeStyles,
} from '@material-ui/core/'
import { Feedback } from './components'

const useStyles = makeStyles(theme => ({ push2Talk: {} }))

export default function Push2Talk() {
	const classes = useStyles()
	const p2TSlice = useSelector(state => state.p2T)
 	React.useEffect(() => {
 		const { 
 			ipgeoFetched,
 			ipgeo,
 			asynching,
 			connected,
 			onConnected,
 			visitor,
 			visitorId,
 			error,
 			sourceOfTruth,
 			pathname,
 		} = p2TSlice

 		const { fingerprint } = visitor
 		if (!ipgeoFetched && !asynching && !ipgeo && !error ) initP2T ()
 		if ( ipgeoFetched && !asynching && fingerprint && !visitorId && !error ) fetchVisitorId( fingerprint ) 
 		if ( visitorId && !connected && !error ) subscribeVisitorId ( visitorId )
 		if ( connected && ipgeo && !onConnected ) onConnect ()
 		if ( sourceOfTruth ){
 			if (!sourceOfTruth.gdpr){
 				toggleGDPROpen( true )
 			}
 			if ( !pathname ) updatePathname()
 			// console.log ( 'pathname', pathname)
 			// updateVisitor ( `pathname`, document.location.pathname)
 		}
	}, [p2TSlice])

	return 	<div className={ classes.push2Talk }>
				<Feedback />
			</div>
}



/*
	<pre>
		{ JSON.stringify( p2TSlice.ipgeo, null, 2 ) }
	</pre>
*/