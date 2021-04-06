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
} from '@material-ui/core/'
import { 
	About,
	MessageSend,
} from './'

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
				<About />	
				<DialogActions>
					<MessageSend />
				</DialogActions>
			</Dialog>
}

