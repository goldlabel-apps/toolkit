import React from 'react'
import { 
  toggleDialog,
} from '../redux/pingpong/actions'
import {
	useMediaQuery,
    Dialog,
} from '@material-ui/core/'
import { 
	ToolKit,
	MessageSingle,
} from './'

export default function PingPongDialog( props ) {

	let isMobile = !useMediaQuery( '( min-width: 600px )' )

	const closeDialog = () => {
		toggleDialog( false )
	}

	return	<Dialog
				open
				fullWidth
				fullScreen={ isMobile }
				maxWidth={ `sm` }
				onClose={ closeDialog } >
					<ToolKit />	
					<MessageSingle />
			</Dialog>
}
