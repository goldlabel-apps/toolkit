import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
	getHostList,
} from '../redux/pingpong/actions'
import {
    makeStyles,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	card:{
		margin: theme.spacing(),
		background: 'none',
	    boxRadius: 'none',
	    boxShadow: 'none',
	    border: 'none',
	},
}))

export default function Hosts( props ) {
	
	const classes = useStyles() 
	const appSlice = useSelector(state => state.app)
	const {
	    environment,
	} = appSlice
	const { 
		host,
		selectedHost,
	} = environment

	// console.log('environment', environment)

	return	<div className={ clsx( classes.none ) }>
				<div className={ clsx( classes.none ) }>
					host { host }
				</div>
				<div className={ clsx( classes.none ) }>
					selectedHost { selectedHost }
				</div>
				<pre>
					{ JSON.stringify( getHostList () , null, 2 )  }
				</pre>
			</div>
}
