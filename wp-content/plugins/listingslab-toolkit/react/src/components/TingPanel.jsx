import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    ButtonBase,
    Typography,
} from '@material-ui/core/'
// import { Icon } from '../theme'


const useStyles = makeStyles(theme => ({
	tingPanel:{
		border: '1px solid #eee',
		borderRadius: theme.spacing( 0.5 ),
		marginBottom: theme.spacing(),
		width: '100%',
		display: 'block',
		textAlign: 'left',
	},
	panelContent: {
		padding: theme.spacing(),
	}
}))

export default function TingPanel( props ) {
	
	const classes = useStyles() 
	const { ting } = props
	if ( !ting ) return null
	const {
		id,
		host,
		browserName,
	} = ting
	// console.log ( 'ting.browserName', ting.browserName )
	const pingpongSlice = useSelector(state => state.pingpong)
	const {
		showId,
		showHost,
		showBrowser,
	} = pingpongSlice

	return	<ButtonBase 
				color={ `primary` }
				className={ clsx( classes.tingPanel ) } 
				onClick={ (e) => {
					e.preventDefault()
					// console.log ('ting', ting)
				}}>
				<div className={ clsx( classes.panelContent ) } >
					{ showId ? <Typography>{ id }</Typography>: null }
					{ showHost ? <Typography>{ host }</Typography>: null }
					{ showBrowser ? <Typography>{ browserName }</Typography>: null }
				</div>
			</ButtonBase>
}
