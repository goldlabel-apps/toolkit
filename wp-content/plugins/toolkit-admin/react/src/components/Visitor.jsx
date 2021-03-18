import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
	getFlagByCountryCode ,

} from '../lib'
import  { 
	toggleVisitor,
	deleteVisitor,
} from '../redux/visitors/actions'
import {
    makeStyles,
    Avatar,
    Drawer,
    DialogTitle,
    DialogContent,
    CardHeader,
    IconButton,
    Typography,
} from '@material-ui/core/'
import  { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	fullW: {
		width: 320,
	},
	visitor:{
		marginTop: 50,
	},
	btnTxt: {
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	},
}))

export default function Visitor( props ) {
	
	const classes = useStyles()
	const visitorsSlice = useSelector(state => state.visitors)
	const {
    	selectedId,
    	visitors,
    } = visitorsSlice

    React.useEffect(() => {
	}, [visitorsSlice])

	// console.log ('selectedId', selectedId)

	const deselect = () => {
		toggleVisitor( false, null )
		return true
	}

	if ( !selectedId ) return null

	let selectedVisitor = null

	for ( let i = 0; i < visitors.length; i++) {
		if (visitors[i].id === selectedId) selectedVisitor = visitors[i]
	}

	if ( !selectedVisitor ){
		toggleVisitor( false, null )
		return null
	}

	const {
		id,
		countryCode2,
		browserName,
		osName,
		countryName,
		languages,
		lng,
		lat,
		ip,
		city,
		stateProv,
		gdpr,
		isEu,
		pathname,
		pageTitle,
	} = selectedVisitor

	return	<Drawer
				open
				anchor={ `right` } 
				onClose={ deselect }>
				<div className={ clsx( classes.visitor ) }>
					<DialogTitle>
						<CardHeader 
							className={ clsx( classes.fullW ) }
							disableTypography
							avatar={ <Avatar src={ getFlagByCountryCode( countryCode2 ) } /> }
							action={ <React.Fragment>

										<IconButton
											color={ `secondary` }
											onClick={ ( e ) => {
												e.preventDefault()
												const really = window.confirm(`really really?`)
												if (really){
													deleteVisitor( id )
												}
											
											}}>
											<Icon icon={ `delete` } />
										</IconButton>

										<IconButton
											color={ `secondary` }
											onClick={ deselect }>
											<Icon icon={ `close` } />
										</IconButton>

									</React.Fragment> }
						/>
					</DialogTitle>

					<DialogContent>

						<Typography variant={ `body1` } noWrap>
							{ pageTitle }
						</Typography>

						<Typography variant={ `body1` } noWrap>
							{ pathname }
						</Typography>

						
						

						<Typography variant={ `body2` } noWrap>
							{ browserName } { osName }
						</Typography>

						<Typography variant={ `body2` } noWrap>
							{ city } { stateProv } { countryName }
						</Typography>

						<Typography variant={ `body2` } noWrap>
							{ languages }
						</Typography>

						<Typography variant={ `body2` } noWrap>
							lat { lat } lng { lng }
						</Typography>

						<Typography variant={ `body2` } noWrap>
							{ ip }
						</Typography>
						
						<Typography variant={ `body2` } noWrap>
							GDPR { gdpr.toString() } 
							European Union { isEu.toString() }
						</Typography>
						
					</DialogContent>
				</div>
				
			</Drawer>
	
}

/*
<pre>
							{ JSON.stringify( selectedVisitor, null, 2 ) }
						</pre>

<DialogActions>

					<Button
						variant={ `text` }
						color={ `primary` }
						onClick={ ( e ) => {
							e.preventDefault()
							console.log ( 'Delete', id )
						}}>
						<span className={ clsx ( classes.btnTxt ) }>
							Delete
						</span>
						<Icon icon={ `delete`} />
					</Button>

				</DialogActions>
*/