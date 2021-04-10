import React from 'react'
import { useSelector } from 'react-redux'
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
	MessageNew,
} from './'
import { 
	Icon,
} from '../theme'

const useStyles = makeStyles((theme) => ({
  pingPongDialog:{
  	padding: theme.spacing(),
  },
}))

export default function PingPongDialog( props ) {

	const classes = useStyles() 	
	const pingpongSlice = useSelector(state => state.pingpong)
	const {
		ting,
	} = pingpongSlice
	const { 
		gdpr,
		messages,
	} = ting	
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
				fullScreen={ fullScreen }
				maxWidth={ `sm` }
				onClose={ closeDialog } >
				<div className={ clsx( classes.pingPongDialog )}>
					<MessageNew />
					<pre>
						gdpr { JSON.stringify ( gdpr, null, 2 ) }
					</pre>
					<pre>
						messages { JSON.stringify ( messages, null, 2 ) }
					</pre>
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
				</div>
			</Dialog>
}

