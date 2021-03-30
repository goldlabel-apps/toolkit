import React from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    // ButtonBase,
} from '@material-ui/core/'
// import { Icon } from '../theme'


const useStyles = makeStyles(theme => ({
	tingFilters:{
		border: '1px solid green',
	},
}))

export default function TingFilters( props ) {
	
	const classes = useStyles() 
	return	<div className={ clsx( classes.tingFilters ) } >
				TingFilters
			</div>
}
