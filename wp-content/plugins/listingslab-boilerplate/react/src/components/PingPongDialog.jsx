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
    Typography,
} from '@material-ui/core/'
import { 
	About,
} from './'

const useStyles = makeStyles((theme) => ({
  pingPongDialog:{
  },
}))

export default function PingPongDialog( props ) {

	const classes = useStyles() 
	const pingpongSlice = useSelector(state => state.pingpong)
    const {
     	pJSON,
    } = pingpongSlice
    const { 
    	version 
    } = pJSON
	
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
				onClose={ closeDialog } >
				<About />
				<DialogActions>
					<Typography variant={ `body2` } color={ `textSecondary` } >
						vs { version }
					</Typography>
				</DialogActions>
			</Dialog>
}
