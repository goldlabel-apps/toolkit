
import React from 'react'
import clsx from 'clsx'
import { 
  toggleDialog,
} from '../redux/pingpong/actions'
import {
	makeStyles,
	useMediaQuery,
    Dialog,
    DialogActions,
    IconButton,
} from '@material-ui/core/'
import { 
	Links,
	MessageNew,
} from './'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles((theme) => ({
  pingPongDialog:{
  },
}))

export default function PingPongDialog( props ) {

	const classes = useStyles() 	
	let isMobile = !useMediaQuery( '( min-width: 600px )' )
	let fullScreen = false
	if (isMobile){
		fullScreen = true
	}

	const closeDialog = () => {
		toggleDialog( false )
	}


	return	<Dialog
				open
				fullWidth 
				className={ clsx( classes.pingPongDialog )}
				fullScreen={ fullScreen }
				maxWidth={ `sm` }
				onClose={ closeDialog } 
			>
					<Links />
				<DialogActions>
					<MessageNew />

				</DialogActions>	
				<DialogActions>
					<IconButton
	        			variant={ `text` }
	        			color={ `primary` }
	        			onClick={ (e) => {
	        				e.preventDefault()
	        				toggleDialog( false )
	        			}}>
	        			<Icon icon={ `close` } color={ `inherit` } />
	        											
					</IconButton>
				</DialogActions>
			</Dialog>
}

/*
<About />
*/
