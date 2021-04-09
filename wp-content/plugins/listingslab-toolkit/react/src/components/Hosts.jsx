import React from 'react'
import clsx from 'clsx'
import {
	getHostList,
} from '../redux/pingpong/actions'
import {
    makeStyles,
} from '@material-ui/core/'
import {
	ComboBox,
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

	return	<div className={ clsx( classes.none ) }>
				<ComboBox options={{
					label: `Select Host`,
					id: `host-selector`,
					getList: getHostList,
					labelAttribute: `host`,
				}}/>
			</div>
}
