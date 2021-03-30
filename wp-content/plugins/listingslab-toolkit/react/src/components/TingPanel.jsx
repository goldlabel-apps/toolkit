import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    ButtonBase,
} from '@material-ui/core/'
// import { Icon } from '../theme'


const useStyles = makeStyles(theme => ({
	tingPanel:{
		border: '1px solid gold',
	},
}))

export default function TingPanel( props ) {
	
	const classes = useStyles() 
	return	<ButtonBase className={ clsx( classes.tingPanel ) } >
				TingPanel
			</ButtonBase>
}
