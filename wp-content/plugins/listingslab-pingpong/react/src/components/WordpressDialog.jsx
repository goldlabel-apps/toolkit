import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { 
  toggleWordpressDialog,
} from '../redux/pingpong/actions'
import {
	makeStyles,
	useMediaQuery,
    Dialog,
    DialogTitle,
    IconButton,
    Typography,
} from '@material-ui/core/'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles((theme) => ({
  pingPongDialog:{
  	padding: theme.spacing(),
  },
  closeTrigger: {
    position: 'absolute',
    right: theme.spacing(),
    bottom: theme.spacing(),
    background: 'white',
  },
}))

export default function PingPongDialog( props ) {

	const classes = useStyles() 	
	const pingpongSlice = useSelector(state => state.pingpong)
	const {
		ting,
	} = pingpongSlice
	let isMobile = !useMediaQuery( '( min-width: 600px )' )
	let fullScreen = false
	if (isMobile){
		fullScreen = true
	}

	const closeDialog = () => {
		toggleWordpressDialog( false )
	}

	return	<Dialog
				open
				fullWidth
				fullScreen={ fullScreen }
				maxWidth={ `sm` }
				onClose={ closeDialog } >
				<DialogTitle>
				<Typography>
					WordPress
				</Typography>
				</DialogTitle>
				<div className={ clsx( classes.pingPongDialog )}>			
					<IconButton
						className={ clsx( classes.closeTrigger )}
	        			variant={ `text` }
	        			color={ `primary` }
	        			onClick={ (e) => {
	        				e.preventDefault()
	        				console.log ('ting', ting )
	        				toggleWordpressDialog( false )
	        			}}>
	        			<Icon icon={ `close` } color={ `inherit` } />				
					</IconButton>
				</div>
			</Dialog>
}

/*
<pre>
						ting { JSON.stringify ( ting, null, 2 ) }
					</pre>
*/