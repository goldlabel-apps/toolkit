import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
} from '@material-ui/core/'
import { 
	WordPressAdminLinks,
} from './'

const useStyles = makeStyles(theme => ({
	wordPress: {
		minHeight: 95,
	},
}))

export default function DefaultWordPress( props ) {
	
	const classes = useStyles()
	const appSlice = useSelector(state => state.app)
	const {
		showWordpressAdminLinks,
	} = appSlice

	return	<div className={clsx( classes.wordPress )}>
				{ showWordpressAdminLinks ? <WordPressAdminLinks /> : null }
			</div>
}
