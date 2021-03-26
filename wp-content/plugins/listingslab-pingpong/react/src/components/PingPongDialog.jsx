import React from 'react'
import { 
  toggleDialog,
} from '../redux/pingpong/actions'
import {
	useMediaQuery,
    Dialog,
    DialogContent,
    DialogActions,
    IconButton,
    Typography,
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
				maxWidth={ `xs` }
				onClose={ closeDialog } >
				<DialogActions>
					<Typography variant={ `body2` } color={ `textSecondary` }>
						@PingPong
					</Typography>
					<IconButton
						variant={ `outlined` }
						color={ `primary` }
						onClick={ closeDialog }>
						<Icon icon={ `close` } />
					</IconButton>
				</DialogActions>

				<DialogContent>
					<Choice />
					<Help />
				</DialogContent>
			</Dialog>
}
