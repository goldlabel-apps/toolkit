import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
	getHostList,
} from '../redux/pingpong/actions'
import {
    makeStyles,
} from '@material-ui/core/'
import {
	SimpleMenu,
} from './'

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
	const pingpongSlice = useSelector( state => state.pingpong )
	const {
	    selectedHost,
	} = pingpongSlice

	// console.log ( 'selectedHost', selectedHost )

	return	<div className={ clsx( classes.none ) }>
				<SimpleMenu options={{
					id: `host-selector`,
					label: selectedHost,
					getList: getHostList,
				}}/>
			</div>
}
