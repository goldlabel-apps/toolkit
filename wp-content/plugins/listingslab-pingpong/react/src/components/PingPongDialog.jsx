import React from 'react'
import { 
  toggleDialog,
} from '../redux/pingpong/actions'
import {
	useMediaQuery,
    Dialog,
    DialogActions,
    IconButton,
} from '@material-ui/core/'
import { 
	Help,
	Choice,	
} from './'
import { 
	Icon,
} from '../theme'

export default function PingPongDialog( props ) {

	let isMobile = !useMediaQuery( '(min-width:600px)' )

	const closeDialog = () => {
		toggleDialog( false )
	}

	return	<Dialog
				open
				fullWidth
				fullScreen={ isMobile}
				maxWidth={ `sm` }
				onClose={ closeDialog } >
				<DialogActions>
					
					<IconButton
						variant={ `outlined` }
						color={ `primary` }
						onClick={ closeDialog }>
						<Icon icon={ `close` } />
					</IconButton>
				</DialogActions>

					<Choice />
					<Help />
			</Dialog>
}
